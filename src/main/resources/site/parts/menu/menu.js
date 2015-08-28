var menu = require('/lib/util/js/util.js').menu;
var stk = require('/lib/stk/stk.js');
var utilities = require('/lib/utilities.js');

exports.get = function(req) {
  var menuItems = menu.getSiteMenu(3);

  var params = {
    menuItems: menuItems
  };

  var view = resolve('menu.html');

  return stk.view.render(view, params);
};