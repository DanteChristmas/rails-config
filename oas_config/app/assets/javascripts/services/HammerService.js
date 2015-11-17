'use strict';

angular.module('oasConfig').service('HammerService', ['BaseRepoService', 'ValidateUtilService', '$log', '$rootScope', function(BaseRepoService, ValidateUtilService, $log, $rootScope) {

  var _config = {
    basePath: '/api/hammer'
  };


  var service = {
    get: function(options){
      var options = options || {};
      var url = _config.basePath;

      url += ValidateUtilService.isSet(options.id) ? '/' + options.id : '';
      url += '?model=' + options.model;
      url += ValidateUtilService.isSet(options.account) ? '&account=' + options.limit : '';

      $log.info('HammerService.post Smashing data - ' + url);

      return BaseRepoService.get(url);
    },
  };


  return service;

}]);
