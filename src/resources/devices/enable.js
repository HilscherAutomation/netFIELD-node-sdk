/**********************************************************************
 * Copyright (c) 2020 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../client');
var validate = require('../../utils/validate');
var querystring = require('querystring');

/**
 * Enable/Disable Device
 * @param {string} deviceId
 * @param {boolean} enabled
 * @param {object} params
 * @param {function} callback optional
 */
module.exports = function (deviceId, enabled, params, callback) {
    try {
        validate.validateObject(params);
        var path = `/devices/${deviceId}/state?${querystring.stringify({ enabled: enabled })}`;
        return client.put('auth', path, params, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}