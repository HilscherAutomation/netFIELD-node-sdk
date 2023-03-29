/**********************************************************************
 * Copyright (c) 2022 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../../client');
var validate = require('../../../utils/validate');

/**
 * Verify (enable) two-factor authentication method
 * @param {number} twoFactorMethodId
 * @param {string} twoFactorCode
 * @param {function} callback optional
 */
module.exports = function (twoFactorMethodId, twoFactorCode, callback) {
    try {
        validate.validateNumber(twoFactorMethodId);
        validate.validateString(twoFactorCode);
        var path = '/auth/two-factor/methods/' + twoFactorMethodId;
        return client.put('auth', path, { code: twoFactorCode }, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}