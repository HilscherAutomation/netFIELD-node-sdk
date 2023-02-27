/**********************************************************************
 * Copyright (c) 2022 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
 **********************************************************************/
 'use strict';

 var client = require('../../../../client');
 var validate = require('../../../../utils/validate');
 
 /** 
  * Create a schedule of deployment job execution
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
 module.exports = function(params, callback) {
     try {
         validate.validateObject(params);
         var path = '/deployments/jobs/schedules';
         return client.post('auth', path, params, callback);
     } catch (e) {
         if (callback) {
             return callback(e, null);
         }
         return Promise.reject(e);
     }
 }