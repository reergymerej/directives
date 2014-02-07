'use strict';

/* Directives */


angular.module('myApp.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }])

  .directive('exSimple', [function () {
    return {
      restrict: 'E',
      template: 'This content is specified in the directive\'s "template".'
    };
  }])

  .directive('exSimpleTemplateUrl', [function () {
    return {
      restrict: 'E',
      templateUrl: 'templates/ex-simple-template-url.html'
    }
  }]);
