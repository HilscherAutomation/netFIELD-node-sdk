/**********************************************************************
 * Copyright (c) 2021 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../client');
var validate = require('../../utils/validate');

/**
 * Get software module by id
 * @param {number} softwareModuleId
 * @param {function} callback optional
 */
module.exports = function (softwareModuleId, callback) {
  try {
    validate.validateNumber(softwareModuleId)
    var path = `/rest/v1/softwaremodules/${softwareModuleId}`;
    return client.get('auth', path, callback);
  } catch (e) {
    if (callback) {
      return callback(e, null);
    }
    return Promise.reject(e);
  }
}