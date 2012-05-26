var requirejs = require('requirejs')
  , should = require('should');

requirejs.config({baseUrl: './lib/assets/js'});

requirejs(['bbt'], function (one) {
  describe('Bbt', function () {
    it('should be amazing', function () {
      one.should.be.a('object');
    })
  });
});
