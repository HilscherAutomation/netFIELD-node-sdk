/**********************************************************************
 * Copyright (c) 2021 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var querystring = require('querystring');
var client = require('../../client');
var validate = require('../../utils/validate');
var checkers = require('../../utils/checkers');

/**
 * Get list of status by deviceIDs
 * @param {Array<string>} deviceIds
 * @param {function} callback optional
 */
module.exports = function (deviceIds, callback) {
    try {
        deviceIds.forEach(function (deviceId) {
            validate.validateString(deviceId);
        });
        var path = '/devices/status?' + querystring.stringify({ deviceIds: deviceIds });
        return client.get('auth', path, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}
