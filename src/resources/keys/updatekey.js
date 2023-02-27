/**********************************************************************
 * Copyright (c) 2022 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../client');
var validate = require('../../utils/validate');

/**
 * Update a key
 * @param {string} keyId
 * @param {{organisationId: number,
 * name: string,
 * type: string,
 * resources: Array<{resource: string, permissions: Array<string>}>}} params
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