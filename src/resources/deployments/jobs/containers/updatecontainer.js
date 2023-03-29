/**********************************************************************
 * Copyright (c) 2022 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../../../client');
var validate = require('../../../../utils/validate');
var checkers = require('../../../../utils/checkers');

/**
 * Update single container in a deployment job
 * @param {string} jobId
 * @param {string} containerId
 * @param {{version: string,
 * restartPolicy: string,
 * desiredStatus: string,
 * containerCreateOptions: object,
 * containerTwinDesiredOptions: object,
 * environmentVariables: Array<object>
 * startupOrder: number, 
 * useProxySettings: boolean,
 * processorArchitecture: string,
 * directMethods: Array<object>}} params
 * @param {object} options
 * @param {function} callback optional
 */
module.exports = function (jobId, containerId, params, options, callback) {
    try {
        if (checkers.isFunction(options)) {
            callback = options;
            options = {};
        }
        validate.validateString(jobId);
        validate.validateString(containerId);
        validate.validateFormData(params);
        var path = `/deployments/jobs/${jobId}/containers/${containerId}`;
        return client.sendForm('auth', path, params, 'PUT', options, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}