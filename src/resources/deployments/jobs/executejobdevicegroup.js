/**********************************************************************
 * Copyright (c) 2022 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../../client');
var validate = require('../../../utils/validate');
var checkers = require('../../../utils/checkers');

/** 
 * Execute deployment job by device group
 * @param {string} jobId
 * @param {number} groupId
 * @param {{excludedDevices: Array<string>}} params
 * @param {function} callback optional
 */
module.exports = function (jobId, groupId, params = {}, callback) {
  if (checkers.isFunction(params)) {
    callback = params;
    params = {};
  }
  try {
    validate.validateString(jobId);
    validate.validateNumber(groupId);
    validate.validateObject(params);
    var path = `/deployments/jobs/${jobId}/execute/groups/${groupId}`;
    return client.post('auth', path, params, callback);
  } catch (e) {
    if (callback) {
      return callback(e, null);
    }
    return Promise.reject(e);
  }
}
