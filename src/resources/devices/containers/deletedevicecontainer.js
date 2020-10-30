/**********************************************************************
 * Copyright (c) 2019 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../../client');
var validate = require('../../../utils/validate');

/**
 * Delete a device container
 * @param {string} containerId
 * @param {string} deviceId
 * @param {function} callback optional
 */
module.exports = function (containerId, deviceId, callback) {
    try {
        validate.validateString(containerId);
        validate.validateString(deviceId);
        var path = '/devices/' + deviceId + '/containers/' + containerId;
        return client.delete('auth', path, {}, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}