/** ********************************************************************
 * Copyright (c) 2019 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
 **********************************************************************/
'use strict';

var client = require('../../../client');
var validate = require('../../../utils/validate');
var checkers = require('../../../utils/checkers');

/**
 * Update container from the manifest
 * @param {number} organisationId
 * @param {string} containerId
 * @param {object} params
 * @param {object} options
 * @param {function} callback optional
 */
module.exports = function (organisationId, containerId, params, callback) {
  try {
    validate.validateObject(params);
    validate.validateNumber(organisationId);
    validate.validateString(containerId);
    let path = `/organisations/${organisationId}/deployment-manifests/containers/${containerId}`;
    return client.put('auth', path, params, callback);
  } catch (e) {
    if (callback) {
      return callback(e, null);
    }
    return Promise.reject(e);
  }
};
