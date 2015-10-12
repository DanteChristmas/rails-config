'use strict';

angular.module('oasConfig')
  .directive('assetModal', ['$location', function($location) {
    return {
      restrict: 'E',
      templateUrl: 'assets/templates/directives/asset-modal.html',
      replace: true,
      scope: {
        assets: '=',
        isLoading: '='
      },
      link: function(scope, element) {

        var _helper ={
        };


        var link = {
          init: function(){
            link.setScope();
            link.bindEvents();
          },

          setScope: function(){
            for(var property in link.scope){
              scope[property] = link.scope[property];
            }
          },

          bindEvents: function () {
            scope.$on('open-asset-modal', function (e) {
              element.openModal();
            });
          },

          scope: {

          }
        };


        link.init();

      }
    };
  }
]);
