'use strict';

angular.module('oasConfig')
.controller('AssetCtrl', ['$route',
function ($scope, $route) {
  var _helper = {
    isSet: function(property){
      return typeof property !== 'undefined' && property !== null;
    }
  };

  var controller = {
    init: function(){

    }
  };


  controller.init();

}
]);
