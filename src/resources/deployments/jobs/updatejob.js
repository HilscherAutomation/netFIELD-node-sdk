/**********************************************************************
 * Copyright (c) 2021 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../../client');
var validate = require('../../../utils/validate');

/**
 * Update deployment job
 * @param {string} jobId
 * @param {object} params
 * @param {function} callback optional
 */
module.exports = function (jobId, params, callback) {
  try {
    validate.validateString(jobId);
    validate.validateObject(params);
    var path = `/deployments/jobs/${jobId}`;
    return client.put('auth', path, params, callback);
  } catch (e) {
    if (callback) {
      return callback(e, null);
    }
    return Promise.reject(e);
  }
}