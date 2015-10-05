'use strict';

angular.module('oasConfig')
.controller('AssetCtrl', ['$scope', '$route', 'AssetFactory',
function ($scope, $route, AssetFactory) {
  var _helper = {
    isSet: function(property){
      return typeof property !== 'undefined' && property !== null;
    }
  };

  var controller = {
    init: function(){
      controller.bindEvents();
      controller.getAssets();
    },
    getAssets: function () {
      $scope.assets = AssetFactory.query();
    },
    bindEvents: function () {
      $scope.$on('delete-asset', function (e, asset) {
        AssetFactory.delete({id: asset.id});
        controller.getAssets();
      });
    }
  };


  controller.init();

}
]);
