'use strict';

angular.module('oasConfig')
.controller('EditAmpConfigCtrl', ['$scope', '$route', 'AmpConfigFactory', '$location',
function($scope, $route, AmpConfigFactory, $location) {
  var controller = {
    init: function () {
      controller.bindEvents();
      controller.getAmpConfig();
    },
    getAmpConfig: function () {
      $scope.ampConfig = AmpConfigFactory.get($route.current.params);
    },
    bindEvents: function () {
      $scope.$on('save-amp-config', function (e) {
        AmpConfigFactory.update({id: $scope.ampConfig.id}, {amp_config: $scope.ampConfig});
      });
    }
  };

  controller.init();
}]);
