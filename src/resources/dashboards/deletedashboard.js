/**********************************************************************
 * Copyright (c) 2021 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../client');
var validate = require('../../utils/validate');

/**
 * Delete dashboard by id
 * @param {string} dashboardId
 * @param {function} callback optional
 */
module.exports = function (dashboardId, callback) {
  try {
    validate.validateString(dashboardId);
    var path = '/dashboards/' + dashboardId;
    return client.delete('auth', path, {}, callback);
  } catch (e) {
    if (callback) {
      return callback(e, null);
    }
    return Promise.reject(e);
  }
}