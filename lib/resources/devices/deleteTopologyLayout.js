/**********************************************************************
 * Copyright (c) 2019 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../client');
var validate = require('../../utils/validate');

/**
 * Delete a topology layout
 * @param {string} deviceId The id current of the device
 * @param {string} layoutId The id of the desired layout
 * @param {function} callback optional
 */
module.exports = function (deviceId, layoutId, callback) {
    try {
        validate.validateString(deviceId);
        validate.validateString(layoutId);

        var path = '/devices/' + deviceId + '/topology/layouts/' + layoutId;
        return client.delete('auth', path, {}, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}
