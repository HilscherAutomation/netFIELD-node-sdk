/**********************************************************************
 * Copyright (c) 2019 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../../client');
var validate = require('../../../utils/validate');

/**
 * Installs a container on a device
 * @param {string} containerId
 * @param {string} deviceId
 * @param {object} params
 * @param {function} callback optional
 */
module.exports = function (containerId, deviceId, params, callback) {
    try {
        validate.validateString(containerId);
        validate.validateString(deviceId);
        validate.validateObject(params);
        var path = '/devices/' + deviceId + '/containers/' + containerId;
        return client.post('auth', path, params, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}