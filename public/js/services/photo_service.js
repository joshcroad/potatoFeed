/**
 * Factory to handle photo services.
 * License: MIT
 */

angular.module('app')
.factory('PhotoService', ['$q', function ($q) {

  var getPhotos = function () {
    var deferred = $q.defer();

    var url = 'https://api.flickr.com/services/feeds/photos_public.gne';
    var params = '?tags=potato&format=json&jsoncallback=?';

    $.getJSON(url + params, function(data) {
      if (data) deferred.resolve(data);
      else deferred.reject();
    });

    return deferred.promise;
  }

  return {
    'getPhotos': getPhotos
  }
}]);