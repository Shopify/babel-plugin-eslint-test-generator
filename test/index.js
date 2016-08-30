import testMocha from './test-mocha';
import testOptionFile from './test-option-file';
import testQUnit from './test-qunit';

describe('generate different platforms', () => {
  testMocha();
  testQUnit();
});

describe('test using properties', () => {
  testOptionFile();
});
