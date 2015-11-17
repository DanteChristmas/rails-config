'use strict';

angular.module('oasConfig')
.controller('EditAccountCtrl', ['$scope', '$route', '$log', 'AccountFactory', 'AssetFactory', 'AmpConfigFactory', 'FeatureToggleFactory', 'ValidateUtilService', 'HammerService', '$location',
function ($scope, $route, $log, AccountFactory, AssetFactory, AmpConfigFactory, FeatureToggleFactory, ValidateUtilService, HammerService, $location) {
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
      controller.materializeInit();
    },

    setDefaults: function () {
      $scope.modalAssets = [];
      $scope.assetModalLoading = false;
    },

    getAccount: function () {
      AccountFactory.get({id: $route.current.params.id, include_assets: true, include_feature_toggles: true}, function (data) {
        $scope.account = data.account;
        $scope.accountAssets = ValidateUtilService.isSet(data.assts) ? data.assets : [];
        $scope.featureToggles = ValidateUtilService.isSet(data.featureToggles) ? data.featureToggles : {}
      });

      $scope.assets = AssetFactory.query();
      $scope.ampConfigs = AmpConfigFactory.query();
    },
    getAssets: function () {
      $scope.assets = AssetFactory.query();
    },
    bindEvents: function () {
      $scope.$on('save-account', function (e) {
        AccountFactory.update({ id: $scope.account.id}, {account: $scope.account});
      });
      $scope.$on('add-account-asset', function (e, account) {
        $scope.accountAssets.push(account);
      });
      $scope.$on('remove-account-asset', function (e, account) {
        var index = $scope.accountAssets.indexOf(account)
        $scope.accountAssets.splice(index, 1);
      });
      $scope.$on('update-account-assets', function (e) {
        var updateAssets = $scope.accountAssets.map(function (a) {return a.id});
        var updateAccount = {account: $scope.account};
        updateAccount.account.assets = updateAssets;
        AccountFactory.update({id: $scope.account.id}, updateAccount);
      });
      $scope.$on('update-account-toggles', function (e) {
        var updateToggles = $scope.featureToggles;
        FeatureToggleFactory.update({id: updateToggles.id}, updateToggles);
      });
      $scope.$on('publish-item', function (e) {
        $log.info('publish-catch');
        HammerService.get({model: 'Account', id: $scope.account.id});
      });
    },
    materializeInit: function () {
      angular.element('.collapsible').collapsible({accordion: true});
    }
  };


  controller.init();

}]);
