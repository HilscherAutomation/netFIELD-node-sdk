/**********************************************************************
 * Copyright (c) 2019 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../../client');
var validate = require('../../../utils/validate');

/**
 * Update a device container route
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
        var path = '/devices/' + deviceId + '/containers/routes/' + routeId;
        return client.put('auth', path, params, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}