'use strict';

angular.module('oasConfig')
.controller('AmpConfigCtrl', ['$scope', '$route', 'AmpConfigFactory',
function ($scope, $route, AmpConfigFactory) {
  var _helper = {
    isSet: function(property){
      return typeof property !== 'undefined' && property !== null;
    }
  };

  var controller = {
    init: function(){
      controller.bindEvents();
      controller.getAmpConfig();
    },
    getAmpConfig: function () {
      $scope.ampConfigs = AmpConfigFactory.query();
    },
    bindEvents: function () {
      $scope.$on('delete-amp-config', function (e, config) {
        AmpConfigFactory.delete({id: config.id});
        controller.getAmpConfig();
      });
    }
  };


  controller.init();

}
]);
