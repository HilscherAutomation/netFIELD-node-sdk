/**********************************************************************
 * Copyright (c) 2021 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../client');
var validate = require('../../utils/validate');

/**
 * Remove a device from a group
 * @param {number} groupId
 * @param {string} deviceId
 * @param {function} callback optional
 */
module.exports = function (groupId, deviceId, callback) {
    try {
        validate.validateNumber(groupId);
        validate.validateString(deviceId);
        var path = `/groups/${groupId}/devices/${deviceId}`;
        return client.delete('auth', path, {}, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}