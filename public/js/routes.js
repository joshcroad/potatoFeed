/**
 * Routes config to handle single page application routing.
 * License: MIT
 */

angular.module('app')
.config(['$routeProvider', function ($routeProvider) {

  // Single photo route.
  $routeProvider.when('/potato/:id', {
    templateUrl: 'partials/single.html',
    controller: 'singleController'
  });

  // Homepage route.
  $routeProvider.when('/potatos', {
    templateUrl: 'partials/home.html',
    controller: 'homeController'
  });

  // Otherwise route.
  $routeProvider.otherwise({
    redirectTo: '/potatos'
  });

}]);
