/**********************************************************************
 * Copyright (c) 2022 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
 **********************************************************************/
'use strict';

var client = require('../../../client');
var validate = require('../../../utils/validate');

/** 
 * Create deployment job
 * @param {{organisationId: string,
 * name: string,
 * containers: Array<{containerId: string, processorArchitecture: string, directMethods: Array<object>}>
 * os: object,
 * routes: Array<{name: string, source: string, condition: string, target: string}>
 * type: string}} params
 * @param {function} callback optional
 */
module.exports = function(params, callback) {
    try {
        validate.validateObject(params);
        var path = '/deployments/jobs';
        return client.post('auth', path, params, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}