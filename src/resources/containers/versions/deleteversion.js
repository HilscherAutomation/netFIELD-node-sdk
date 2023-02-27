/**********************************************************************
 * Copyright (c) 2022 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../../client');
var validate = require('../../../utils/validate');

/**
 * Delete version from container
 * @param {string} containerId
 * @param {string} versionId
 * @param {function} callback optional
 */

module.exports = function (containerId, versionId, callback) {
  try {
    validate.validateString(containerId);
    validate.validateString(versionId);
    var path = `/containers/${containerId}/versions/${versionId}`;
    return client.delete('auth', path, {}, callback);
  } catch (e) {
    if (callback) {
      return callback(e, null);
    }
    return Promise.reject(e);
  }
}