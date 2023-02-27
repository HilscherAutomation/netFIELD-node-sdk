/**********************************************************************
 * Copyright (c) 2022 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../../client');
var validate = require('../../../utils/validate');

/**
 * Select which two-factor authentication method to use
 * @param {number} twoFactorMethodId
 * @param {function} callback optional
 */
module.exports = function (twoFactorMethodId, callback) {
    try {
        validate.validateNumber(twoFactorMethodId);
        var path = '/auth/two-factor';
        return client.post('auth', path, { twoFactorId: twoFactorMethodId }, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}