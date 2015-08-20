var menu = require('/cms/lib/menu.js');
var stk = require('/cms/lib/stk/stk.js');
var utilities = require('/cms/lib/utilities.js');

exports.get = function(req) {
  var currentContent = execute('portal.getContent');
  var component = execute('portal.getComponent');

  var result = execute('content.getChildren', {
      key: currentContent._path,
      count: 100,
      contentTypes: [
        module.name + ':newsletter'
      ]
  });

  var params = {
    newsletters: result.contents
  };

  var view = resolve('newsletter.html');

  return stk.view.render(view, params);
};