/**********************************************************************
 * Copyright (c) 2022 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../client');
var validate = require('../../utils/validate');

/**
 * Disable two-factor authentication for the current user
 * @param {string} code verification code
 * @param {function} callback optional
 */
module.exports = function (code, callback) {
    try {
        validate.validateString(code);
        var path = '/auth/two-factor';
        return client.put('auth', path, { twoFactorEnabled: false, code }, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}