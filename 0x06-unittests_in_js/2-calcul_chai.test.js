const expect = require('chai').expect;
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('sum of rounded numbers', () => {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });

    it('sum of rounded negative numbers', () => {
      expect(calculateNumber('SUM', -2.0, -2.4)).to.equal(-4);
    });
  });

  describe('SUBTRACT', () => {
    it('difference of rounded numbers', () => {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });

    it('difference of rounded positive and negative numbers', () => {
      expect(calculateNumber('SUBTRACT', 3.0, -2.0)).to.equal(5.0);
    });
  });

  describe('DIVIDE', () => {
    it('quotient of rounded numbers when divisor is not 0', () => {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });

    it('Error when divisor is 0', () => {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });
  });
});
