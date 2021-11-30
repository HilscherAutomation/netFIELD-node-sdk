/**********************************************************************
 * Copyright (c) 2020 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../../../client');
var validate = require('../../../../utils/validate');

/**
 * Get single container in a deployment job by id
 * @param {string} jobId
 * @param {string} containerId
 * @param {function} callback optional
 */
module.exports = function (jobId, containerId, callback) {
    try {
        validate.validateString(jobId);
        validate.validateString(containerId);
        var path = `/deployments/jobs/${jobId}/containers/${containerId}`;
        return client.get('auth', path, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}