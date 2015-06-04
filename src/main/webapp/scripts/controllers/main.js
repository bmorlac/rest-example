'use strict';

/**
 * @ngdoc function
 * @name restExampleApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the restExampleApp
 */
angular.module('restExampleApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
