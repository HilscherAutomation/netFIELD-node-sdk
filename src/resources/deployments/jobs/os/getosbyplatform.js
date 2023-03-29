/**********************************************************************
 * Copyright (c) 2022 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../../../client');
var validate = require('../../../../utils/validate');

/**
 * Get single OS in a deployment job by platform
 * @param {string} jobId
 * @param {string} platform
 * @param {function} callback optional
 */
module.exports = function (jobId, platform, callback) {
    try {
        validate.validateString(jobId);
        validate.validateString(platform);
        var path = `/deployments/jobs/${jobId}/edgeos/${platform}`;
        return client.get('auth', path, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}