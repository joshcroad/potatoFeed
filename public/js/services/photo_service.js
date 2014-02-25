/**
 * Factory to handle photo services.
 * License: MIT
 */

angular.module('app')
.factory('PhotoService', ['$http', '$q', function ($http, $q) {

  var getPhotos = function (page) {
    var deferred = $q.defer();


    return deferred.promise;
  }

  return {
    'getPhotos': getPhotos
  }

}]);