/**********************************************************************
 * Copyright (c) 2022 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../../../../client');
var validate = require('../../../../../utils/validate');

/**
 * Get single direct method from deployment job container by method id
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
        return client.get('auth', path, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}
