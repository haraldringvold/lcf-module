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
        module.name + ':person'
      ]
  });

  var persons = [];

  for (var i = 0; i < result.contents.length; i++) {
    var content = result.contents[i];
    stk.data.deleteEmptyProperties(content.data)
    content.data.imageUrl = execute('portal.imageUrl', {id: content.data.image});
    content.data.hoverImageUrl = execute('portal.imageUrl', {id: content.data.hoverImage});
    persons.push(content);
  }

  var slicedPersons = sliceArray(persons, 3);

  var params = {
    persons: slicedPersons
  };

  var view = resolve('the-team.html');

  return stk.view.render(view, params);
};


function sliceArray(array, size) {
  var slicedArray = [];
  for (var index = 0; index < array.length; index+= size)
    slicedArray.push( array.slice(index, index + size) );

  return slicedArray;
}