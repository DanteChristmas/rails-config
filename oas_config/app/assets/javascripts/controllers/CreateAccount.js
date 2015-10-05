'use strict';

angular.module('oasConfig')
.controller('CreateAccountCtrl', ['$scope', '$route', 'AccountFactory', '$location',
function ($scope, $route, AccountFactory, $location) {
  var _helper = {
    isSet: function(property){
      return typeof property !== 'undefined' && property !== null;
    }
  };

  var controller = {
    init: function(){
      $scope.newAccount = {
        org_code: null,
        api_key: null,
        google_analytics_key: null,
        google_search_key: null,
        dfp_path_prefix: null,
        ooyala_ad_set_codes: null,
        ooyala_video_player_id: null,
        ooyala_audio_player_id: null,
        platform_name: null,
        copyright: null,
        publication_name: null,
        amp_endpoint_url: null
      }
      controller.bindEvents();
    },
    bindEvents: function () {
      $scope.$on('save-account', function (e) {
        controller.createAccount();
      });
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
