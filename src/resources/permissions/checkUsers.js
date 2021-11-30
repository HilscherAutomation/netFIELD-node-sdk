/**********************************************************************
 * Copyright (c) 2021 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../client');
var validate = require('../../utils/validate');

/**
 * Check what permissions a user is allowed to use with given users
 * @param {Array<number>} userIds
 * @param {function} callback optional
 */
module.exports = function (userIds, callback) {
    try {
        if (!userIds || !Array.isArray(userIds)) {
            throw new Error("userIds must be an array of number");
        }
        for (let i = 0; i < userIds.length; i += 1) {
            validate.validateNumber(userIds[i]);
        }
        const params = {
            userIds: userIds,
        };
        var path =  '/permissions/users';
        return client.post('auth', path, params, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}