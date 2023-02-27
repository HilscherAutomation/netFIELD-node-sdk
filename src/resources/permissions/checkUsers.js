/**********************************************************************
 * Copyright (c) 2022 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../client');
var validate = require('../../utils/validate');

/**
 * Check what permissions a user is allowed to use with given users
 * @param {{userIds: Array<number>, resources: Array<string>}} params
 * @param {function} callback optional
 */
module.exports = function (params, callback) {
    try {
        const {userIds} = params;
        validate.validateArray(userIds);
        for (let i = 0; i < userIds.length; i += 1) {
            validate.validateNumber(userIds[i]);
        }
        validate.validateObject(params);
        var path =  '/permissions/users';
        return client.post('auth', path, params, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}