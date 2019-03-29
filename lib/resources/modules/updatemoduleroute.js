/**********************************************************************
 * Copyright (c) 2019 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../client');
var querystring = require('querystring');
var validate = require('../../utils/validate');

/**
 * Update a module route by routeId and deviceId
 * @param {string} routeId
 * @param {string} deviceId
 * @param {object} params
 * @param {function} callback optional
 */
module.exports = function(routeId, deviceId, params, callback){
    try {
        validate.validateString(routeId);
        validate.validateString(deviceId);
        validate.validateObject(params);
        var path = '/modules/routes/' + routeId + '?' + querystring.stringify({ deviceId: deviceId });
        return client.put('auth', path, params, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}