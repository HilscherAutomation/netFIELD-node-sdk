/**********************************************************************
 * Copyright (c) 2019 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../client');
var validate = require('../../utils/validate');

/**
 * Update topology layout. A complete layout has to be provided in order to update.
 * @param {string} deviceId
 * @param {string} layoutId
 * @param {object} params
 * @param {function} callback optional
 */
module.exports = function (deviceId, layoutId, params, callback) {
    try {
        validate.validateString(deviceId);
        validate.validateString(layoutId);
        validate.validateObject(params);
        var path =  '/devices/' + deviceId + '/topology/layouts/' + layoutId;
        return client.put('auth', path, params, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}