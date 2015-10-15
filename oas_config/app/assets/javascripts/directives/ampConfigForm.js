'use strict';

angular.module('oasConfig')
.directive('ampConfigForm', ['$location', function ($location) {
  return {
    restrict: 'E',
    templateUrl: 'assets/templates/directives/amp-config-form.html',
    replace: true,
    scope: {
      ampConfig: '='
    },
    link: function (scope, element) {
      var link = {
        init: function () {
          link.setScope();
          link.materializeInit();
        },
        setScope: function() {
          for(var property in link.scope) {
            scope[property] = link.scope[property];
          }
        },
        materializeInit: function () {
          element.find('select').material_select();
        },
        scope: {
          saveAmpConfig: function () {
            scope.$emit('save-amp-config');
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
