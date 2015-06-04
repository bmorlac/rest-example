'use strict';

/**
 * @ngdoc directive
 * @name restExampleApp.directive:myDirective2
 * @description
 * # myDirective2
 */
angular.module('restExampleApp')
  .directive('myDirective2', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the myDirective2 directive');
      }
    };
  });
