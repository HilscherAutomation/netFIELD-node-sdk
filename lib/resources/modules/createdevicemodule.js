/**********************************************************************
 * Copyright (c) 2019 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var querystring = require('querystring');
var client = require('../../client');
var validate = require('../../utils/validate');

/**
 * Installs a module on a device
 * @param {string} moduleId
 * @param {string} deviceId
 * @param {object} params
 * @param {function} callback optional
 */
module.exports = function (moduleId, deviceId, params, callback) {
    try {
        validate.validateString(moduleId);
        validate.validateString(deviceId);
        validate.validateObject(params);
        var path = '/modules/' + moduleId + '?' + querystring.stringify({ deviceId: deviceId });
        return client.post('auth', path, params, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}