'use strict';

angular.module('oasConfig')
.controller('CreateAmpConfigCtrl', ['$scope', '$route', 'AmpConfigFactory', '$location',
function ($scope, $route, AmpConfigFactory, $location) {
  var controller = {
    init: function () {
      $scope.newAmpConfig = {
        name: null,
        org_type: null,
        org_code: null,
        api_key: null,
        endpoint_url: null
      };
      controller.bindEvents();
    },
    bindEvents: function () {
      $scope.$on('save-amp-config', function (e) {
        controller.createAmpConfig();
      });
    },
    createAmpConfig: function () {
      var postAmpConfig = new AmpConfigFactory({amp_config: $scope.newAmpConfig});
      postAmpConfig.$save(function () {
        $location.path('/amp-configs/' + postAmpConfig.id);
      });
    }
  };
  controller.init();
}]);
