'use strict';

angular.module('oasConfig')
  .directive('globalNav', ['$location', function($location) {
    return {
      restrict: 'E',
      templateUrl: 'assets/templates/directives/global-nav.html',
      replace: true,
      scope: {
        // products: '='
      },
      link: function(scope, element) {

        var _helper ={
        };


        var link = {
          init: function(){
            link.setScope();
            element.find('.button-collapse').sideNav();
          },

          setScope: function(){
            for(var property in link.scope){
              scope[property] = link.scope[property];
            }
          },

          scope: {

          }
        };


        link.init();

      }
    };
  }
]);
