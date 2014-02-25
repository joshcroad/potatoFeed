/**
 * Controller to handle the homepage.
 * License: MIT
 */

angular.module('app')
.controller('homeController', ['$scope', 'PhotoService', function ($scope, PhotoService) {

  PhotoService.getPhotos()
  .then(function (data) {
    if (data)
      $scope.photos = data.items;
  });

}]);