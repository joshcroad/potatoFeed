var controllers = angular.module('controllers', [])

.controller('photoController', function ($scope) {
  // AJAX call to the Flickr API.
  $scope.items = photosetData.items;
});