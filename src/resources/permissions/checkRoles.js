/**********************************************************************
 * Copyright (c) 2022 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../client');
var validate = require('../../utils/validate');

/**
 * Check what permissions a user is allowed to use with given roles
 * @param {{roles: Object, resources: Array<string>}} params
 * @param {function} callback optional
 */
module.exports = function (params, callback) {
  try {
     const {roles} = params;
     validate.validateObject(roles);
     for (let i = 0; i < roles.length; i += 1) {
        validate.validateObject(roles[i]);
      }
      validate.validateObject(params);
      var path = '/permissions/roles';
      return client.post('auth', path, params, callback);
    } catch (e) {
      if (callback) {
        return callback(e, null);
      }
      return Promise.reject(e);
  }
}