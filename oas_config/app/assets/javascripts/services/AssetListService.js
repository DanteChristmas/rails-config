'use strict';

angular.module('oasConfig').factory('AssetListFactory', ['$log', '$resource',
function($log, $resource) {
    return $resource('/api/asset_lists/:id', {}, {
      update: {method: 'PUT'}
    });
}]);
