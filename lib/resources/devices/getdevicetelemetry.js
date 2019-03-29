/**********************************************************************
 * Copyright (c) 2019 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../client');
var validate = require('../../utils/validate');

/**
 * Get telemetry data by deviceId
 * @param {string} deviceId The desired deviceId
 * @param {number} limit The amount of telemetry objects returned. Value between 1 and 60, optional
 * @param {function} callback optional
 */
module.exports = function (deviceId, limit, callback) {
    try {
        validate.validateString(deviceId);
        if (limit !== undefined) {
            validate.validateNumber(limit)
        }
        var path = '/devices/' + deviceId + '/telemetry' + (limit !== undefined ? '?limit=' + limit : '');
        return client.get('auth', path, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}