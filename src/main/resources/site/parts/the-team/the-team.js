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
        module.name + ':person'
      ]
  });

  var persons = [];

  for (var i = 0; i < result.hits.length; i++) {
    var content = result.hits[i];
    content.data.imageUrl = portal.imageUrl({id: content.data.image, scale: 'block(349,349)'});
    content.data.hoverImageUrl = portal.imageUrl({id: content.data.hoverImage, scale: 'block(349,349)'});
    persons.push(content);
  }

  var slicedPersons = sliceArray(persons, 3);

  var params = {
    persons: slicedPersons
  };

  var view = resolve('the-team.html');

  return {
    body: thymeleaf.render(view, params)
  };
};


function sliceArray(array, size) {
  var slicedArray = [];
  for (var index = 0; index < array.length; index+= size)
    slicedArray.push( array.slice(index, index + size) );

  return slicedArray;
}