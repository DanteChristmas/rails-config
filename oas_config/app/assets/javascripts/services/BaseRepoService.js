'use strict';

angular.module('oasConfig').service('BaseRepoService', ['ValidateUtilService', '$http', '$q', '$log', function(ValidateUtilService, $http, $q, $log) {

  var service = {
    get: function(url) {
      if(ValidateUtilService.isSet(url)){
        var deferred = $q.defer();

        $http.get(url).success(function(data) {
          deferred.resolve(data);
        }).error(function(error) {
          deferred.reject(error);
        });

        return deferred.promise;
      }
    },

    post: function(url, payload) {
      if(ValidateUtilService.isSet(url)){
        var deferred = $q.defer();

        $http.post(url, payload)
        .success(function(response) {
          deferred.resolve(response);
        })
        .error(function(error) {
          deferred.reject(error);
        });

        return deferred.promise;
      }
    },

    put: function(url, payload) {
      if(ValidateUtilService.isSet(url)){
        var deferred = $q.defer();

        $http.put(url, payload)
        .success(function(response) {
          deferred.resolve(response);
        })
        .error(function(error) {
          deferred.reject(error);
        });

        return deferred.promise;
      }
    },

    delete: function(url) {
      if(ValidateUtilService.isSet(url)){
        var deferred = $q.defer();

        $http.delete(url)
        .success(function(response) {
          deferred.resolve(response);
        })
        .error(function(error) {
          deferred.reject(error);
        });

        return deferred.promise;
      }
    }
  };


  return service;

}]);
