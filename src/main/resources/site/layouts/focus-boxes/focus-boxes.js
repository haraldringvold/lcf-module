var thymeleaf = require('/lib/xp/thymeleaf');
var contentLib = require('/lib/xp/content'); // Import the content service functions
var portal = require('/lib/xp/portal'); // Import the portal functions
var utils = require('/lib/util/js/util.js');

exports.get = function(req) {

  var component = portal.getComponent();
  var config = component.config;
  var baseClasses = "outer columns three";

  var classes = config['noPadding'] ? baseClasses+" no-padding" : baseClasses;


  var params = {
    component: component,
    leftRegion: component.regions["left"],
    centerRegion: component.regions["center"],
    rightRegion: component.regions["right"],
    classes: classes
  }

  var view = resolve('./focus-boxes.html');

  return {
    body: thymeleaf.render(view, params)
  };
};