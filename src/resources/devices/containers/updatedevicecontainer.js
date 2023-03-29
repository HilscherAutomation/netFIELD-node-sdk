/**********************************************************************
 * Copyright (c) 2022 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../../client');
var validate = require('../../../utils/validate');
var checkers = require('../../../utils/checkers');

/**
 * Update a device container
 * @param {string} containerId
 * @param {string} deviceId
 * @param {{version: string,
 * restartPolicy: string, 
 * desiredStatus: string,
 * useProxySettings: boolean
 * containerCreateOptions: object,
 * containerTwinDesiredOptions: object,
 * environmentVariables: Array<object>,
 * startupOrder: number,
 *  }} params
 * @param {function} callback optional
 */
module.exports = function (containerId, deviceId, params, options, callback) {
    try {
        if (checkers.isFunction(options)){
            callback = options;
            options = {};
        }
        validate.validateString(containerId);
        validate.validateString(deviceId);
        validate.validateFormData(params);
        var path = '/devices/' + deviceId + '/containers/' + containerId;
        return client.sendForm('auth', path, params, 'PUT', options, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}