/**********************************************************************
 * Copyright (c) 2022 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../../client');
var validate = require('../../../utils/validate');

/**
 * Create software module artifact
 * @param {{fileName: string, file: File, md5sum: string, sha1sum: string, sha256sum: string}} params
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