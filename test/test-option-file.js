import assert from 'assert';
import fs from 'fs';
import path from 'path';
import * as babel from 'babel-core';
import now from 'right-now';
import plugin from '../src';

export default function() {
  it('generate mocha tests and append them to existing js', () => {
    const expect = fs.readFileSync(path.join(__dirname, 'fixtures', 'expect-test-file.js'), 'utf8');
    const result = fs.readFileSync(path.join(__dirname, 'out-file.js'), 'utf8');

    assert.equal(result.trim(), expect.trim(), 'output matched expected');
  });
}
