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
 * @param {function} callback optional
 */
module.exports = function (organisationId, containerId, params, callback) {
  try {
    validate.validateObject(params);
    validate.validateNumber(organisationId);
    var path = `/organisations/${organisationId}/deployment-manifests/containers/${containerId}`;
    return client.post('auth', path, params, callback);
  } catch (e) {
    if (callback) {
      return callback(e, null);
    }
    return Promise.reject(e);
  }
};
