/**********************************************************************
 * Copyright (c) 2021 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../client');
var validate = require('../../utils/validate');

/**
 * Update a key
 * @param {string} keyId
 * @param {object} params
 * @param {function} callback optional
 */
module.exports = function (keyId, params, callback) {
    try {
        validate.validateString(keyId);
        validate.validateObject(params);
        var path = '/keys/' + keyId;
        return client.put('auth', path, params, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}