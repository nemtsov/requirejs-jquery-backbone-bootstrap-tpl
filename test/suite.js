var requirejs = require('requirejs')
  , should = require('should');

requirejs.config({
    baseUrl: './lib/assets/js'
  , paths: {
      test: '../../../test'
    }
});

requirejs([
    'test/one-test'
  , 'test/bbt-test'
], function (one, bbt) {
  // done testing
});
