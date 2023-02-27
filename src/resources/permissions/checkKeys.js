/**********************************************************************
 * Copyright (c) 2022 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../client');
var validate = require('../../utils/validate');

/**
 * Check what permissions a user is allowed to use with given keyIds
 * @param {{keyIds: Array<String>, resources: Array<string>}} params
 * @param {function} callback optional
 */
module.exports = function (params, callback) {
    try {
        const {keyIds} = params;
        validate.validateArray(keyIds);
        for (let i = 0; i < keyIds.length; i += 1) {
            validate.validateString(keyIds[i]);
        }
        validate.validateObject(params);
        var path = '/permissions/keys';
        return client.post('auth', path, params, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}
