var stk = require('/cms/lib/stk/stk.js');

exports.get = function(req) {

  var component = execute('portal.getComponent');

  var view = resolve('./three-columns.html');

  var params = {
    component: component,
    leftRegion: component.regions["left"],
    centerRegion: component.regions["center"],
    rightRegion: component.regions["right"]
  }

  return stk.view.render(view, params)
};