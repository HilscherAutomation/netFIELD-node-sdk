/**********************************************************************
 * Copyright (c) 2022 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
 **********************************************************************/
'use strict';

var client = require('../../../../client');
var validate = require('../../../../utils/validate');
var checkers = require('../../../../utils/checkers');

/**
 * Add a OS to deployment job
 * @param {string} jobId
 * @param {{platform: string, edgeosId: string}} params
 * @param {object} options
 * @param {function} callback optional
 */
module.exports = function(jobId, params, options, callback) {
    try {
        if (checkers.isFunction(options)) {
            callback = options;
            options = {};
        }
        validate.validateString(jobId);
        validate.validateFormData(params);
        var path = '/deployments/jobs/' + jobId + '/edgeos';
        return client.sendForm('auth', path, params, 'POST', options, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}