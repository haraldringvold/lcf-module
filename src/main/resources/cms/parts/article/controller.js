var menu = require('/cms/lib/menu.js');
var stk = require('/cms/lib/stk/stk.js');
var utilities = require('/cms/lib/utilities.js');

exports.get = function(req) {
  var component = execute('portal.getComponent');
  var config = component.config;

  var baseClasses = "outer eyecatcher fixed";

  var heading       = config['heading'];

  var params = {
    heading: heading
  };

  var view = resolve('article.html');

  return stk.view.render(view, params);
};