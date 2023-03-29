/**********************************************************************
 * Copyright (c) 2022 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../../../client');
var validate = require('../../../../utils/validate');

/**
 * Update single route in a deployment job
 * @param {string} jobId
 * @param {string} routeId
 * @param {{name: string, source: string, condition: string, target: string}} params 
 * @param {function} callback optional
 */
module.exports = function (jobId, routeId, params, callback) {
    try {
        validate.validateString(jobId);
        validate.validateString(routeId);
        validate.validateFormData(params);
        var path = `/deployments/jobs/${jobId}/routes/${routeId}`;
        return client.put('auth', path, params, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}