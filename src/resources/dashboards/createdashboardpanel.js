/**********************************************************************
 * Copyright (c) 2020 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../client');
var validate = require('../../utils/validate');

/**
 * Create dashboard panel
 * @param {string} dashboardId
 * @param {object} params
 * @param {function} callback optional
 */
module.exports = function (dashboardId, params, callback) {
  try {
    validate.validateString(dashboardId);
    validate.validateObject(params);
    var path = `/dashboards/${dashboardId}/panels`;
    return client.post('auth', path, params, callback);
  } catch (e) {
    if (callback) {
      return callback(e, null);
    }
    return Promise.reject(e);
  }
}