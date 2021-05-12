/**********************************************************************
 * Copyright (c) 2019 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../client');
var validate = require('../../utils/validate');

/**
 * Update user by userId
 * @param {number} userId 
 * @param {object} params 
 * @param {function} callback optional 
 */
module.exports = function (userId, params, callback) {
    try {
        validate.validateNumber(userId);
        validate.validateObject(params);
        var path = '/users/' + userId;
        return client.put(false, path, params, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}