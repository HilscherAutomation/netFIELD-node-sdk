/**********************************************************************
 * Copyright (c) 2019 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../client');
var validate = require('../../utils/validate');

/**
 * Check what permissions a user is allowed to use with given keyIds
 * @param {Array<String>} keyIds
 * @param {function} callback optional
 */
module.exports = function (keyIds, callback) {
    try {
        if (!keyIds || !Array.isArray(keyIds)) {
            throw new Error("Keys must be an array");
        }
        for (let i = 0; i < keyIds.length; i += 1) {
            validate.validateString(keyIds[i]);
        }
        const params = {
            keyIds: keyIds
        };

        var path = '/permissions/keys';
        return client.post('auth', path, params, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}
