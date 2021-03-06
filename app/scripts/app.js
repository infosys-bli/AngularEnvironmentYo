'use strict';

/**
 * @ngdoc overview
 * @name yoWorkspaceApp
 * @description
 * # yoWorkspaceApp
 *
 * Main module of the application.
 */
/**
 * @ngdoc overview
 * @name yoWorkspaceApp
 * @description
 * # yoWorkspaceApp
 *
 * Main module of the application.
 */
angular
  .module('yoWorkspaceApp', [
    'ngResource',
    'ngRoute',
    'ngSanitize'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
