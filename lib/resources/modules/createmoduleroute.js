/**********************************************************************
 * Copyright (c) 2019 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var querystring = require('querystring');
var client = require('../../client');
var validate = require('../../utils/validate');

/**
 * Adds a module route to a device
 * @param {string} deviceId
 * @param {object} params
 * @param {function} callback optional
 */
module.exports = function (deviceId, params, callback) {
    try {
        validate.validateString(deviceId);
        validate.validateObject(params);
        var path = '/modules/routes?' + querystring.stringify({ deviceId: deviceId });
        return client.post('auth', path, params, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}