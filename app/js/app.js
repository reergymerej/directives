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

  $routeProvider.when('/isolated', {
    templateUrl: 'partials/isolated.html',
    controller: 'IsolatedCtrl'
  });

  $routeProvider.when('/isolated-attr', {
    templateUrl: 'partials//isolated-attr.html',
    controller: 'IsolatedAttrCtrl'
  });

  $routeProvider.when('/transclude', {
    templateUrl: 'partials/transclude.html',
    controller: 'TranscludeCtrl'
  });

  $routeProvider.otherwise({redirectTo: '/'});
}]);
