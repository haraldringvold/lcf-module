// on document load
$(function() {

  $("img.profile-hover").hover(function() {
    toggleImage($(this));
  });

});

function isHoverImage(src) {
  return src.indexOf('_hover') > 0;
}

// Simple function that assumes the image src has naming convention "_hover"
// with no other underscores in it.
function toggleImage(element) {
  var src = element.attr('src');
  if(isHoverImage(src)) {
    var splits = src.split('.');
    var path = splits[0];
    var suffix = "."+splits[1];
    var pathparts = splits[0].split("_");
    element.attr('src', pathparts[0]+suffix);
  } else {
    element.attr('src', element.data("hover-src"));
  }
}
