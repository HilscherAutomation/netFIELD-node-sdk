/**********************************************************************
 * Copyright (c) 2021 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../../client');
var validate = require('../../../utils/validate');

/**
 * Get device rollback items by rolloutId and deviceIdd
 * @param {string} rolloutId
 * @param {string} deviceId
 * @param {function} callback optional
 */
module.exports = function (rolloutId, deviceId, callback) {
  try {
    validate.validateString(rolloutId);
    validate.validateString(deviceId);
    var path = '/deployments/rollouts/' + rolloutId + '/rollbacks/' + deviceId;
    return client.get('auth', path, callback);
  } catch (e) {
    if (callback) {
      return callback(e, null);
    }
    return Promise.reject(e);
  }
}
