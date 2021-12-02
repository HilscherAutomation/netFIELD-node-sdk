/**********************************************************************
 * Copyright (c) 2021 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../client');
var validate = require('../../utils/validate');

/**
 * Add notification email to current user profile
 * @param {object} params 
 * @param {function} callback optional
 */
module.exports = function (params, callback) {
    try {
        validate.validateObject(params);
        var path = '/users/profile/notification-emails';
        return client.post('auth', path, params, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}