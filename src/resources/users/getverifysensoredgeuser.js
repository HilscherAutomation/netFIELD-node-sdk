/**********************************************************************
 * Copyright (c) 2022 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
 **********************************************************************/
'use strict';

var client = require('../../client');
var validate = require('../../utils/validate');
var querystring = require('query-string');
var checkers = require('../../utils/checkers');

/**
 * Resend tempUser verification code to email
 * @param {string} email
 * @param {string} language (optional)
 * @param {function} callback optional
 */
module.exports = function(email, language, callback) {
    if (checkers.isFunction(language)) {
        callback = language;
        language = null;
    }
    try {
        const query = {};
        if (language) {
            query.language = language;
            validate.validateString(language);
        }
        if (email) {
            query.email = email;
            validate.validateString(email);
        }
        var path = '/users/sensoredge/verify/resend?' + querystring.stringify(query);
        return client.get('public', path, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}