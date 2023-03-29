/**********************************************************************
 * Copyright (c) 2022 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../client');

/**
 * Enable two-factor authentication for the current user
 * @param {function} callback optional
 */
module.exports = function (callback) {
    try {
        var path = '/auth/two-factor';
        return client.put('auth', path, { twoFactorEnabled: true }, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}