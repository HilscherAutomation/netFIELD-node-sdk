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
 * Resend user verification code to email
 * @param {string} email 
 * @param {string} captchaToken
 * @param {string} language (optional)
 * @param {function} callback optional
 */
module.exports = function(email, captchaToken, language, callback) {
    if (checkers.isFunction(captchaToken)) {
        callback = captchaToken;
        captchaToken = null;
    }
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
        if (captchaToken) {
            query.captchaToken = captchaToken;
            validate.validateString(captchaToken);
        }
        var path = '/users/verify?' + querystring.stringify(query);
        return client.get('public', path, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}