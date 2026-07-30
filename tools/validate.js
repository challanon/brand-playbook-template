const fs = require('node:fs');
const path = require('node:path');
const Ajv2020 = require('ajv/dist/2020');
const addFormats = require('ajv-formats');
const YAML = require('yaml');

const root = path.resolve(process.argv[2] || '.');
const findSupportRoot = (dir) => {
  let current = dir;
  while (current !== path.dirname(current)) {
    if (fs.existsSync(path.join(current, 'schema', 'brandbook-root.schema.json'))) return current;
    current = path.dirname(current);
  }
  return root;
};
const supportRoot = findSupportRoot(root);
let failures = 0;
const fail = (file, message) => { failures += 1; console.error(`${file}: ${message}`); };
const read = (file) => fs.readFileSync(file, 'utf8');
const parse = (file) => {
  const match = read(file).match(/^---\s*\n([\s\S]*?)\n---/);
  if (!match) { fail(file, 'missing YAML frontmatter'); return null; }
  try { return YAML.parse(match[1], { schema: 'core' }); } catch (error) { fail(file, `invalid YAML: ${error.message}`); return null; }
};
const template = (value) => typeof value === 'string' && value.includes('[');
const walk = (dir) => fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
  const target = path.join(dir, entry.name);
  if (['.git', 'node_modules'].includes(entry.name)) return [];
  if (root === dir && entry.name === 'evals') return [];
  return entry.isDirectory() ? walk(target) : [target];
});
const ajv = new Ajv2020({ allErrors: true, strict: false });
addFormats(ajv);
const loadSchema = (name) => JSON.parse(read(path.join(supportRoot, 'schema', name)));
const validateRoot = ajv.compile(loadSchema('brandbook-root.schema.json'));
const validateFile = ajv.compile(loadSchema('brandbook-file.schema.json'));
const schemaErrors = (validate) => (validate.errors || []).map((error) => `${error.instancePath || '/'} ${error.message}`).join('; ');

const rootFiles = walk(root).filter((file) => path.basename(file) === 'BRANDBOOK.md');
if (!rootFiles.length) fail(root, 'no BRANDBOOK.md found');
for (const file of rootFiles) {
  const data = parse(file);
  if (!data || template(data?.brand?.slug)) continue;
  if (!validateRoot(data)) { fail(file, `root schema: ${schemaErrors(validateRoot)}`); continue; }
  if (!data.languages.includes(data.default_language)) fail(file, 'default_language must be listed in languages');
  const seenPaths = new Set();
  for (const entry of data.files) {
    if (seenPaths.has(entry.path)) fail(file, `duplicate file index path: ${entry.path}`);
    seenPaths.add(entry.path);
    const child = path.join(path.dirname(file), entry.path);
    if (!fs.existsSync(child)) { fail(file, `indexed file missing: ${entry.path}`); continue; }
    const childData = parse(child);
    if (!childData) continue;
    if (!validateFile(childData)) { fail(child, `file schema: ${schemaErrors(validateFile)}`); continue; }
    if (childData.brand !== data.brand.slug) fail(child, `brand must equal ${data.brand.slug}`);
    if (childData.type !== entry.type) fail(child, `type must equal index type ${entry.type}`);
  }
  if (data.profile === 'production' && !fs.existsSync(path.join(supportRoot, 'profiles', 'production', 'PROFILE.md'))) {
    fail(file, 'production profile declared but profiles/production/PROFILE.md is missing');
  }
}

for (const file of walk(root).filter((file) => file.endsWith('.json') && file.includes(`${path.sep}assets${path.sep}files${path.sep}`))) {
  try { JSON.parse(read(file)); } catch (error) { fail(file, `invalid JSON: ${error.message}`); }
}

for (const file of walk(root).filter((file) => file.includes(`${path.sep}examples${path.sep}`) && file.includes(`${path.sep}contracts${path.sep}`) && file.endsWith('.json'))) {
  const schemaName = `${path.basename(file, '.json')}.schema.json`;
  const schemaFile = path.join(supportRoot, 'contracts', schemaName);
  if (!fs.existsSync(schemaFile)) { fail(file, `missing contract schema: ${schemaName}`); continue; }
  let data;
  try { data = JSON.parse(read(file)); } catch (error) { fail(file, `invalid JSON: ${error.message}`); continue; }
  const validate = ajv.compile(JSON.parse(read(schemaFile)));
  if (!validate(data)) fail(file, `contract schema: ${schemaErrors(validate)}`);
}

if (failures) process.exit(1);
console.log(`Brand playbook validation passed (${rootFiles.length} package(s)).`);
