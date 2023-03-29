/**********************************************************************
 * Copyright (c) 2022 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
 **********************************************************************/
'use strict';

var client = require('../../client');
var validate = require('../../utils/validate');

/**
 * Get request data by request id
 * @param {string} requestId
 * @param {function} callback optional
 */
module.exports = function (requestId, callback) {
    try {
        validate.validateString(requestId);
        var path = '/metrics/request-data/' + requestId;
        return client.get('auth', path, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}