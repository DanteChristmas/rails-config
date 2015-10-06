'use strict';

angular.module('oasConfig').service('ValidateUtilService', ['$log', function($log) {

  var service = {
    //base validation
    isNotUndefined: function(item){
      return typeof item !== 'undefined';
    },

    isNotNull: function(item){
      return item !== null;
    },

    isNotEmptyString: function(item){
      return item !== '';
    },

    isSet: function(item){
      return service.isNotUndefined(item) &&
              service.isNotNull(item) &&
              service.isNotEmptyString(item);
    },

    //array and object validation
    hasLength: function(item){
      return service.isSet(item) &&
              service.isSet(item.length);
    },

    hasProperty: function(item, property){
      return service.isSet(item) &&
              service.isSet(property) &&
              item.hasOwnProperty(property);
    },

    //type validation
    isString: function(item){
      return typeof item === 'string';
    },

    isNumber: function(item){
      return typeof item === 'number';
    },

    isBoolean: function(item){
      return typeof item === 'boolean';
    },

    isObject: function(item){
      return service.isNotNull(item) &&
              typeof item === 'object';
    }
  };


  return service;

}]);
