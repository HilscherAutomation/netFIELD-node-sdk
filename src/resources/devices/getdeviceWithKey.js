/**********************************************************************
 * Copyright (c) 2022 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../client');
var validate = require('../../utils/validate');

/**
 * Get device by deviceId with API key
 * @param {string} deviceId
 * @param {function} callback optional
 */
module.exports = function (deviceId, callback) {
    try {
        validate.validateString(deviceId);
        var path = '/devices/' + deviceId;
        return client.get('key', path, callback); // used for advanced onboarding, SDK needs to be refactored because of hard-coded 'auth'
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}