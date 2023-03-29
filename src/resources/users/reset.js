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
 * Reset password
 * @param {{email: string, password: string, code: string}} params
 * @param {string} language (optional)
 * @param {function} callback optional
 */
module.exports = function(params, language, callback) {
    if (checkers.isFunction(language)) {
        callback = language;
        language = null;
    }
    try {
        const query = {};
        validate.validateObject(params);
        if (language) {
            query.language = language;
            validate.validateString(language);
        }
        var path = '/users/password?' + querystring.stringify(query);
        return client.put('public', path, params, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}