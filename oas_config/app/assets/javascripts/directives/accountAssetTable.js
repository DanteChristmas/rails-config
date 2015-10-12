'use strict';

angular.module('oasConfig')
  .directive('accountAssetTable', ['$location', '$log', 'ValidateUtilService',
  function ($location, $log, ValidateUtilService) {
    return {
      restrict: 'E',
      templateUrl: 'assets/templates/directives/account-asset-table.html',
      replace: true,
      scope: {
        assetLists: '=',
        hiddenLists: '=?',
        isAddTable: '='
      },
      link: function(scope, element) {
        var link = {
          init: function () {
            link.setScope();
          },
          setScope: function () {
            for(var property in link.scope){
              scope[property] = link.scope[property];
            }
          },
          scope: {
            saveAccountAssets: function () {
              scope.$emit('update-account-assets');
            },
            addList: function (list) {
              scope.$emit('add-account-asset', list);
            },
            removeList: function (list) {
              scope.$emit('remove-account-asset', list);
            },
            hideList: function (list) {
              if(ValidateUtilService.isSet(scope.hiddenLists)) {
                if(scope.hiddenLists.some(l => l.id == list.id)) {
                  return true;
                } else {
                  return false;
                }
              } else {
                return false;
              }
            },
            requestAssetModal: function (list) {
              $log.info('emmiting ')
              scope.$emit('request-asset-modal', list);
            }
          }
        }
        link.init();
      }
    };
  }]);
