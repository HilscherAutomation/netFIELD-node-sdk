/**********************************************************************
 * Copyright (c) 2022 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../../client');
var validate = require('../../../utils/validate');

/** 
 * Delete deployment manifest
 * @param {number} organisationId
 * @param {string} manifestId
 * @param {function} callback optional
 */
module.exports = function (organisationId, manifestId, callback) {
  try {
    validate.validateNumber(organisationId);
    validate.validateString(manifestId);
    var path = `/organisations/${organisationId}/deployment-manifests/${manifestId}`;
    return client.delete('auth', path, {}, callback);
  } catch (e) {
    if (callback) {
      return callback(e, null);
    }
    return Promise.reject(e);
  }
}
