/**********************************************************************
 * Copyright (c) 2021 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../client');
var validate = require('../../utils/validate');

/**
 * Delete dashboard panel by id
 * @param {string} dashboardId
 * @param {string} panelId
 * @param {function} callback optional
 */
module.exports = function (dashboardId, panelId, callback) {
  try {
    validate.validateString(dashboardId);
    validate.validateString(panelId);
    var path = `/dashboards/${dashboardId}/panels/${panelId}`;
    return client.delete('auth', path, {}, callback);
  } catch (e) {
    if (callback) {
      return callback(e, null);
    }
    return Promise.reject(e);
  }
}