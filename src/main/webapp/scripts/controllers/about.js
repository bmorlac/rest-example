'use strict';

/**
 * @ngdoc function
 * @name restExampleApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the restExampleApp
 */
angular.module('restExampleApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
