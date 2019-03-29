/**********************************************************************
 * Copyright (c) 2019 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';
var querystring = require('querystring');
var client = require('../../client');
var validate = require('../../utils/validate');

/**
 * Get the topology of a specific device
 * @param {string} deviceId The desired device id
 * @param {number} count Number of devices retrieved
 * @param {function} callback optional
 */
module.exports = function (deviceId, count, callback) {
    try {
        validate.validateString(deviceId);
        if (count !== undefined) {
            validate.validateNumber(count)
        }
        var path = '/devices/' + deviceId + '/topology?' + querystring.stringify({ count: count });
        return client.get('auth', path, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}