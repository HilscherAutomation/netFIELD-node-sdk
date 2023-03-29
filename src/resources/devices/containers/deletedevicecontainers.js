/**********************************************************************
 * Copyright (c) 2022 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var querystring = require('query-string');
var client = require('../../../client');
var validate = require('../../../utils/validate');

/**
 * Bulk Delete device containers
 * @param {string} deviceId
 * @param {Array<string> | string} containerIds
 * @param {function} callback optional
 */
 module.exports = function (deviceId, containerIds, callback) {
    try {
      if (Array.isArray(containerIds)) {
        for (let i = 0; i < containerIds.length; i += 1) {
          validate.validateString(containerIds[i]);
        }
      } else {
        validate.validateString(containerIds);
      }
      validate.validateString(deviceId);
      var path = '/devices/' + deviceId + '/containers/bulk-delete?' + querystring.stringify({ containerIds: containerIds });;
      return client.delete('auth', path, {}, callback);
    } catch (e) {
      if (callback) {
        return callback(e, null);
      }
      return Promise.reject(e);
    }
  }