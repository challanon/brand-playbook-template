const fs = require('node:fs');
const path = require('node:path');
const YAML = require('yaml');

const root = path.resolve(process.argv[2] || '.');
let failures = 0;
const fail = (file, message) => { failures += 1; console.error(`${file}: ${message}`); };
const read = (file) => fs.readFileSync(file, 'utf8');
const parse = (file) => {
  const match = read(file).match(/^---\s*\n([\s\S]*?)\n---/);
  if (!match) { fail(file, 'missing YAML frontmatter'); return null; }
  try { return YAML.parse(match[1]); } catch (error) { fail(file, `invalid YAML: ${error.message}`); return null; }
};
const template = (value) => typeof value === 'string' && value.includes('[');
const walk = (dir) => fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
  const target = path.join(dir, entry.name);
  if (entry.name === '.git' || entry.name === 'node_modules') return [];
  return entry.isDirectory() ? walk(target) : [target];
});

for (const file of walk(root).filter((file) => path.basename(file) === 'BRANDBOOK.md')) {
  const data = parse(file);
  if (!data || template(data?.brand?.slug)) continue;
  for (const field of ['standard', 'spec_version', 'brand', 'markets', 'languages', 'default_language', 'version', 'last_validated', 'files']) {
    if (data[field] === undefined) fail(file, `missing root field: ${field}`);
  }
  if (data.standard !== 'brandbook.md') fail(file, 'standard must be brandbook.md');
  if (!Array.isArray(data.files)) { fail(file, 'files must be an array'); continue; }
  for (const entry of data.files) {
    if (!entry.path || !entry.type || !entry.summary) { fail(file, 'each file index entry needs path, type, and summary'); continue; }
    const child = path.join(path.dirname(file), entry.path);
    if (!fs.existsSync(child)) { fail(file, `indexed file missing: ${entry.path}`); continue; }
    const childData = parse(child);
    if (!childData) continue;
    if (childData.standard !== 'brandbook.md') fail(child, 'standard must be brandbook.md');
    if (childData.brand !== data.brand.slug) fail(child, `brand must equal ${data.brand.slug}`);
    if (childData.type !== entry.type) fail(child, `type must equal index type ${entry.type}`);
  }
}

for (const file of walk(root).filter((file) => file.endsWith('.json') && file.includes(`${path.sep}assets${path.sep}files${path.sep}`))) {
  try { JSON.parse(read(file)); } catch (error) { fail(file, `invalid JSON: ${error.message}`); }
}

if (failures) process.exit(1);
console.log('Brand playbook validation passed.');
