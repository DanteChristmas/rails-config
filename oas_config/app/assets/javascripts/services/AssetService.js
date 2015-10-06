'use strict';

angular.module('oasConfig').service('AssetRepoService', ['BaseRepoService', 'ValidateUtilService', '$log',
function(BaseRepoService, ValidateUtilService, $log) {

  var _config = {
    basePath: '/api/assets'
  };


  var service = {
    get: function(options){
      var url = _config.basePath;
      var options = options || {};

      // options.page = ValidateUtilService.isSet(options.page) ? options.page : 1;
      // options.limit = ValidateUtilService.isSet(options.limit) ? options.limit : 10;
      // options.sortDirection = ValidateUtilService.isSet(options.sortDirection) ? options.sortDirection : 'DESC';
      //
      // url += '?page=' + options.page;
      // url += '&limit=' + options.limit;
      // url += '&sort_direction=' + options.sortDirection;
      // url += '&sort=publishEnvelope.beginPublishDate';
      // url += ValidateUtilService.isSet(options.schoolCode) ? '&school_codes=' + options.schoolCode : '';
      // url += ValidateUtilService.isSet(options.sportCode) ? '&sport_codes=' + options.sportCode : '';
      // url += ValidateUtilService.isSet(options.tags) ? '&tags=' + options.tags : '';

      $log.info('MediaRepoService.get: Getting data - ' + url);

      return BaseRepoService.get(url);
    }
  };


  return service;

}]);
