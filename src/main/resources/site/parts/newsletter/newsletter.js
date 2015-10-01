var thymeleaf = require('/lib/xp/thymeleaf');
var contentLib = require('/lib/xp/content'); // Import the content service functions
var portal = require('/lib/xp/portal'); // Import the portal functions

exports.get = function(req) {
  var currentContent = portal.getContent();
  var component = portal.getComponent();

  var result = contentLib.getChildren({
      key: currentContent._path,
      count: 100,
      contentTypes: [
        module.name + ':newsletter'
      ]
  });

  var params = {
    newsletters: result.hits
  };

  var view = resolve('newsletter.html');

  return {
    body: thymeleaf.render(view, params)
  };
};