/**********************************************************************
 * Copyright (c) 2022 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
 **********************************************************************/
'use strict';

var client = require('../../client');
var validate = require('../../utils/validate');
var checkers = require('../../utils/checkers');
var querystring = require('query-string');

/**
 * Self Registrate User
 * @param {{organisationId: number,
 * password: string,
 * firstName: string,
 * lastName: string,
 * email: string,
 * jobTitle: string,
 * department: string,
 * mobilePhone: string,
 * telephone: string,
 * street: string,
 * houseNumber: string,
 * addressSupplement: string,
 * zipCode: string,
 * city: string,
 * state: string,
 * country: string,
 * captchaToken: string}} params
 * @param {string} language (optional)
 * @param {function} callback optional
 */
module.exports = function(params, language, options, callback) {
    try {
        if (checkers.isFunction(options)) {
            callback = options;
            options = {};
        }
        if (checkers.isFunction(language)) {
            callback = language;
            language = null;
        }
        const query = {};
        if (language) {
            query.language = language;
            validate.validateString(language);
        }
        validate.validateFormData(params);
        var path = '/users/register?' + querystring.stringify(query);
        return client.sendForm('public', path, params, 'POST', options, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}