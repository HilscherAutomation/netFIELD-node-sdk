/**********************************************************************
 * Copyright (c) 2022 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../../client');
var validate = require('../../../utils/validate');

/**
 * Update sensorEDGE OS and redeploy device containers
 * @param {string} deviceId
 * @param {function} callback optional
 */
module.exports = function (deviceId, callback) {
    try {
        validate.validateString(deviceId);
        var path = '/devices/' + deviceId + '/deployment-manifests/deploy';
        return client.put('auth', path, null, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}