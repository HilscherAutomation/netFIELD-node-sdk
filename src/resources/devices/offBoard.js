/**********************************************************************
 * Copyright (c) 2021 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../client');
var validate = require('../../utils/validate');

/**
 * OffBoard Device
 * @param {string} key jwtkey
 * @param {string} deviceId
 * @param {function} callback optional
 */
module.exports = function (deviceId, callback) {
  try {
    validate.validateString(deviceId);
    var path = '/devices/offboard';
    return client.put('auth', path, { deviceId }, callback);
  } catch (e) {
    if (callback) {
      return callback(e, null);
    }
    return Promise.reject(e);
  }
}