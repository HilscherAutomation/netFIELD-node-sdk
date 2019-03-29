/**********************************************************************
 * Copyright (c) 2019 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../client');
var validate = require('../../utils/validate');

/**
 * OffBoard Device
 * @param {string} key jwtkey
 * @param {object} params
 * @param {function} callback optional
 */
module.exports = function (serialNumber, callback) {
    try {
        validate.validateString(serialNumber);
        var path = '/devices/offboard';
        return client.put('key', path, {serialNumber: serialNumber}, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}