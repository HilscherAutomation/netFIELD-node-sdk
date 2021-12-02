/**********************************************************************
 * Copyright (c) 2021 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../../client');
var validate = require('../../../utils/validate');

/**
 * Create software module artifact
 * @param {object} params
 * @param {number} softwareModuleId
 * @param {function} callback optional
 */
module.exports = function (params, softwareModuleId, callback) {
  try {
    validate.validateFormData(params);
    validate.validateNumber(softwareModuleId);
    var path = `/rest/v1/softwaremodules/${softwareModuleId}/artifacts`;
    return client.post('auth', path, params, callback);
  } catch (e) {
    if (callback) {
      return callback(e, null);
    }
    return Promise.reject(e);
  }
}