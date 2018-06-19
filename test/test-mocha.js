import assert from 'assert';
import fs from 'fs';
import path from 'path';
import * as babel from 'babel-core';
import now from 'right-now';
import plugin from '../src';

export default function() {
  it('generate mocha tests and append them to existing js', () => {
    const expect = fs.readFileSync(path.join(__dirname, 'fixtures', 'expect-test-mocha.js'), 'utf8');

    const timeStart = now();

    const result = babel.transform('"drop in some tests below this string";', {
      plugins: [
        [plugin, {
          template: 'mocha',
          paths: 'test/test-src-to-lint/**/*.js',
          optsEslint: {
            ignore: false,
          },
        }],
      ],
    });

    const timeEnd = now();
    const timeDiff = timeEnd - timeStart;

    assert.equal(result.code.trim(), expect.trim(), 'output matched expected');
    // 1000ms because it seems that the first build takes longer
    assert.ok(timeDiff < 1000, `should not take more 1000ms it took ${timeDiff}`);
  });
}
