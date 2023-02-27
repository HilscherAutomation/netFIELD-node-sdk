/**********************************************************************
 * Copyright (c) 2022 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../client');
var validate = require('../../utils/validate');

/**
 * Call device method
 * @param {string} deviceId
 * @param {{containerName: string, methodName: string, methodPayload: object}} params
 * @param {function} callback optional
 */
module.exports = function (deviceId, params, callback) {
    try {
        var path = '/devices/' + deviceId + '/methods';
        validate.validateObject(params);
        return client.post('auth', path, params, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}