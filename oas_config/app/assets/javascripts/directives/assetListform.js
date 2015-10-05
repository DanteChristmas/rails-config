'use strict';

angular.module('oasConfig')
.directive('assetListForm', ['$location', function ($location) {
  return {
    restrict: 'E',
    templateUrl: 'assets/templates/directives/asset-list-form.html',
    replace: true,
    scope: {
      assetList: '='
    },
    link: function (scope, element) {
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
          saveAssetList: function () {
            scope.$emit('save-assetList');
          },
          isSet: function (item) {
            return typeof item !== 'undefined' && item !== null;
          }
        }
      };

      link.init();
    }
  };
}]);
