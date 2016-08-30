'use strict';
'I AM A';
'use strict';
'I AM B';

describe('lint all files', function () {
  it('test/test-src-to-lint/some-errors.js should lint', function () {
    assert.ok(false, 'test/test-src-to-lint/some-errors.js should pass lint.\n1:4 - Parsing error: Unexpected token ');
  });
  it('test/test-src-to-lint/some-warnings.js should lint', function () {
    assert.ok(true, 'test/test-src-to-lint/some-warnings.js should pass lint.');
  });
});

