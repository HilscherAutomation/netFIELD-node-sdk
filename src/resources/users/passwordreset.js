/**********************************************************************
 * Copyright (c) 2019 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var querystring = require('querystring');
var client = require('../../client');
var validate = require('../../utils/validate');

/**
 * get reset password token
 * @param {string} email
 * @param {function} callback optional
 */
module.exports = function (email, callback) {
    try {
        validate.validateString(email);
        var path = '/users/password/reset?' + querystring.stringify({ email: email });
        return client.get('public', path, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}