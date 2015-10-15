'use strict';

angular.module('oasConfig')
  .directive('ampConfigTable', ['$location', function($location) {
    return {
      restrict: 'E',
      templateUrl: 'assets/templates/directives/amp-config-table.html',
      replace: true,
      scope: {
        ampConfigs: '='
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
            deleteAmpConfig: function (account) {
              scope.$emit('delete-amp-config', account);
            }
          }
        };


        link.init();

      }
    };
  }
]);
