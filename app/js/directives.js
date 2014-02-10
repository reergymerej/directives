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

  .directive('exSimpleAE', [function () {
    return {
      restrict: 'AE',
      template: 'works in elements (e) or attributes (a)'
    };
  }])

  .directive('exSimpleTemplateUrl', [function () {
    return {
      restrict: 'E',
      templateUrl: 'templates/ex-simple-template-url.html'
    };
  }])

  .directive('exCompiled', [function () {
    return {
      restrict: 'E',
      templateUrl: 'templates/ex-compiled.html'
    };
  }])

  .directive('exCompiledFn', [function () {
    return {
      restrict: 'E',
      templateUrl: 'templates/ex-compiled-fn.html'
    };
  }])

  .directive('exCompiledFnScope', [function () {
    return {
      restrict: 'E',
      templateUrl: 'templates/ex-compiled-fn-scope.html',
      scope: {
        a: '=',
        b: '=c',
        x: '=c'
      }
    };
  }])

  .directive('exIsolated', [function () {
    return {
      restrict: 'E',
      templateUrl: 'templates/ex-isolated.html',
      scope: {
        a: '=',
        foo: '=x'
      }
    };
  }])

  .directive('exAttributeDirective', [function () {
    return {
      restrict: 'A',
      templateUrl: 'templates/ex-attribute-directive.html',
      scope: {
        foo: '=foo'
      }
    };
  }])

  .directive('donkey', [function () {
    return {
      restrict: 'E',
      templateUrl: 'templates/ex-transclude.html',
      transclude: true,
      scope: {
        x: '='
      }
    };
  }]);
