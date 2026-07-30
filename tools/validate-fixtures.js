const { spawnSync } = require('node:child_process');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const fixtures = [['valid-production', 0], ['invalid-missing-index', 1], ['invalid-type-mismatch', 1]];
let failed = false;
for (const [name, expected] of fixtures) {
  const result = spawnSync(process.execPath, [path.join(__dirname, 'validate.js'), path.join(root, 'evals', 'fixtures', name)], { encoding: 'utf8' });
  if ((result.status === 0 ? 0 : 1) !== expected) {
    failed = true;
    console.error(`${name}: expected ${expected === 0 ? 'pass' : 'fail'}\n${result.stdout}${result.stderr}`);
  }
}
if (failed) process.exit(1);
console.log('Validation fixtures passed.');
