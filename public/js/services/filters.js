/**
 * Filter module to handle all custom filters.
 * License: MIT
 */

angular.module('app')

// Retrieve the author from a string.
.filter('getAuthor', function () {
  // The regex pattern to match.
  var pattern = /\(([A-Za-z1-9\_\-]*)\)/gi

  return function (string) {
    var a = string.exec(pattern);
    return a;
  }
});