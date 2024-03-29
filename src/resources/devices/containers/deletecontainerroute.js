/**********************************************************************
 * Copyright (c) 2021 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../../client');
var validate = require('../../../utils/validate');

/**
 * Delete a device container route from device
 * @param {string} routeId
 * @param {string} deviceId
 * @param {function} callback optional
 */
module.exports = function (routeId, deviceId, callback) {
    try {
        validate.validateString(routeId);
        validate.validateString(deviceId);
        var path = '/devices/' + deviceId + '/containers/routes/' + routeId;
        return client.delete('auth', path, {}, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}