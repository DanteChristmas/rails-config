'use strict';

angular.module('oasConfig')
.controller('EditAssetListCtrl', ['$scope', '$route', 'AssetListFactory', 'AssetFactory', '$location', 'ValidateUtilService',
function ($scope, $route, AssetListFactory, AssetFactory, $location, ValidateUtilService) {
  var controller = {
    init: function () {
      controller.bindEvents();
      controller.getAssetList();
      controller.setListAssets();
      controller.materializeInit();
    },
    getAssetList: function () {
      AssetListFactory.get({id: $route.current.params.id, include_assets: true, include_accounts: true }, function (data) {
        $scope.assetList = data.asset_list;
        $scope.listAssets = ValidateUtilService.isSet(data.assets) ? data.assets : [];
        $scope.currentAccounts = ValidateUtilService.isSet(data.accounts) ? data.accounts : [];
      });
    },
    setListAssets: function () {
      $scope.assets = AssetFactory.query();
    },
    bindEvents: function () {
      $scope.$on('save-assetList', function (e) {
        AssetListFactory.update({id: $scope.assetList.id}, {asset_list: $scope.assetList});
      });
      $scope.$on('add-asset-item', function (e, asset) {
        $scope.listAssets.push(asset);
      });
      $scope.$on('remove-asset-item', function (e, asset) {
        var index = $scope.listAssets.indexOf(asset);
        $scope.listAssets.splice(index, 1);
      });
      $scope.$on('update-list-assets', function (e) {
        var updateAssets = $scope.listAssets.map(function (a) {return a.id;});
        var updateList = {asset_list: $scope.assetList};
        updateList.asset_list.assets = updateAssets;
        AssetListFactory.update({id: $scope.assetList.id}, updateList);
      });
    },
    materializeInit: function () {
      angular.element('.collapsible').collapsible({accordion: true});
    }
  };
  controller.init();
}]);
