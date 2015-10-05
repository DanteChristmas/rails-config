'use strict';

angular.module('oasConfig')
.controller('EditAssetListCtrl', ['$scope', '$route', 'AssetListFactory', '$location',
function ($scope, $route, AssetListFactory, $location) {
  var controller = {
    init: function () {
      controller.bindEvents();
      controller.getAssetList();
    },
    getAssetList: function () {
      $scope.assetList = AssetListFactory.get($route.current.params);
    },
    bindEvents: function () {
      $scope.$on('save-assetList', function (e) {
        AssetListFactory.update({id: $scope.assetList.id}, {asset_list: $scope.assetList});
      });
    }
  };
  controller.init();
}]);
