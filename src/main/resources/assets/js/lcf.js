// on document load
$(function() {

  $("img.profile-hover").hover(function() {
    toggleImage($(this));
  });

});

function isHoverImage(element) {
  return element.data("is-hover");
}

// Simple function that assumes the image src has naming convention "_hover"
// with no other underscores in it.
function toggleImage(element) {
  var hoverAttr = "hover-src";
  var cacheAttr = "org-src"
  var isHoverAttr = "is-hover";
  var src = element.attr('src');
  if(isHoverImage(element)) {
    element.data(isHoverAttr, false);
    element.attr('src', element.data(cacheAttr));
  } else {
    var hoverUrl = element.data(hoverAttr);
    element.data(cacheAttr, src);
    element.data(isHoverAttr, true);
    element.attr('src', hoverUrl);
  }
}
