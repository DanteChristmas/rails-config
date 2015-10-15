'use strict';

angular.module('oasConfig', ['ngRoute', 'ngResource'])
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
      controller: 'CreateAccountCtrl'
    })
    .when('/accounts/:id', {
      templateUrl: 'assets/templates/pages/accounts/edit.html',
      controller: 'EditAccountCtrl'
    })
    .when('/assets', {
      templateUrl: 'assets/templates/pages/assets/index.html',
      controller: 'AssetCtrl'
    })
    .when('/assets/new', {
      templateUrl: 'assets/templates/pages/assets/create.html',
      controller: 'CreateAssetCtrl'
    })
    .when('/assets/:id', {
      templateUrl: 'assets/templates/pages/assets/edit.html',
      controller: 'EditAssetCtrl'
    })
    .when('/amp-configs', {
      templateUrl: 'assets/templates/pages/amp-configs/index.html',
      controller: 'AmpConfigCtrl'
    })
    .when('/amp-configs/new', {
      templateUrl: 'assets/templates/pages/amp-configs/create.html',
      controller: 'CreateAmpConfigCtrl'
    })
    .when('/amp-configs/:id', {
      templateUrl: 'assets/templates/pages/amp-configs/edit.html',
      controller: 'EditAmpConfigCtrl'
    })
    .otherwise({
      templateUrl: '/assets/templates/404.html'
    })
}]);
