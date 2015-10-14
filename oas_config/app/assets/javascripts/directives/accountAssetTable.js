'use strict';

angular.module('oasConfig')
  .directive('accountAssetTable', ['$location', '$log', 'ValidateUtilService',
  function ($location, $log, ValidateUtilService) {
    return {
      restrict: 'E',
      templateUrl: 'assets/templates/directives/account-asset-table.html',
      replace: true,
      scope: {
        assets: '=',
        hiddenAssets: '=?',
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
            addAsset: function (asset) {
              scope.$emit('add-account-asset', asset);
            },
            removeAsset: function (asset) {
              scope.$emit('remove-account-asset', asset);
            },
            hideAsset: function (asset) {
              if(ValidateUtilService.isSet(scope.hiddenAssets)) {
                if(scope.hiddenAssets.some(a => a.id == asset.id)) {
                  return true;
                } else {
                  return false;
                }
              } else {
                return false;
              }
            }
          }
        }
        link.init();
      }
    };
  }]);
