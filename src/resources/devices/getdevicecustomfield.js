/**********************************************************************
 * Copyright (c) 2019 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../client');
var validate = require('../../utils/validate');

/**
 * Get device Custom field by deviceId and fieldId
 * @param {string} deviceId
 * @param {string} fieldId
 * @param {function} callback optional
 */
module.exports = function (deviceId, fieldId, callback) {
    try {
        validate.validateString(deviceId);
        validate.validateString(fieldId);
        var path = '/devices/' + deviceId + '/custom-fields/' + fieldId;
        return client.get('auth', path, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}