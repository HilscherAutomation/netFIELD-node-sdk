/**********************************************************************
 * Copyright (c) 2022 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../../client');
var validate = require('../../../utils/validate');
var checkers = require('../../../utils/checkers');

/**
 * Apply manifest to onboarded device
 * @param {number} organisationId
 * @param {string} manifestId
 * @param {string} deviceId
 * @param {{ *   
 *   useRemoteControl: boolean
 * }} params optional
 * @param {function} callback optional
 */
module.exports = function (organisationId, manifestId, deviceId, params, callback) {
    if (checkers.isFunction(params)) {
        callback = params;
        params = null;
    }
    try {
        validate.validateNumber(organisationId);
        validate.validateString(manifestId);
        validate.validateString(deviceId);
        validate.validateObject(params || {});
        var path = '/organisations/' + organisationId + '/deployment-manifests/' + manifestId + '/apply/' + deviceId;
        return client.put('auth', path, params || {}, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}
