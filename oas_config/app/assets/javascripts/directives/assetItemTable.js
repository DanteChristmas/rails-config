'use strict';

angular.module('oasConfig')
  .directive('assetItemTable', ['$location', 'ValidateUtilService', function($location, ValidateUtilService) {
    return {
      restrict: 'E',
      templateUrl: 'assets/templates/directives/asset-item-table.html',
      replace: true,
      scope: {
        assets: '=',
        hiddenAssets: '=?',
        isAddTable: '=' // bool
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
            saveListAssets: function () {
              scope.$emit('update-list-assets');
            },
            addAsset: function (asset) {
               scope.$emit('add-asset-item', asset);
            },
            removeAsset: function (asset) {
              scope.$emit('remove-asset-item', asset);
            },
            hideAsset: function (asset) {
              if(ValidateUtilService.isSet(scope.hiddenAssets)){
                if(scope.hiddenAssets.some(a => a.id == asset.id)){
                  return true;
                } else {
                  return false;
                }
              } else {
                return false;
              }
            }
          }
        };


        link.init();

      }
    };
  }
]);
