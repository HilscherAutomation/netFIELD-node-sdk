/**********************************************************************
 * Copyright (c) 2022 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
 **********************************************************************/
'use strict';

var client = require('../../client');
var querystring = require('query-string');
var validate = require('../../utils/validate');
var checkers = require('../../utils/checkers');

/**
 * Delete notification email
 * @param {number} notificationEmailId
 * @param {string} language (optional) 
 * @param {function} callback optional
 */
module.exports = function(notificationEmailId, language, callback) {
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
        validate.validateNumber(notificationEmailId);
        var path = `/users/profile/notification-emails/${notificationEmailId}?` + querystring.stringify(query);
        return client.delete('auth', path, {}, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}