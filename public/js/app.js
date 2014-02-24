/**
 * Potato photo feed v0.0.0
 * License: MIT
 */

angular.module('app', ['ngRoute', 'ngSanitize'])
.run(['$rootScope', function ($rootScope) {

  // For debugging purposes, add a log function
  // at the top of the scope chain (rootScope).
  $rootScope.log = function (string) {
    console.log(string);
  }

}]);