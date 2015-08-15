var menu = require('/cms/lib/menu.js');
var stk = require('/cms/lib/stk/stk.js');
var utilities = require('/cms/lib/utilities.js');

exports.get = function(req) {
  var component = execute('portal.getComponent');
  var currentContent = execute('portal.getContent');
  var config = component.config;

  var result = execute('content.getChildren', {
      key: config['imageFolder'],
      count: 20,
      contentTypes: [
        'media:image'
      ]
  });

  var images = [];

  for (var i = 0; i < result.contents.length; i++) {
    var content = result.contents[i];
    stk.data.deleteEmptyProperties(content.data)
    content.data.imageUrl = execute('portal.imageUrl', {id: content._id});
    images.push(content);
  }

  var params = {
    images: images
  };

  var view = resolve('gallery.html');

  return stk.view.render(view, params);
};