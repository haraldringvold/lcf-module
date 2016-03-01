var thymeleaf = require('/lib/xp/thymeleaf');
var contentLib = require('/lib/xp/content'); // Import the content service functions
var portal = require('/lib/xp/portal'); // Import the portal functions
var utilities = require('/lib/utilities.js');

exports.get = function(req) {
  var component = portal.getComponent();
  var config = component.config;

  var baseClasses = "outer eyecatcher fixed";

  var heading       = config.heading;
  var linkText      = config.linkText;
  var linkUrl       = config.linkUrl;
  var anchorContent = config.anchorContent;
  var linkPage      = config.linkPage;
  var imgUrl        = portal.imageUrl({id: config.image, scale: '(1,1)'});
  var url           = utilities.getLinkUrl(linkPage, linkUrl, anchorContent);
  var classes       = config.fullHeight ? baseClasses+" full-height" : baseClasses;

  var params = {
    heading: heading,
    linkText: linkText,
    url: url,
    imgUrl: imgUrl,
    classes: classes
  };

  var view = resolve('eye-catcher.html');

  return {
    body: thymeleaf.render(view, params)
  }
};