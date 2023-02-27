/**********************************************************************
 * Copyright (c) 2022 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../client');
var validate = require('../../utils/validate');

/**
 * Get all dashboard panels by id
 * @param {string} dashboardId
 * @param {function} callback optional
 */
module.exports = function (dashboardId, callback) {
  try {
    validate.validateString(dashboardId);
    var path = `/dashboards/${dashboardId}/panels`;
    return client.get('auth', path, callback);
  } catch (e) {
    if (callback) {
      return callback(e, null);
    }
    return Promise.reject(e);
  }
}