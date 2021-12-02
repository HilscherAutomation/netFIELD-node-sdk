/**********************************************************************
 * Copyright (c) 2021 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../../../../client');
var validate = require('../../../../../utils/validate');

/**
 * Delete direct method from container into deployment job document
 * @param {string} jobId
 * @param {string} containerId
 * @param {string} methodId
 * @param {function} callback optional
 */
module.exports = function (jobId, containerId, methodId, callback) {
    try {
        validate.validateString(jobId);
        validate.validateString(containerId);
        validate.validateString(methodId);
        var path = '/deployments/jobs/' + jobId + '/containers/' + containerId + '/methods/' + methodId;
        return client.delete('auth', path, {}, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}
