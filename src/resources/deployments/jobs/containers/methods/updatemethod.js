/**********************************************************************
 * Copyright (c) 2022 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../../../../client');
var validate = require('../../../../../utils/validate');

/**
 * Update container direct method into deployment job
 * @param {string} jobId
 * @param {string} containerId
 * @param {string} methodId
* @param {{methodName: string, methodPayload: object}} params 
 * @param {function} callback optional
 */
module.exports = function (jobId, containerId, methodId, params, callback) {
    try {
        validate.validateString(jobId);
        validate.validateString(containerId);
        validate.validateString(methodId);
        validate.validateObject(params);
        var path = '/deployments/jobs/' + jobId + '/containers/' + containerId + '/methods/' + methodId;
        return client.put('auth', path, params, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}
