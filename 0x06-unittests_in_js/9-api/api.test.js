const request = require('request');
const { expect } = require('chai');

describe('Index page', function () {
  it('return correct result', function (done) {
    request.get('http://localhost:7865', function (error, response, body) {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  it('return correct result when :id is a number', function (done) {
    request.get(
      'http://localhost:7865/cart/12',
      function (error, response, body) {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal('Payment methods for cart 12');
        done();
      }
    );
  });

  it('return 404 when :id is NOT a number', function (done) {
    request.get('http://localhost:7865/cart/hello', function (error, response) {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });
});
