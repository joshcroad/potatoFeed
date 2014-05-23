/**
 * Filter module to handle all custom filters.
 * License: MIT
 */

angular.module('app')

// Retrieve the author from a string.
.filter('getAuthor', function () {
  // The regex pattern.
  var re = /\((.*?)\)/;

  return function (str) {
    var a = re.exec(str);
    return a[1];
  }
})

.filter('getPhotoID', function () {
  
  return function (urlWithID) {
    // Split the url with id by /.
    var a = urlWithID.split('/');
    // Return the second to last element (the id).
    return a[a.length - 2];
  }
})

.filter('truncateTitle', function () {
  var documentWidth = document.body.clientWidth;
  var detailWidth = documentWidth - 300;
  var trunc = Math.floor(detailWidth / 18);
  
  return function (string) {
    return string.truncate(trunc);
  }
  
});
