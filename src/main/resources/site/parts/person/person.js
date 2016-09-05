var thymeleaf = require('/lib/xp/thymeleaf');
var contentLib = require('/lib/xp/content'); // Import the content service functions
var portal = require('/lib/xp/portal'); // Import the portal functions
var stk = require('/lib/stk/stk'); // Import the portal functions

exports.get = function(req) {
  var content = portal.getContent();

   content.data.imageUrl = portal.imageUrl({
    id: content.data.image,
    scale: 'block(349,349)'
  });
  content.data.hoverImageUrl = portal.imageUrl({
    id: content.data.hoverImage,
    scale: 'block(349,349)'
  });

  var model = {
    name: content.displayName,
    role: content.data.role,
    description: content.data.description,
    hoverImageUrl: content.data.hoverImageUrl,
    imageUrl: content.data.imageUrl
  };

  var view = resolve('person.html');

  return {
    body: thymeleaf.render(view, model)
  };
};


function sliceArray(array, size) {
  var slicedArray = [];
  for (var index = 0; index < array.length; index+= size)
    slicedArray.push( array.slice(index, index + size) );

  return slicedArray;
}
