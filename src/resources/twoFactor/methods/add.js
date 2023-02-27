/**********************************************************************
 * Copyright (c) 2022 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../../client');
var validate = require('../../../utils/validate');

/**
 * Add two-factor authentication method
 * @param {string} twoFactorMethodType 
 * @param {function} callback optional
 */
module.exports = function (twoFactorMethodType, callback) {
    try {
        validate.validateString(twoFactorMethodType);
        var path = '/auth/two-factor/methods';
        return client.post('auth', path, { type: twoFactorMethodType }, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}