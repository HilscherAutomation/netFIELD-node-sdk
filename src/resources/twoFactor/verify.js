/**********************************************************************
 * Copyright (c) 2022 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../client');
var validate = require('../../utils/validate');
var checkers = require('../../utils/checkers');

/**
 * Verify two-factor authentication code and generate authorization and refresh token
 * @param {number} twoFactorMethodId
 * @param {string} twoFactorCode
 * @param {string} tokenType (optional)
 * @param {function} callback optional
 */
module.exports = function (twoFactorMethodId, twoFactorCode, tokenType, callback) {
    try {
        validate.validateNumber(twoFactorMethodId);
        validate.validateString(twoFactorCode);
        var path = '/auth/two-factor/methods/' + twoFactorMethodId;
        var params = {};

        if (checkers.isFunction(tokenType)) {
            callback = tokenType;
            tokenType = null;
        }
        
        if (tokenType !== undefined && tokenType != null) {
            params.tokenType = tokenType;
            validate.validateString(tokenType);
        }

        params.code = twoFactorCode;
        return client.post('auth', path, params, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}