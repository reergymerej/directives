'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  
  .controller('SimpleCtrl', ['$scope', function ($scope) {

  }])

  .controller('CompiledCtrl', ['$scope', function ($scope) {
    $scope.foo = 'I am defined in the controller\'s scope.';
  }]);