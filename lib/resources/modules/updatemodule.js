/**********************************************************************
 * Copyright (c) 2019 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../client');
var querystring = require('querystring');
var validate = require('../../utils/validate');

/**
 * Update a module in the appstore or update parameters of an installed module
 * @param {string} moduleId
 * @param {string} deviceId
 * @param {object} params
 * @param {function} callback optional
 */
module.exports = function (moduleId, deviceId, params, callback) {
    try {
        if (deviceId) {
            validate.validateString(deviceId);
            validate.validateString(moduleId);
            validate.validateObject(params);
            var path = '/modules/' + moduleId + '?' + querystring.stringify({ deviceId: deviceId });
            return client.put('auth', path, params, callback);
        }
        validate.validateString(moduleId);
        validate.validateFormData(params);
        var path = '/modules/' + moduleId;
        return client.sendForm('auth', path, params, 'PUT', callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}