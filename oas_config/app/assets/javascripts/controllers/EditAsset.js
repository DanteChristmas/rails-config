'use strict';

angular.module('oasConfig')
.controller('EditAssetCtrl', ['$scope', '$route', 'AssetFactory', '$location',
function($scope, $route, AssetFactory, $location) {
  var controller = {
    init: function () {
      controller.bindEvents();
      controller.getAsset();
    },
    getAsset: function () {
      $scope.asset = AssetFactory.get($route.current.params);
    },
    bindEvents: function () {
      $scope.$on('save-asset', function (e) {
        AssetFactory.update({id: $scope.asset.id}, {asset: $scope.asset});
      });
    }
  }

  controller.init();
}]);
