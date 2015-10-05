'use strict';

angular.module('oasConfig')
.directive('assetListTable', ['$location', function ($location) {
  return {
    restrict: 'E',
    templateUrl: 'assets/templates/directives/asset-list-table.html',
    replace: true,
    scope: {
      assetLists: '='
    },
    link: function(scope, element) {
      var link = {
        init: function () {
          link.setScope();
        },

        setScope: function () {
          for(var property in link.scope) {
            scope[property] = link.scope[property];
          }
        },

        scope: {
          deleteAssetList: function (assetList) {
            scope.$emit('delete-assetList', assetList);
          }
        }
      };
      link.init();
    }
  };
}])
