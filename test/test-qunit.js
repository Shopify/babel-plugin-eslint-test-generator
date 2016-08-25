import assert from 'assert';
import fs from 'fs';
import path from 'path';
import * as babel from 'babel-core';
import plugin from '../src';

export default function() {
  it('generate qunit tests and append them to existing js', () => {
    const expect = fs.readFileSync(path.join(__dirname, 'fixtures', 'expect-test-qunit'), 'utf8');

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

    assert.equal(result.code, expect, 'output matched expected');
  });
}
