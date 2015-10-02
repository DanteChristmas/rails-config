'use strict';

angular.module('oasConfig')
.controller('EditAccountCtrl', ['$scope', '$route', 'AccountFactory', '$location',
function ($scope, $route, AccountFactory, $location) {
  var _helper = {
    isSet: function(property){
      return typeof property !== 'undefined' && property !== null;
    }
  };

  var controller = {
    init: function(){
      controller.bindEvents();
      controller.getAccount();
    },

    getAccount: function () {
      $scope.stuff = AccountFactory.get($route.current.params);
      $scope.account = $scope.stuff.config;
    },
    bindEvents: function () {
      $scope.$on('save-account', function (e, updateAccount) {
        $scope.account = AccountFactory.update({id: $scope.account.id}, updateAccount);
      });
    }
  };


  controller.init();

}]);
