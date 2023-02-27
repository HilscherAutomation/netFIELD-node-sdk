/**********************************************************************
 * Copyright (c) 2022 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../../client');
var validate = require('../../../utils/validate');

/**
 * Delete (disable) two-factor authentication method
 * @param {number} twoFactorMethodId
 * @param {string} code verification code
 * @param {function} callback optional
 */
module.exports = function (twoFactorMethodId, code, callback) {
    try {
        validate.validateNumber(twoFactorMethodId);
        validate.validateString(code);
        var path = '/auth/two-factor/methods/' + twoFactorMethodId;
        return client.delete('auth', path, { code }, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}