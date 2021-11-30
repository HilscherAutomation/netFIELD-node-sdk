/**********************************************************************
 * Copyright (c) 2021 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../client');
var validate = require('../../utils/validate');

/**
 * Delete notification email
 * @param {number} notificationEmailId
 * @param {function} callback optional
 */
module.exports = function (notificationEmailId, callback) {
    try {
        validate.validateNumber(notificationEmailId);
        var path = '/users/profile/notification-emails/' + notificationEmailId;
        return client.delete('auth', path, {}, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}