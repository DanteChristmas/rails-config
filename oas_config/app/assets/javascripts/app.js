'use strict';

angular.module('oasConfig', ['ngRoute',])
.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'assets/templates/pages/dashboard/index.html',
      controller: 'DashboardCtrl'
    })
    .when('/accounts', {
      templateUrl: 'assets/templates/pages/accounts/index.html',
      controller: 'AccountCtrl'
    })
    .when('/accounts/new', {
      templateUrl: 'assets/templates/pages/accounts/create.html',
      controller: 'AccountCtrl'
    })
    .when('/accounts/:id', {
      templateUrl: 'assets/templates/pages/accounts/edit.html',
      controller: 'AccountCtrl'
    })
    .when('/assets', {
      templateUrl: 'assets/templates/pages/assets/index.html',
      controller: 'AssetCtrl'
    })
    .when('/asssets/new', {
      templateUrl: 'assets/templates/pages/assets/create.html',
      controller: 'AssetCtrl'
    })
    .when('/assets/:id', {
      templateUrl: 'assets/templates/pages/assets/edit.html',
      controller: 'AssetCtrl'
    })
    .otherwise({
      templateUrl: '/assets/templates/404.html'
    })
}]);
