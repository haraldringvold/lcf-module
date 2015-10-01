var menu = require('/lib/enonic/menu/menu').menu;
var stk = require('/lib/stk/stk.js');

exports.get = function(req) {
  var menuItems = menu.getMenuTree(3);

  var params = {
    menuItems: menuItems
  };

  var view = resolve('menu.html');

  return stk.view.render(view, params);
};