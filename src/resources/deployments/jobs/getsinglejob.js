/**********************************************************************
 * Copyright (c) 2022 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../../client');
var validate = require('../../../utils/validate');

/** 
 * Get single deployment job by id
 * @param {string} jobId
 * @param {function} callback optional
 */
module.exports = function (jobId, callback) {
  try {   
    validate.validateString(jobId);
    var path = `/deployments/jobs/${jobId}`;
    return client.get('auth', path, callback);
  } catch (e) {
    if (callback) {
      return callback(e, null);
    }
    return Promise.reject(e);
  }
}