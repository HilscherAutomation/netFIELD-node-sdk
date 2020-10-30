/**********************************************************************
 * Copyright (c) 2019 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../client');
var validate = require('../../utils/validate');

/**
 * Check what permissions a user is allowed to use with given roles
 * @param {Object} roles
 * @param {function} callback optional
 */
module.exports = function (roles, callback) {
  try {
     validate.validateObject(roles);
     for (let i = 0; i < roles.length; i += 1) {
        validate.validateObject(roles[i]);
      }
     const params = {
       roles: roles
     };

      var path = '/permissions/roles';
      return client.post('auth', path, params, callback);
    } catch (e) {
      if (callback) {
        return callback(e, null);
      }
      return Promise.reject(e);
  }
}