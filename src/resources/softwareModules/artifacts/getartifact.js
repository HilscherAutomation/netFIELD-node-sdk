/**********************************************************************
 * Copyright (c) 2021 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../../client');
var validate = require('../../../utils/validate');

/**
 * Get software module artifact
 * @param {number} softwareModuleId
 * @param {number} artifactId
 * @param {function} callback optional
 */
module.exports = function (softwareModuleId, artifactId, callback) {
  try {
    validate.validateNumber(softwareModuleId);
    validate.validateNumber(artifactId);
    var path = `/rest/v1/softwaremodules/${softwareModuleId}/artifacts/${artifactId}`;
    return client.get('auth', path, callback);
  } catch (e) {
    if (callback) {
      return callback(e, null);
    }
    return Promise.reject(e);
  }
}