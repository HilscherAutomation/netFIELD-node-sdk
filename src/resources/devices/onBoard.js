/**********************************************************************
 * Copyright (c) 2019 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../client');
var validate = require('../../utils/validate');

/**
 * OnBoard Device
 * @param {object} params
 * @param {function} callback optional
 */
module.exports = function (params, callback) {
    try {
        validate.validateObject(params);
        var path = '/devices/onboard/sas';
        return client.post('key', path, params, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}