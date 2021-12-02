/**********************************************************************
 * Copyright (c) 2021 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../../../client');
var validate = require('../../../../utils/validate');

/**
 * Get single route in a deployment job by id
 * @param {string} jobId
 * @param {string} routeId
 * @param {function} callback optional
 */
module.exports = function (jobId, routeId, callback) {
    try {
        validate.validateString(jobId);
        validate.validateString(routeId);
        var path = `/deployments/jobs/${jobId}/routes/${routeId}`;
        return client.get('auth', path, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}