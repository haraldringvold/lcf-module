var menu = require('/cms/lib/menu.js');
var stk = require('/cms/lib/stk/stk.js');

exports.get = function(req) {
  var component = execute('portal.getComponent');
  var config = component.config;

  var heading = config['heading'];
  var linkUrl = config['linkUrl'];
  var linkText = config['linkText'];
  var imgUrl =  execute('portal.imageUrl', {
    id: config['image']
  });

  var params = {
    heading: heading,
    linkUrl: linkUrl,
    linkText: linkText
  };

  var view = resolve('eye-catcher.html');

  return stk.view.render(view, params);
};