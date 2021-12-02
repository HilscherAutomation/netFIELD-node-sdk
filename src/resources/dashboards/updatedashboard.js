/**********************************************************************
 * Copyright (c) 2021 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../client');
var validate = require('../../utils/validate');

/**
 * Update dashboard by id
 * @param {string} dashboardId
 * @param {object} params
 * @param {function} callback optional
 */
module.exports = function (dashboardId, params, callback) {
  try {
    validate.validateString(dashboardId);
    validate.validateObject(params);
    var path = '/dashboards/' + dashboardId;
    return client.put('auth', path, params, callback);
  } catch (e) {
    if (callback) {
      return callback(e, null);
    }
    return Promise.reject(e);
  }
}