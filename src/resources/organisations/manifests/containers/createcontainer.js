/**********************************************************************
 * Copyright (c) 2022 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../../../client');
var validate = require('../../../../utils/validate');
var checkers = require('../../../../utils/checkers');

/**
 * Create a manifest container
 * @param {integer} organisationId
 * @param {string} manifestId
 * @param {string} containerId
 * @param {{version: string,
 * restartPolicy: string,
 * desiredStatus: string,
 * containerCreateOptions: object,
 * containerTwinDesiredOptions: object,
 * environmentVariables: Array<object>,
 * startupOrder: number,
 * useProxySettings: boolean,
 * processorArchitecture: string}} params
 * @param {object} options
 * @param {function} callback optional
 */
module.exports = function (organisationId, manifestId, containerId, params, options, callback) {
  try {
    if (checkers.isFunction(options)) {
      callback = options;
      options = {};
    }
    validate.validateNumber(organisationId);
    validate.validateString(manifestId);
    validate.validateString(containerId);
    validate.validateFormData(params);
    var path = `/organisations/${organisationId}/deployment-manifests/${manifestId}/containers/${containerId}`;
    return client.sendForm('auth', path, params, 'POST', options, callback);
  } catch (e) {
    if (callback) {
      return callback(e, null);
    }
    return Promise.reject(e);
  }
};
