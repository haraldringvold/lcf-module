var stk = require('/cms/lib/stk/stk.js');

exports.get = function(req) {

  var component = execute('portal.getComponent');
  var config = component.config;
  var baseClasses = "outer columns three";

  var classes = config['noPadding'] ? baseClasses+" no-padding" : baseClasses;

  var view = resolve('./three-columns.html');

  var params = {
    component: component,
    leftRegion: component.regions["left"],
    centerRegion: component.regions["center"],
    rightRegion: component.regions["right"],
    classes: classes
  }

  return stk.view.render(view, params)
};