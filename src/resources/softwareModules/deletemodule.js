/**********************************************************************
 * Copyright (c) 2022 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../client');
var validate = require('../../utils/validate');

/**
 * Delete software module by id
 * @param {number} softwareModuleId
 * @param {function} callback optional
 */
module.exports = function (softwareModuleId, callback) {
  try {
    validate.validateNumber(softwareModuleId)
    var path = `/rest/v1/softwaremodules/${softwareModuleId}`;
    return client.delete('auth', path, {}, callback);
  } catch (e) {
    if (callback) {
      return callback(e, null);
    }
    return Promise.reject(e);
  }
}
