'use strict';

angular.module('oasConfig')
  .directive('publishBar', ['$location', '$log', 'DateUtilService', 'ValidateUtilService', function($location, $log, DateUtilService, ValidateUtilService) {
    return {
      restrict: 'E',
      templateUrl: 'assets/templates/directives/publish-bar.html',
      replace: true,
      scope: {
        item: '='
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
            publishItem: function () {
              $log.info('publish-emit');
              scope.$emit('publish-item');
            },
            dateString: function (date) {
              if(ValidateUtilService.isSet(date)) {
                return DateUtilService.serverDateToFullDate(date);
              }
            }
          }
        };


        link.init();

      }
    };
  }
]);
