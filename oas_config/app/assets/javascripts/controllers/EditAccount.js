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
      $scope.account = AccountFactory.get($route.current.params);
    },
    bindEvents: function () {
      $scope.$on('save-account', function (e) {
        AccountFactory.update({ id: $scope.account.id}, {account: $scope.account});
      });
    }
  };


  controller.init();

}]);
