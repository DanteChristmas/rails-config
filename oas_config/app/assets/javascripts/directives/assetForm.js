'use strict';

angular.module('oasConfig')
.directive('assetForm', ['$location', function ($location) {
  return {
    restrict: 'E',
    templateUrl: 'assets/templates/directives/asset-form.html',
    replace: true,
    scope: {
      asset: '='
    },
    link: function (scope, element) {
      var link = {
        init: function () {
          link.setScope();
        },
        setScope: function() {
          for(var property in link.scope) {
            scope[property] = link.scope[property]
          }
        },
        scope: {
          saveAsset: function () {
            scope.$emit('save-asset');
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
