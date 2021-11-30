/**********************************************************************
 * Copyright (c) 2021 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../../../../client');
var validate = require('../../../../../utils/validate');

/**
 * Add direct method to container into deployment job
 * @param {string} jobId
 * @param {string} containerId
 * @param {object} params 
 * @param {function} callback optional
 */
module.exports = function (jobId, containerId, params, callback) {
    try {

        validate.validateString(jobId);
        validate.validateString(containerId);
        validate.validateObject(params);
        var path = '/deployments/jobs/' + jobId + '/containers/' + containerId + '/methods';
        return client.post('auth', path, params, callback)
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}
