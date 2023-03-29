/**********************************************************************
 * Copyright (c) 2022 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../../client');
var validate = require('../../../utils/validate');
var checkers = require('../../../utils/checkers');

/**
 * Install list of device containers
 * @param {string} deviceId
 * @param {{containers: Array<{containerId: string,
 * version: string,
 * restartPolicy: string, 
 * desiredStatus: string,
 * containerCreateOptions: object,
 * containerTwinDesiredOptions: object,
 * environmentVariables: Array<object>,
 * startupOrder: number,
 * useProxySettings: boolean}>}} params
 * @param {object} options
 * @param {function} callback optional
 */
module.exports = function (deviceId, params, options, callback) {
    try {
        if (checkers.isFunction(options)) {
            callback = options;
            options = {};
        }
        validate.validateString(deviceId);
        validate.validateFormData(params);
        var path = `/devices/${deviceId}/containers`;
        return client.sendForm('auth', path, params, 'POST', options, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}
