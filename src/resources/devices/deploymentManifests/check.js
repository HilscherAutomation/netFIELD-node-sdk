/**********************************************************************
 * Copyright (c) 2020 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../../client');
var validate = require('../../../utils/validate');

/**
 * Checks the actuality of sensor edge device containers
 * @param {string} deviceId
 * @param {function} callback optional
 */
module.exports = function (deviceId, callback) {
    try {
        validate.validateString(deviceId);
        var path = '/devices/' + deviceId + '/deployment-manifests/check';
        return client.get('auth', path, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}
