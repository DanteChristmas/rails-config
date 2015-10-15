'use strict';

angular.module('oasConfig')
.controller('CreateAccountCtrl', ['$scope', '$route', 'AccountFactory', 'AmpConfigFactory', '$location',
function ($scope, $route, AccountFactory, AmpConfigFactory, $location) {
  var _helper = {
    isSet: function(property){
      return typeof property !== 'undefined' && property !== null;
    }
  };

  var controller = {
    init: function(){
      $scope.newAccount = {
        org_code: null,
        amp_config_id: 1,
        google_analytics_key: null,
        google_search_key: null,
        dfp_path_prefix: null,
        ooyala_ad_set_codes: null,
        ooyala_video_player_id: null,
        ooyala_audio_player_id: null,
        platform_name: null,
        copyright: null,
        publication_name: null
      }
      controller.bindEvents();
      controller.getAmpConfigs();
    },
    bindEvents: function () {
      $scope.$on('save-account', function (e) {
        controller.createAccount();
      });
    },
    getAmpConfigs: function () {
      $scope.ampConfigs = AmpConfigFactory.query();
    },
    createAccount: function () {
      var postAccount = new AccountFactory({account: $scope.newAccount});
      postAccount.$save(function () {
        $location.path('/accounts/' + postAccount.id);
      });
    }
  }

  controller.init();

}
]);
