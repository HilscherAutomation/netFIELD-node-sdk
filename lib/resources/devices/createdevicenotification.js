/**********************************************************************
 * Copyright (c) 2019 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../client');
var validate = require('../../utils/validate');

/**
 * Create notification for device
 * @param {string} deviceId
 * @param {function} callback optional
 */
module.exports = function (deviceId, params, callback) {
    try {
        validate.validateObject(params);
        validate.validateString(deviceId);
        var path = '/devices/' + deviceId + '/notifications';
        return client.post('auth', path, params, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}