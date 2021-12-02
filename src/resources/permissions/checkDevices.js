/**********************************************************************
 * Copyright (c) 2021 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../client');
var validate = require('../../utils/validate');

/**
 * Check what permissions a user is allowed to use with given devices
 * @param {Array<String>} deviceIds
 * @param {function} callback optional
 */
module.exports = function (deviceIds, callback) {
    try {
        if (!deviceIds || !Array.isArray(deviceIds)) {
            throw new Error("deviceIds must be an array of string");
        }
        for (let i = 0; i < deviceIds.length; i += 1) {
            validate.validateString(deviceIds[i]);
        }
        const params = {
            deviceIds: deviceIds,
        };
        var path =  '/permissions/devices';
        return client.post('auth', path, params, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}