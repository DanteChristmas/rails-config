'use strict';

angular.module('oasConfig')
  .directive('accountTable', ['$location', 'ValidateUtilService', 'DateUtilService', function($location, ValidateUtilService, DateUtilService) {
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
            link.setDefaults();
          },

          setScope: function(){
            for(var property in link.scope){
              scope[property] = link.scope[property];
            }
          },

          setDefaults: function () {
            scope.no
          },

          scope: {
            deleteAccount: function (account) {
              scope.$emit('delete-account', account);
            },
            getDate: function (date) {
              return DateUtilService.serverDateToFullDate(date);
            }
          }
        };


        link.init();

      }
    };
  }
]);
