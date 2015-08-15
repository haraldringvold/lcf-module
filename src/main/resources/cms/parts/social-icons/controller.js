var menu = require('/cms/lib/menu.js');
var stk = require('/cms/lib/stk/stk.js');
var utilities = require('/cms/lib/utilities.js');

exports.get = function(req) {
  var component = execute('portal.getComponent');
  var config = component.config;

  var facebook       = config['facebook'];
  var youtube        = config['youtube'];
  var instagram      = config['instagram'];

  var params = {
    facebook: facebook,
    youtube: youtube,
    instagram: instagram
  };

  var view = resolve('social-icons.html');

  return stk.view.render(view, params);
};