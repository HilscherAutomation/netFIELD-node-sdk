/**********************************************************************
 * Copyright (c) 2022 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../client');
var validate = require('../../utils/validate');

/**
 * Delete only one device notifications by deviceId and notificationId
 * @param {string} deviceId
 * @param {string} notificationId
 * @param {function} callback optional
 */
module.exports = function (deviceId, notificationId, callback) {
    try {
        validate.validateString(deviceId);
        validate.validateString(notificationId);
        var path = '/devices/' + deviceId + '/notifications/' + notificationId;
        return client.delete('auth', path, {}, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}