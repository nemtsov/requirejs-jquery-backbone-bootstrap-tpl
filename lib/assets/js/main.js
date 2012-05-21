require.config({
  paths: {
      'jquery': 'jquery/jquery-1.7.2.min'
  }
});

require([
    'jquery'
  , 'one' , 'two' , 'three'
  , 'bootstrap/collapse'
  , 'bbt'
], function ($, one, two, three) {
  /**
   * Interesting comment here
   */
  console.log('one: %o, two: %o, three: %o', one, two, three);
});
