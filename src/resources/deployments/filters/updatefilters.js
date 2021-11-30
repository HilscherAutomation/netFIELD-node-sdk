/**********************************************************************
 * Copyright (c) 2020 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../../client');
var validate = require('../../../utils/validate');

/**
 * Update filter by id
 * @param {string} filterId
 * @param {object} params
 * @param {function} callback optional
 */
module.exports = function (filterId, params, callback) {
  try {
    validate.validateString(filterId);
    validate.validateObject(params);
    var path = '/deployments/filters/' + filterId;
    return client.put('auth', path, params, callback);
  } catch (e) {
    if (callback) {
      return callback(e, null);
    }
    return Promise.reject(e);
  }
}