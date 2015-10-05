'use strict';

angular.module('oasConfig')
.controller('CreateAssetListCtrl', ['$scope', '$route', 'AssetListFactory', '$location',
function ($scope, $route, AssetListFactory, $location) {
  var controller = {
    init: function () {
      $scope.newAssetList = {
        version: null,
        url: null,
        asset_type: null
      }
      controller.bindEvents();
    },
    bindEvents: function () {
      $scope.$on('save-assetList', function (e) {
        controller.createAssetList();
      });
    },
    createAssetList: function () {
      var postAssetList = new AssetListFactory({asset_list: $scope.newAssetList});
      postAssetList.$save(function () {
        $location.path('/asset-lists/' + postAssetList.id);
      });
    }
  };
  controller.init();
}]);
