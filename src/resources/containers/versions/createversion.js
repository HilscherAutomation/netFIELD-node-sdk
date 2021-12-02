/**********************************************************************
 * Copyright (c) 2021 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../../client');
var validate = require('../../../utils/validate');
var checkers = require('../../../utils/checkers');

/**
 * Add a new version to the container
 * @param {object} params
 * @param {string} containerId
 * @param {object} options optional
 * @param {function} callback optional
 */

module.exports = function (params, containerId, options, callback) {
  try {
    if (checkers.isFunction(options)) {
      callback = options;
      options = {};
    }
    validate.validateFormData(params);
    validate.validateString(containerId);
    var path = `/containers/${containerId}/versions`;
    return client.sendForm('auth', path, params, 'POST', options, callback);
  } catch (e) {
    if (callback) {
      return callback(e, null);
    }
    return Promise.reject(e);
  }
}