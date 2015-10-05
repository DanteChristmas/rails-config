'use strict';

angular.module('oasConfig')
.controller('CreateAssetCtrl', ['$scope', '$route', 'AssetFactory', '$location',
function ($scope, $route, AssetFactory, $location) {
  var controller = {
    init: function () {
      $scope.newAsset = {
        component_name: null,
        version: null,
        url: null,
        asset_type: null
      };
      controller.bindEvents();
    },
    bindEvents: function () {
      $scope.$on('save-asset', function (e) {
        controller.createAsset();
      });
    },
    createAsset: function () {
      var postAsset = new AssetFactory({asset: $scope.newAsset});
      postAsset.$save(function () {
        $location.path('/assets/' + postAsset.id);
      });
    }
  };
  controller.init();
}]);
