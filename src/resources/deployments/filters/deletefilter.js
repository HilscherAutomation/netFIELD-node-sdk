/**********************************************************************
 * Copyright (c) 2021 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../../client');
var validate = require('../../../utils/validate');

/**
 * Delete filter by filterId
 * @param {string} filterId
 * @param {function} callback optional
 */
module.exports = function (filterId, callback) {
  try {
    validate.validateString(filterId);
    var path = '/deployments/filters/' + filterId;
    return client.delete('auth', path, {}, callback);
  } catch (e) {
    if (callback) {
      return callback(e, null);
    }
    return Promise.reject(e);
  }
}