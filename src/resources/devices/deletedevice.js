/**********************************************************************
 * Copyright (c) 2022 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../client');
var validate = require('../../utils/validate');

/**
 * Delete Device by deviceId
 * @param {string} deviceId
 * @param {function} callback optional
 */
module.exports = function (deviceId, callback) {
    try {
        validate.validateString(deviceId);
        var path = '/devices/' + deviceId;
        return client.delete('auth', path, {}, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}