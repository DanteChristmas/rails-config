'use strict';

angular.module('oasConfig')
.controller('EditAccountCtrl', ['$scope', '$route', '$log', 'AccountFactory', 'AssetListFactory', 'ValidateUtilService', '$location',
function ($scope, $route, $log, AccountFactory, AssetListFactory, ValidateUtilService, $location) {
  var _helper = {
    isSet: function(property){
      return typeof property !== 'undefined' && property !== null;
    }
  };

  var controller = {
    init: function(){
      controller.setDefaults();
      controller.bindEvents();
      controller.getAccount();
      controller.getAssetLists();
      controller.materializeInit();
    },

    setDefaults: function () {
      $scope.modalAssets = [];
      $scope.assetModalLoading = false;
    },

    getAccount: function () {
      AccountFactory.get({id: $route.current.params.id, include_assets: true}, function (data) {
        $scope.account = data.account;
        $scope.accountAssetLists = ValidateUtilService.isSet(data.asset_lists) ? data.asset_lists : [];
      });
    },
    getAssetLists: function () {
      $scope.assetLists = AssetListFactory.query();
    },
    bindEvents: function () {
      $scope.$on('save-account', function (e) {
        AccountFactory.update({ id: $scope.account.id}, {account: $scope.account});
      });
      $scope.$on('add-account-asset', function (e, list) {
        $scope.accountAssetLists.push(list);
      });
      $scope.$on('remove-account-asset', function (e, list) {
        var index = $scope.accountAssetLists.indexOf(list)
        $scope.accountAssetLists.splice(index, 1);
      });
      $scope.$on('update-account-assets', function (e) {
        var updateLists = $scope.accountAssetLists.map(function (a) {return a.id});
        var updateAccount = {account: $scope.account};
        updateAccount.account.asset_lists = updateLists;
        AccountFactory.update({id: $scope.account.id}, updateAccount);
      });
      $scope.$on('request-asset-modal', function (e, list) {
        $scope.assetModalLoading = true;
        $scope.$broadcast('open-asset-modal');
        AccountListFactory.get({id: list.id, include_assets: true}, function (data) {
          $scope.modalAssets = data.assets;
          $scope.assetModalLoading = false;
        });
      });
    },
    materializeInit: function () {
      angular.element('.collapsible').collapsible({accordion: true});
    }
  };


  controller.init();

}]);
