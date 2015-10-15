'use strict';

angular.module('oasConfig').factory('AmpConfigFactory', ['$log', '$resource',
function($log, $resource) {
    return $resource('/api/amp_configs/:id', {}, {
      update: {method: 'PUT'}
    });
}]);
