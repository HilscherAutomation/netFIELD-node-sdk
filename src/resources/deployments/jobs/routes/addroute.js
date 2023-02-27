/**********************************************************************
 * Copyright (c) 2022 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../../../client');
var validate = require('../../../../utils/validate');

/**
 * Add a route to deployment job
 * @param {string} jobId 
 * @param {{name: string, source: string, condition: string, target: string}} params 
 * @param {function} callback optional
 */
module.exports = function (jobId, params, callback) {
    try {       
        validate.validateString(jobId);       
        validate.validateObject(params);
        var path = '/deployments/jobs/' + jobId + '/routes';
        return client.post('auth', path, params, callback)
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}