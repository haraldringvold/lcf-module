var thymeleaf = require('/lib/xp/thymeleaf');
var contentLib = require('/lib/xp/content'); // Import the content service functions
var portal = require('/lib/xp/portal'); // Import the portal functions

exports.get = function(req) {
  var component = portal.getComponent();
  var currentContent = portal.getContent();

  var result = contentLib.getChildren({
      key: component.config.imageFolder,
      count: 20,
      contentTypes: [
        'media:image'
      ]
  });

  var images = [];

  for (var i = 0; i < result.count; i++) {
    var content = result.hits[i];
    content.data.imageUrl = portal.imageUrl({id: content._id, scale: 'block(480,319)'});
    images.push(content);
  }

  var params = {
    images: images
  };

  var view = resolve('gallery.html');

  return {
    body: thymeleaf.render(view, params)
  };
};