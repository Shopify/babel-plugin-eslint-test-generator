"drop in some tests below this string";

suite('lint all files', () => {
  test('test/test-src-to-lint/some-errors.js should lint', () => {
    assert.ok(false, 'test/test-src-to-lint/some-errors.js should pass lint.\n1:4 - Parsing error: Unexpected token ');
  });
  test('test/test-src-to-lint/some-warnings.js should lint', () => {
    assert.ok(true, 'test/test-src-to-lint/some-warnings.js should pass lint.');
  });
});
