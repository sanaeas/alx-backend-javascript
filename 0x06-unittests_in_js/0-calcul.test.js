const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function () {
  it('sum of rounded numbers when both inputs are integers', () => {
    assert.strictEqual(calculateNumber(2, 3), 5);
  });

  it('sum of rounded numbers when one input is a float', () => {
    assert.strictEqual(calculateNumber(1, 2.7), 4);
  });

  it('sum of rounded numbers when both inputs are floats', () => {
    assert.strictEqual(calculateNumber(2.2, 3.7), 6);
  });

  it('sum of rounded numbers when both inputs are floats with .5 rounding', () => {
    assert.strictEqual(calculateNumber(3.5, 3.7), 8);
  });
});
