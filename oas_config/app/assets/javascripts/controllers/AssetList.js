'use strict';

angular.module('oasConfig')
.controller('AssetListCtrl', ['$scope', '$route', 'AssetListFactory',
function ($scope, $route, AssetListFactory) {
  var controller = {
    init: function () {
      controller.bindEvents();
      controller.getAssetLists();
    },
    getAssetLists: function () {
      $scope.assetLists = AssetListFactory.query();
    },
    bindEvents: function () {
      $scope.$on('delete-assetList', function (e, assetList) {
        AssetListFactory.delete({id: assetList.id});
        controller.getAssetLists();
      });
    }
  };
  controller.init();
}]);
