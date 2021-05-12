/**********************************************************************
 * Copyright (c) 2019 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../client');
var validate = require('../../utils/validate');
var querystring = require('querystring');

/**
 * Resend user verification code to email
 * @param {string} email 
 * @param {function} callback optional
 */
module.exports = function (email, callback) {
    try {
        validate.validateString(email);
        const query = {};
        query.email = email;
        var path = '/users/verify?' + querystring.stringify(query);
        return client.get('public', path, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}