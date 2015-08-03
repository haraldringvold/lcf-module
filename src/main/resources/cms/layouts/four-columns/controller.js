var stk = require('/cms/lib/stk/stk.js');

exports.get = function(req) {

  var component = execute('portal.getComponent');
  var config = component.config;

  var baseClasses = "outer columns four";

  var classes = config['noPadding'] ? baseClasses+" no-padding" : baseClasses;

  var view = resolve('./four-columns.html');

  var params = {
    component: component,
    oneRegion: component.regions["one"],
    twoRegion: component.regions["two"],
    threeRegion: component.regions["three"],
    fourRegion: component.regions["four"],
    classes: classes
  }

  return stk.view.render(view, params)
};