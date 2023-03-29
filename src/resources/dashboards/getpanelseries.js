/**********************************************************************
 * Copyright (c) 2022 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../client');
var validate = require('../../utils/validate');

/**
 * Get dashboard panel series by id
 * @param {string} dashboardId
 * @param {string} panelId
 * @param {string} seriesId
 * @param {function} callback optional
 */
module.exports = function (dashboardId, panelId, seriesId, callback) {
  try {
    validate.validateString(dashboardId);
    validate.validateString(panelId);
    validate.validateString(seriesId);
    var path = `/dashboards/${dashboardId}/panels/${panelId}/series/${seriesId}`;
    return client.get('auth', path, callback);
  } catch (e) {
    if (callback) {
      return callback(e, null);
    }
    return Promise.reject(e);
  }
}