'use strict';

angular.module('oasConfig')
  .directive('assetTable', ['$location', function($location) {
    return {
      restrict: 'E',
      templateUrl: 'assets/templates/directives/asset-table.html',
      replace: true,
      scope: {
        assets: '='
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
            deleteAsset: function (account) {
              scope.$emit('delete-asset', account);
            }
          }
        };


        link.init();

      }
    };
  }
]);
