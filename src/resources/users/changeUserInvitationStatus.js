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
 * Accept/decline invitation email
 * @param {{email: string, code: string, accept: boolean}} params 
 * @param {string} language optional
 * @param {function} callback optional 
 */
module.exports = function(params, language, callback) {
    if (checkers.isFunction(language)) {
        callback = language;
        language = null;
    }
    try {
        validate.validateObject(params);
        const query = {};
        if (language) {
            query.language = language;
            validate.validateString(language);
        }
        var path = '/users/invite?' + querystring.stringify(query);
        return client.put('public', path, params, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}