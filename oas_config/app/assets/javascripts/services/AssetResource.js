'use strict';

angular.module('oasConfig').factory('AssetFactory', ['$log', '$resource',
function($log, $resource) {
    return $resource('/api/assets/:id', {}, {
      update: {method: 'PUT'}
    });
}]);
