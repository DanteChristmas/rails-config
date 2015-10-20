'use strict';

angular.module('oasConfig')
  .directive('featureToggles', ['$location', function($location) {
    return {
      restrict: 'E',
      templateUrl: 'assets/templates/directives/feature-toggles.html',
      replace: true,
      scope: {
        toggles: '='
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
            saveToggles: function () {
              scope.$emit('update-account-toggles');
            }
          }
        };


        link.init();

      }
    };
  }
]);
