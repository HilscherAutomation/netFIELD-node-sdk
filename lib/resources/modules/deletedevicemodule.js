/**********************************************************************
 * Copyright (c) 2019 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var querystring = require('querystring');
var client = require('../../client');
var validate = require('../../utils/validate');

/**
 * Delete Device by deviceId
 * @param {string} moduleId
 * @param {string} deviceId
 * @param {function} callback optional
 */
module.exports = function (moduleId, deviceId, callback) {
    try {
        validate.validateString(moduleId);
        validate.validateString(deviceId);
        var path = '/modules/' + moduleId + '?' + querystring.stringify({ deviceId: deviceId});
        return client.delete('auth', path, {}, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}