/**********************************************************************
 * Copyright (c) 2021 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../../client');
var validate = require('../../../utils/validate');
var checkers = require('../../../utils/checkers');

/**
 * Update container version
 * @param {object} params
 * @param {string} containerId
 * @param {string} versionId
 * @param {object} options optional
 * @param {function} callback optional
 */

module.exports = function (params, containerId, versionId, options, callback) {
  try {
    if (checkers.isFunction(options)) {
      callback = options;
      options = {};
    }
    validate.validateFormData(params);
    validate.validateString(containerId);
    validate.validateString(versionId);
    var path = `/containers/${containerId}/versions/${versionId}`;
    return client.sendForm('auth', path, params, 'PUT', options, callback);
  } catch (e) {
    if (callback) {
      return callback(e, null);
    }
    return Promise.reject(e);
  }
}