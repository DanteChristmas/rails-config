angular.module('oasConfig').service('DateUtilService', ['ValidateUtilService', '$log', function(ValidateUtilService, $log) {

  var _config = {
    serverDateTimeFormat: 'YYYY-MM-DDTHH:mm:ss.SSSZZ',
    simpleDateEntryPattern: /^(0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])[\/\-]\d{4}$/
  };


  var service = {
    getIso8601Long: function(date) {
      if (ValidateUtilService.isSet(date)) {
        return moment(date).format(_config.serverDateTimeFormat);
      }
    },

    isValidDateEntry: function(string) {
      if (ValidateUtilService.isSet(string)) {
        return !!string.match(_config.simpleDateEntryPattern);
      }
    },

    getTimezoneAbbreviation: function(date) {
      if (!ValidateUtilService.isSet(date)) {
        date = new Date();
      }

      var timezoneDate = new timezoneJS.Date(date, jstz.determine().name());
      var currentTimezone = timezoneDate.getTimezoneAbbreviation();

      return currentTimezone;
    },

    getCurrentIANATimezone: function() {
      return jstz.determine().name();
    },

    serverDateToTwitter: function(date) {
      if (ValidateUtilService.isSet(date)) {
        if(typeof(date)==='number') {
          date = moment(new Date(date));
        }
        if(moment().diff(date, 'hours') < 24){
          return moment(date, _config.serverDateTimeFormat).fromNow();
        } else {
          return moment(date, _config.serverDateTimeFormat).format('MMM D, YYYY');
        }
      }
    },

    serverDateToFullDate: function (date) {
      return moment(date, _config.serverDateTimeFormat).format('lll');
    },

    momentToServerDate: function(date) {
      return moment(date).format(_config.serverDateTimeFormat);
    }
  };

  return service;

}]);
