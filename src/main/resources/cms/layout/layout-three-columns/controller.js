var stk = require('/cms/lib/stk/stk.js');

exports.get = function(req) {

  var component = execute('portal.getComponent');

  var params = {
    component: component,
    leftRegion: component.regions["left"],
    centerRegion: component.regions["center"]
    rightRegion: component.regions["right"]
  }

  var view = resolve('default.html');

  return stk.view.render(view, params)
};