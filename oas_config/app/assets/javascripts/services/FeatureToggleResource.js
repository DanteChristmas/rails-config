'use strict';

angular.module('oasConfig').factory('FeatureToggleFactory', ['$log', '$resource',
function($log, $resource) {
    return $resource('/api/feature_toggles/:id', {}, {
      update: {method: 'PUT'}
    });
}]);
