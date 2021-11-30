/**********************************************************************
 * Copyright (c) 2020 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../../../client');
var validate = require('../../../../utils/validate');

/**
 * Delete single route in a deployment job
 * @param {string} jobId
 * @param {string} routeId
 * @param {function} callback optional
 */
module.exports = function (jobId, routeId, callback) {
    try {
        validate.validateString(jobId);
        validate.validateString(routeId);        
        var path = `/deployments/jobs/${jobId}/routes/${routeId}`;
        return client.delete('auth', path, {}, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}