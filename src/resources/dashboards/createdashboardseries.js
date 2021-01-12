/**********************************************************************
 * Copyright (c) 2020 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../client');
var validate = require('../../utils/validate');

/**
 * Create dashboard panel series
 * @param {string} dashboardId
 * @param {string} panelId
 * @param {object} params
 * @param {function} callback optional
 */
module.exports = function (dashboardId, panelId, params, callback) {
  try {
    validate.validateString(dashboardId);
    validate.validateString(panelId);
    validate.validateObject(params);
    var path = `/dashboards/${dashboardId}/panels/${panelId}/series`;
    return client.post('auth', path, params, callback);
  } catch (e) {
    if (callback) {
      return callback(e, null);
    }
    return Promise.reject(e);
  }
}