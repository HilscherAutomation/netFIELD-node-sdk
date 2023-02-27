/**********************************************************************
 * Copyright (c) 2022 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../../../client');
var validate = require('../../../../utils/validate');

/** 
 * Update a schedule of deployment job execution
 * @param {string} scheduleId
 * @param {{organisationId: number,
 * jobId: string,
 * targetType: string,
 * targetId: string | number,
 * deviceIds: Array<string>,
 * excludedDevices: Array<string>,
 * scheduleType: string, 
 * startTime: Date,
 * title: string,
 * description: string}} params
 * @param {function} callback optional
 */
module.exports = function (scheduleId, params, callback) {
  try {   
    validate.validateString(scheduleId);
    validate.validateObject(params);
    var path = `/deployments/jobs/schedules/${scheduleId}`;
    return client.put('auth', path, params, callback);
  } catch (e) {
    if (callback) {
      return callback(e, null);
    }
    return Promise.reject(e);
  }
}