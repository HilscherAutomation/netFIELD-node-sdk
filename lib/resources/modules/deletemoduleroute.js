/**********************************************************************
 * Copyright (c) 2019 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../client');
var querystring = require('querystring');
var validate = require('../../utils/validate');

/**
 * Delete a module route from a device
 * @param {string} routeId
 * @param {string} deviceId
 * @param {function} callback optional
 */
module.exports = function (routeId, deviceId, callback) {
    try {
        validate.validateString(routeId);
        validate.validateString(deviceId);
        var path = '/modules/routes/' + routeId + '?' + querystring.stringify({ deviceId: deviceId });
        return client.delete('auth', path, {}, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}