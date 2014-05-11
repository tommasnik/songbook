'use strict';

angular.module('yoFullZpevnikApp')
  .factory('Session', function ($resource) {
    return $resource('/api/session/');
  });
