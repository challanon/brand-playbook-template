const fs = require('node:fs');
const path = require('node:path');

const fixtures = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'spec', 'evals', 'safety-fixtures.json'), 'utf8'));
let failed = false;
for (const fixture of fixtures) {
  if (fixture.decision !== fixture.expected) {
    failed = true;
    console.error(`${fixture.name}: expected ${fixture.expected}, got ${fixture.decision}`);
  }
}
if (failed) process.exit(1);
console.log(`Safety conformance fixtures passed (${fixtures.length}).`);
