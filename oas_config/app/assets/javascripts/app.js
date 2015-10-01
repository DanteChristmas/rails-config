'use strict';

angular.module('oasConfig', ['ngRoute',])
.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '/templates/pages/dashboard/index.html'
    })
    .when('/accounts', {
      templateUrl: '/templates/pages/accountes/index.html',
      controller: 'AccountsController'
    })
    .when('/accounts/new', {
      templateUrl: '/templates/pages/accounts/create.html',
      controller: 'AccountsController'
    })
    .when('/accounts/:id', {
      templateUrl: '/templates/pages/accounts/edit.html',
      controller: 'AccountsController'
    })
    .when('/assets', {
      templateUrl: '/templates/pages/assets/index.html',
      controller: 'AssetsController'
    })
    .when('/asssets/new', {
      templateUrl: '/templates/pages/assets/create.html',
      controller: 'AssetsController'
    })
    .when('/assets/:id', {
      templateUrl: '/templates/pages/assets/edit.html',
      controller: 'AssetsController'
    })
    .otherwise({
      templateUrl: '/assets/templates/404.html'
    })
}]);
