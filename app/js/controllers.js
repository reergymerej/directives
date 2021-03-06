'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  
  .controller('SimpleCtrl', ['$scope', function ($scope) {

  }])

  .controller('CompiledCtrl', ['$scope', function ($scope) {
    $scope.foo = 'I am defined in the controller\'s scope.';

    $scope.bar = function () {
    	$scope.barTest = '$scope.bar in the controller set $scope.barTest to this string.';
    };

    $scope.barTest = '';

    $scope.a = 'AAA';
    $scope.b = 'BBB';
    $scope.c = 'CCC';
  }])

  .controller('IsolatedCtrl', ['$scope', function ($scope) {
    $scope.a = 'aaa';
    $scope.b = 'bbb';
    $scope.c = 'ccc';
  }])

  .controller('IsolatedAttrCtrl', ['$scope', function ($scope) {
    $scope.a = 'aaa';
    $scope.b = 'bbb';
  }])

  .controller('TranscludeCtrl', ['$scope', function ($scope) {
    $scope.foo = 'Foo in TranscludeCtrl';
    $scope.donkey = 'Donkey in TranscludeCtrl';
  }])

  .controller('FormsCtrl', ['$scope', function ($scope) {
    $scope.foo = 'hello';
    $scope.master = {};
  }]);