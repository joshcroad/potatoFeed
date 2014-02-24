/**
 * Factory to handle photo services.
 * License: MIT
 */

angular.module('app')
.factory('PhotoService', [function () {

  // Function to retrieve the photo feed.
  var getPhotos = function () {};

  return {
    'getPhotos': getPhotos
  }

}]);