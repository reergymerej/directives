'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/simple', {
    templateUrl: 'partials/simple.html',
    controller: 'SimpleCtrl'
  });

  $routeProvider.when('/', {
    templateUrl: 'partials/index.html'
  });

  $routeProvider.when('/compiled', {
    templateUrl: 'partials/compiled.html',
    controller: 'CompiledCtrl'
  });

  $routeProvider.otherwise({redirectTo: '/'});
}]);
