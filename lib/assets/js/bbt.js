define(['jquery', 'Underscore', 'Backbone'], function ($, _, Backbone) {
  /**
   *  Just playing around to test Backbone and jQuery
   */

  Backbone.sync = function (method, model) {
    console.log('[sync] ' + method + ": " + JSON.stringify(model));
    model.id = 1;
  };

  var Sidebar = Backbone.Model.extend({
    promptColor: function () {
      var cssColor = prompt('Please enter a CSS color:');
      this.set({color: cssColor});
    }
  });

  var sidebar = new Sidebar;

  sidebar.on('change:color', function (model, color) {
    $('#sidebar').css({color: color});
  });

  sidebar.on('change:backgroundColor', function (model, color) {
    $('#sidebar').css({backgroundColor: color});
  });

  sidebar.on('change:shade', function (model, shade) {
    console.log('shade: ', shade);
  });

  sidebar.set({color: '#fff', backgroundColor: '#777'});
  sidebar.set({shade: 'blue'});

  //sidebar.promptColor();

  sidebar.save();

  return sidebar;
});
