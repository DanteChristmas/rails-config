'use strict';

angular.module('oasConfig').factory('AccountFactory', ['$log', '$resource',
function($log, $resource) {
    return $resource('/api/accounts/:id', {}, {
      update: {method: 'PUT'}
    });
}]);
