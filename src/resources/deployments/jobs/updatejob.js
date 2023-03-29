/**********************************************************************
 * Copyright (c) 2022 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../../client');
var validate = require('../../../utils/validate');

/** 
 * Update deployment job
 * @param {string} jobId
 * @param {{name: string,
 * containers: Array<{containerId: string, processorArchitecture: string, directMethods: Array<object>}>
 * routes: Array<{name: string, source: string, condition: string, target: string}>
 * os: object }} params
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