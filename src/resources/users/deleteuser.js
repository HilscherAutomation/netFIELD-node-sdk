/**********************************************************************
 * Copyright (c) 2021 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../client');
var validate = require('../../utils/validate');

/**
 * Delete user by userId
 * @param {number} userId
 * @param {function} callback optional
 */
module.exports = function (userId, callback) {
    try {
        validate.validateNumber(userId);
        var path = '/users/' + userId;
        return client.delete(false, path, {}, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}