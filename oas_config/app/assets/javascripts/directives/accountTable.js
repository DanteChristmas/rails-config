'use strict';

angular.module('oasConfig')
  .directive('accountTable', ['$location', function($location) {
    return {
      restrict: 'E',
      templateUrl: 'assets/templates/directives/account-table.html',
      replace: true,
      scope: {
        accounts: '='
      },
      link: function(scope, element) {

        var _helper ={
        };


        var link = {
          init: function(){
            link.setScope();
          },

          setScope: function(){
            for(var property in link.scope){
              scope[property] = link.scope[property];
            }
          },

          scope: {
            deleteAccount: function (account) {
              scope.$emit('delete-account', account);
            }
          }
        };


        link.init();

      }
    };
  }
]);
