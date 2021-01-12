/**********************************************************************
 * Copyright (c) 2019 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../client');
var validate = require('../../utils/validate');

/**
 * Get User by userId
 * @param {number} userId 
 * @param {function} callback optional
 */
module.exports = function (userId, callback) {
    try {
        validate.validateNumber(userId);
        var path = '/users/' + userId;
        return client.get(false, path, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}