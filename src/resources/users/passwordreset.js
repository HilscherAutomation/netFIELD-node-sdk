/**********************************************************************
 * Copyright (c) 2022 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
 **********************************************************************/
'use strict';

var querystring = require('query-string');
var client = require('../../client');
var validate = require('../../utils/validate');
var checkers = require('../../utils/checkers');

/**
 * get reset password token
 * @param {string} email
 * @param {string} captchaToken
 * @param {string} language (optional)
 * @param {function} callback optional
 */
module.exports = function(email, captchaToken, language, callback) {
    if (checkers.isFunction(language)) {
        callback = language;
        language = null;
    }
    if (checkers.isFunction(captchaToken)) {
        callback = captchaToken;
        captchaToken = null;
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

        var path = '/users/password/reset?' + querystring.stringify(query);
        return client.get('public', path, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}