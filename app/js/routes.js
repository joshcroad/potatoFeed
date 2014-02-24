/**
 * Routes config to handle single page application routing.
 * License: MIT
 */

angular.module('app')
.config(['$routeProvider', function ($routeProvider) {

  // Homepage route.
  $routeProvider.when('/potatos', {
    templateUrl: 'app/partials/home.html',
    controller: 'homeController'
  })

  // Single photo route.
  $routeProvider.when('/potato/:id', {
    templateUrl: 'app/partials/single.html',
    controller: 'singleController'
  })

  // Otherwise route.
  $routeProvider.otherwise({ redirectTo: '/potatos' });

}]);