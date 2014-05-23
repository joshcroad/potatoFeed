/**
 * Factory to handle photo services.
 * License: MIT
 */

angular.module('app')

.factory('PhotoService', ['$q', '$http', function ($q, $http) {
  
  // May as well store the ajax response, rather than using bandwidth
  // to make multiple calls for the same information.
  var photoData = null;
  
  return {
    
    getPhotos: function () {
      var deferred = $q.defer();
      
      // If an ajax call has already been made, no need to make it again.
      if (photoData) {
        deferred.resolve(photoData);
      } else {
        // The user has no photoData, an ajax call is required.
        var url = 'https://api.flickr.com/services/feeds/photos_public.gne';
        var params = '?tags=potato&format=json&jsoncallback=JSON_CALLBACK';

        $http.jsonp(url + params)
        .success(function (res) {
          // Set the photoData for later.
          photoData = res;
          deferred.resolve(res);
        })
        .error(function (err) {
          photoData = null;
          deferred.reject(err);
        });
      }

      return deferred.promise;
    }
    
  }
  
}]);
