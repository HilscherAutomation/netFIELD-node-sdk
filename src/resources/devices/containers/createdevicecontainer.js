/**********************************************************************
 * Copyright (c) 2019 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../../client');
var validate = require('../../../utils/validate');
var checkers = require('../../../utils/checkers');

/**
 * Installs a container on a device
 * @param {string} containerId
 * @param {string} deviceId
 * @param {object} params
 * @param {object} options
 * @param {function} callback optional
 */
module.exports = function (containerId, deviceId, params, options, callback) {
    try {
        if (checkers.isFunction(options)) {
            callback = options;
            options = {};
        }
        validate.validateString(containerId);
        validate.validateString(deviceId);
        validate.validateFormData(params);
        var path = '/devices/' + deviceId + '/containers/' + containerId;
        return client.sendForm('auth', path, params, 'POST', options, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}