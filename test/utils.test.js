const expect = require('chai').expect;
const endpoints = require('../lib/utils').ENDPOINTS;

describe('lib/utils.js', function() {
  describe('endpoints', function() {
    it('should return the available endpoints', function() {
        expect(Object.keys(endpoints).length).to.equal(10);
    });
  });
});