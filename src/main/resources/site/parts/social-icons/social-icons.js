var thymeleaf = require('/lib/xp/thymeleaf');
var contentLib = require('/lib/xp/content'); // Import the content service functions
var portal = require('/lib/xp/portal'); // Import the portal functions

exports.get = function(req) {
  var component = portal.getComponent();
  var config = component.config;

  var params = {
    facebook: config.facebook,
    youtube: config.youtube,
    instagram: config.instagram
  };

  var view = resolve('social-icons.html');

  return {
    body: thymeleaf.render(view, params)
  };
};