/**********************************************************************
 * Copyright (c) 2019 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../../client');
var validate = require('../../../utils/validate');
var checkers = require('../../../utils/checkers');

/**
 * Create a manifest container
 * @param {integer} organisationId
 * @param {string} containerId
 * @param {object} params
 * @param {object} options
 * @param {function} callback optional
 */
module.exports = function (organisationId, containerId, params, options, callback) {
  try {
    if (checkers.isFunction(options)) {
      callback = options;
      options = {};
    }
    validate.validateNumber(organisationId);
    validate.validateString(containerId);
    validate.validateFormData(params);
    var path = `/organisations/${organisationId}/deployment-manifests/containers/${containerId}`;
    return client.sendForm('auth', path, params, 'POST', options, callback);
  } catch (e) {
    if (callback) {
      return callback(e, null);
    }
    return Promise.reject(e);
  }
};
