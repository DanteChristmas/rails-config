'use strict';

angular.module('oasConfig')
.controller('AccountCtrl', ['$scope', '$route', 'AccountFactory',
function ($scope, $route, AccountFactory) {
  var _helper = {
    isSet: function(property){
      return typeof property !== 'undefined' && property !== null;
    }
  };

  var controller = {
    init: function(){
      controller.bindEvents();
      controller.getAccounts();
    },

    getAccounts: function () {
      $scope.accounts = AccountFactory.query();
    },

    bindEvents: function () {
      $scope.$on('delete-account', function (e, account) {
        AccountFactory.delete({id: account.id});
        controller.getAccounts();
      });
    }
  };


  controller.init();

}
]);
