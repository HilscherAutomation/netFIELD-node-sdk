/**********************************************************************
 * Copyright (c) 2022 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../client');
var validate = require('../../utils/validate');

/**
 * Revoke user invitation
 * @param {number} invitationId
 * @param {{revoke: boolean}} params 
 * @param {function} callback optional
 */
module.exports = function (invitationId, params, callback) {
    try {
        validate.validateNumber(invitationId);
        validate.validateObject(params);
        var path = `/users/invite/${invitationId}`;
        return client.put('auth', path, params, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}