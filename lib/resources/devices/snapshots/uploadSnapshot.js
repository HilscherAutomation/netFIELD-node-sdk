/**********************************************************************
 * Copyright (c) 2019 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../../client');
var validate = require('../../../utils/validate');

/**
 * Upload a snapshot
 * @param {string} deviceId
 * @param {object} formData
 * @param {function} callback optional
 */
module.exports = function (deviceId, formData, callback) {
    try {
        validate.validateString(deviceId);
        validate.validateObject(formData);
        var path = '/devices/' + deviceId + '/snapshots';
        return client.sendForm('auth', path, formData, 'POST', callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}