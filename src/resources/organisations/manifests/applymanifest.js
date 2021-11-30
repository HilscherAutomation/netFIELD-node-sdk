/**********************************************************************
 * Copyright (c) 2021 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../../client');
var validate = require('../../../utils/validate');

/**
 * Apply manifest to onboarded device
 * @param {number} organisationId
 * @param {string} deviceId
 * @param {function} callback optional
 */
module.exports = function (organisationId, deviceId, callback) {
    try {
        validate.validateNumber(organisationId);
        validate.validateString(deviceId);
        var path = '/organisations/' + organisationId + '/deployment-manifests/' + deviceId + '/apply';
        return client.put('auth', path, {}, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}