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

  it('return correct payment methods', function (done) {
    request.get(
      'http://localhost:7865/available_payments',
      function (error, response, body) {
        const expectedResponse = {
          payment_methods: {
            credit_cards: true,
            paypal: false,
          },
        };
        expect(response.statusCode).to.be.equal(200);
        expect(JSON.parse(body)).to.deep.equal(expectedResponse);
        done();
      }
    );
  });

  it('return welcome message with username', function (done) {
    const options = {
      url: 'http://localhost:7865/login',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userName: 'Betty' }),
    };

    request(options, function (error, response, body) {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal(`Welcome ${username}`);
      done();
    });
  });
});
