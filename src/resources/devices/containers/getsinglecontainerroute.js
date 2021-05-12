/**********************************************************************
 * Copyright (c) 2019 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../../client');
var validate = require('../../../utils/validate');

/**
 * Get information about specific device container route
 * @param {string} deviceId
 * @param {string} routeId
 * @param {function} callback optional
 */
module.exports = function (deviceId, routeId, callback) {
    try {
        validate.validateString(deviceId);
        validate.validateString(routeId);
        var path = '/devices/' + deviceId + '/containers/routes/' + routeId;
        return client.get('auth', path, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}
