/**********************************************************************
 * Copyright (c) 2022 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../client');
var validate = require('../../utils/validate');

/**
 * Delete user invitation
 * @param {number} invitationId
 * @param {function} callback optional
 */
module.exports = function (invitationId, callback) {
    try {
        validate.validateNumber(invitationId);
        var path = `/users/invite/${invitationId}`;
        return client.delete('auth', path, {}, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}