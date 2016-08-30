import assert from 'assert';
import fs from 'fs';
import path from 'path';
import * as babel from 'babel-core';
import now from 'right-now';
import plugin from '../src';

export default function() {
  it('generate qunit tests and append them to existing js', () => {
    const expect = fs.readFileSync(path.join(__dirname, 'fixtures', 'expect-test-qunit.js'), 'utf8');

    const timeStart = now();

    const result = babel.transform('"drop in some tests below this string";', {
      plugins: [
        [plugin, {
          template: 'qunit',
          paths: 'test/test-src-to-lint/**/*.js',
          optsEslint: {
            ignore: false,
          },
        }],
      ],
    });

    const timeEnd = now();

    assert.equal(result.code, expect, 'output matched expected');
    assert.ok(timeEnd - timeStart < 600, 'should not take more 600ms');
  });
}
