/**********************************************************************
 * Copyright (c) 2022 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../client');
var validate = require('../../utils/validate');

/**
 * Check what permissions a user is allowed to use with given devices
 * @param {{deviceIds: Array<String>, resources: Array<string>}} params
 * @param {function} callback optional
 */
module.exports = function (params, callback) {
    try {
        const {deviceIds} = params;
        validate.validateArray(deviceIds);
        for (let i = 0; i < deviceIds.length; i += 1) {
            validate.validateString(deviceIds[i]);
        }
        validate.validateObject(params);
        var path =  '/permissions/devices';
        return client.post('auth', path, params, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}