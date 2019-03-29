/**********************************************************************
 * Copyright (c) 2019 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../client');
var validate = require('../../utils/validate');

/**
 * Get a specific topology layout of a specific device
 * @param {string} deviceId The device id current of the device
 * @param {string} layoutId The id of the desired layout
 * @param {function} callback optional
 */
module.exports = function (deviceId, layoutId, callback) {
    try {
        validate.validateString(deviceId);
        validate.validateString(layoutId);

        var path = '/devices/' + deviceId + '/topology/layouts/' + layoutId;
        return client.get('auth', path, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}
