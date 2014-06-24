'use strict';
'use strict';
'use strict';

/**
 * @ngdoc function
 * @name testingTutsplusApp.controller:AboutCtrld
 * @description
 * # AboutCtrl
 * Controller of the testingTutsplusApp
 */
angular.module('testingTutsplusApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
