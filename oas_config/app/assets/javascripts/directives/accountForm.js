'use strict';

angular.module('oasConfig')
  .directive('accountForm', ['$location', function($location) {
    return {
      restrict: 'E',
      templateUrl: 'assets/templates/directives/account-form.html',
      replace: true,
      scope: {
        account: '='
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
            saveAccount: function () {
              scope.$emit('save-account');
            },
            isSet: function(item){
              return typeof item !== 'undefined' && item !== null;
            }
          }
        };


        link.init();

      }
    };
  }
]);
