/**********************************************************************
 * Copyright (c) 2022 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var querystring = require('query-string');
var client = require('../../../client');
var validate = require('../../../utils/validate');

/**
 * Get list of installed platform containers on devices
 * @param {Array<string> | string} deviceIds
 * @param {function} callback optional
 */
module.exports = function (deviceIds, callback) {
  try {
    if (Array.isArray(deviceIds)) {
      validate.validateArray(deviceIds);
      for (let i = 0; i < deviceIds.length; i += 1) {
        validate.validateString(deviceIds[i]);
      }
    } else {
      validate.validateString(deviceIds);
    }
    var path = '/devices/containers/devices-platforms?' + querystring.stringify({ deviceIds: deviceIds });
    return client.get('auth', path, callback);
  } catch (e) {
    if (callback) {
      return callback(e, null);
    }
    return Promise.reject(e);
  }
}
