'use strict';

/**
 * @ngdoc overview
 * @name testingTutsplusApp
 * @description
 * # testingTutsplusApp
 *
 * Main module of the application.
 */
angular
  .module('testingTutsplusApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html'
        
      })
      .when("/edges",{
        templateUrl:"views/edges.html",
        controller:"EdgesController"

      })



      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
