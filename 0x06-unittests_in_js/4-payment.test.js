const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  it('call console.log with the correct arguments', () => {
    const calculateNumberStub = sinon
      .stub(Utils, 'calculateNumber')
      .returns(10);
    const consoleSpy = sinon.spy(console);

    sendPaymentRequestToApi(100, 20);

    expect(calculateNumberStub.calledOnce).to.be.true;
    expect(calculateNumberStub.calledOnceWithExactly('SUM', 100, 20)).to.be.true;

    expect(consoleSpy.log.calledOnce).to.be.true;
    expect(consoleSpy.log.calledOnceWithExactly('The total is: 10')).to.be.true;

    calculateNumberStub.restore();
    consoleSpy.log.restore();
  });
});
