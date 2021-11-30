/**********************************************************************
 * Copyright (c) 2020 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../../client');
var validate = require('../../../utils/validate');
var checkers = require('../../../utils/checkers');

/** 
 * Execute deployment job by filter condition
 * @param {string} jobId
 * @param {string} filterId
 * @param {object} params
 * @param {function} callback optional
 */
module.exports = function (jobId, filterId, params = {}, callback) {
  if (checkers.isFunction(params)) {
    callback = params;
    params = {};
  }
  try {
    validate.validateString(jobId);
    validate.validateString(filterId);
    validate.validateObject(params);
    var path = `/deployments/jobs/${jobId}/execute/${filterId}`;
    return client.post('auth', path, params, callback);
  } catch (e) {
    if (callback) {
      return callback(e, null);
    }
    return Promise.reject(e);
  }
}
