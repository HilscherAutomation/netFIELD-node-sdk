/**********************************************************************
 * Copyright (c) 2022 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
 **********************************************************************/
"use strict";

var client = require("../../client");
var querystring = require("query-string");
var validate = require("../../utils/validate");
var checkers = require('../../utils/checkers');

/**
 * OffBoard Confirm Device
 * @param {{equipmentId: string, offboardConfirmationCode: string}} params
 * @param {string} language optional
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
        var path = '/devices/offboard/confirm?' + querystring.stringify(query);
        return client.put('public', path, params, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}