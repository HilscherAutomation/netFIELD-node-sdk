/**********************************************************************
 * Copyright (c) 2020 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../client');
var validate = require('../../utils/validate');

/**
 * Update dashboard panel series by id
 * @param {string} dashboardId
 * @param {string} panelId
 * @param {string} seriesId
 * @param {object} params
 * @param {function} callback optional
 */
module.exports = function (dashboardId, panelId, seriesId, params, callback) {
  try {
    validate.validateString(dashboardId);
    validate.validateString(panelId);
    validate.validateString(seriesId);
    validate.validateObject(params);
    var path = `/dashboards/${dashboardId}/panels/${panelId}/series/${seriesId}`;
    return client.put('auth', path, params, callback);
  } catch (e) {
    if (callback) {
      return callback(e, null);
    }
    return Promise.reject(e);
  }
}