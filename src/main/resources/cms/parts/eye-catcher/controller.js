var menu = require('/cms/lib/menu.js');
var stk = require('/cms/lib/stk/stk.js');
var utilities = require('/cms/lib/utilities.js');

exports.get = function(req) {
  var component = execute('portal.getComponent');
  var config = component.config;

  var baseClasses = "outer eyecatcher fixed";

  var heading       = config['heading'];
  var linkText      = config['linkText'];
  var linkUrl       = config['linkUrl'];
  var anchorContent = config['anchorContent'];
  var linkPage      = config['linkPage'];
  var imgUrl        = execute('portal.imageUrl', {id: config['image']});
  var url           = utilities.determineUrl(linkUrl, anchorContent, linkPage);
  var classes       = config['fullHeight'] ? baseClasses+" full-height" : baseClasses;

  var params = {
    heading: heading,
    linkText: linkText,
    url: url,
    imgUrl: imgUrl,
    classes: classes
  };

  var view = resolve('eye-catcher.html');

  return stk.view.render(view, params);
};