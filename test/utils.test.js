const assert = require('assert');
const endpoints = require('../lib/utils').ENDPOINTS;

describe('lib/utils.js', function() {
  describe('endpoints', function() {
    it('should return the available endpoints', function() {
        assert.equal(Object.keys(endpoints).length, 10);
    });
  });
});