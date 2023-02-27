/**********************************************************************
 * Copyright (c) 2022 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
 **********************************************************************/
'use strict';

var client = require('../../client');
var validate = require('../../utils/validate');

/**
 * Get metrics query by queryId
 * @param {string} queryId
 * @param {function} callback optional
 */
module.exports = function(queryId, callback) {
    try {
        validate.validateString(queryId);
        var path = '/metrics/queries/' + queryId;
        return client.get('auth', path, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}