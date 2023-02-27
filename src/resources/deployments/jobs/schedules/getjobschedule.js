/**********************************************************************
 * Copyright (c) 2022 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../../../client');
var validate = require('../../../../utils/validate');

/** 
 * Get a schedule of deployment job execution by id
 * @param {string} scheduleId
 * @param {function} callback optional
 */
module.exports = function (scheduleId, callback) {
  try {   
    validate.validateString(scheduleId);
    var path = `/deployments/jobs/schedules/${scheduleId}`;
    return client.get('auth', path, callback);
  } catch (e) {
    if (callback) {
      return callback(e, null);
    }
    return Promise.reject(e);
  }
}