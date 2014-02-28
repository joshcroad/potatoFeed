/**
 * Factory to handle photo services.
 * License: MIT
 */

angular.module('app')
.factory('PhotoService', ['$q', '$http', function ($q, $http) {

  var getPhotos = function () {
    var deferred = $q.defer();

    var url = 'https://api.flickr.com/services/feeds/photos_public.gne';
    var params = '?tags=potato&format=json&jsoncallback=JSON_CALLBACK';

    $http.jsonp(url + params)
    .success(function (res) {
      deferred.resolve(res);
    })
    .error(function (err) {
      deferred.reject(err);
    });

    return deferred.promise;
  }

  return {
    'getPhotos': getPhotos
  }
}]);
