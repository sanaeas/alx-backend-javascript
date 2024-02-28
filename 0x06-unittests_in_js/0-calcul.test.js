const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function () {
  it('sum of rounded numbers when both inputs are integers', () => {
    assert.strictEqual(calculateNumber(2, 3), 5);
  });

  it('sum of rounded numbers when one input is a float', () => {
    assert.strictEqual(calculateNumber(1, 2.7), 4);
  });

  it('sum of rounded numbers when one is float with .0', () => {
    assert.strictEqual(calculateNumber(1.0, 2.4), 3);
  });

  it('sum of rounded numbers when both inputs are floats under .5', () => {
    assert.strictEqual(calculateNumber(2.2, 3.4), 5);
  });

  it('sum of rounded numbers when both inputs are floats', () => {
    assert.strictEqual(calculateNumber(2.2, 3.7), 6);
  });

  it('sum of rounded numbers when both inputs are floats with .5 rounding', () => {
    assert.strictEqual(calculateNumber(3.5, 3.7), 8);
  });

  it('sum of rounded negative numbers when both inputs are floats', () => {
    assert.strictEqual(calculateNumber(-2.6, -2.0), -5);
  });
});
