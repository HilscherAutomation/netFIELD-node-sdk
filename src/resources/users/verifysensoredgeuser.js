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
 * Verify Sensor Edge user by code send trough email.
 * @param {{email: string, code: string}} params 
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
        if (language) {
            query.language = language;
            validate.validateString(language);
        }
        validate.validateObject(params);
        var path = '/users/sensoredge/verify?' + querystring.stringify(query);
        return client.put('public', path, params, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}