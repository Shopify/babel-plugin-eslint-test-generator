import testMocha from './test-mocha';
import testQUnit from './test-qunit';

describe('generate different platforms', () => {
  testMocha();
  testQUnit();
});
