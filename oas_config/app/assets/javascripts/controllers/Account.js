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
      controller.getAccounts();
    },
    
    getAccounts: function () {
      $scope.accounts = AccountFactory.query();
    }
  };


  controller.init();

}
]);
