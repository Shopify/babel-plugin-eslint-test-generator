"drop in some tests below this string";

test('lint all files', assert => {
  assert.ok(false, 'test/test-src-to-lint/some-errors.js should pass lint.\n1:4 - Parsing error: Unexpected token ');
  assert.ok(true, 'test/test-src-to-lint/some-warnings.js should pass lint.');
});