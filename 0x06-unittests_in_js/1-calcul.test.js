const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function () {
  describe('SUM', function () {
    it('sum of rounded numbers', function () {
      assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    });

    it('sum of rounded negative numbers', () => {
      assert.strictEqual(calculateNumber('SUM', -2.0, -2.4), -4);
    });
  });

  describe('SUBTRACT', function () {
    it('difference of rounded numbers', function () {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });

    it('difference of rounded positive and negative numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 3.0, -2.0), 5.0);
    });
  });

  describe('DIVIDE', function () {
    it('quotient of rounded numbers when divisor is not 0', function () {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });

    it('return Error when divisor is 0', function () {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });
  });
});
