var menu = require('/cms/lib/menu.js');
var stk = require('/cms/lib/stk/stk.js');
var utilities = require('/cms/lib/utilities.js');

exports.get = function(req) {
  var menuItems = menu.getSiteMenu(3);

  var params = {
    menuItems: menuItems
  };

  var view = resolve('menu.html');

  return stk.view.render(view, params);
};