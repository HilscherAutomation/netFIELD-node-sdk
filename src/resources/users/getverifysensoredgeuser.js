/**********************************************************************
 * Copyright (c) 2020 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../client');
var validate = require('../../utils/validate');
var querystring = require('querystring');

/**
 * Resend tempUser verification code to email
 * @param {string} email 
 * @param {function} callback optional
 */
module.exports = function (email, callback) {
    try {
        validate.validateString(email);
        var path = '/users/sensoredge/verify/resend?' + querystring.stringify({email: email});
        return client.get('public', path, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}