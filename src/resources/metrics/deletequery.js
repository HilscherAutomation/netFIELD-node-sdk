/**********************************************************************
 * Copyright (c) 2022 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
 **********************************************************************/
'use strict';

var client = require('../../client');
var validate = require('../../utils/validate');

/**
 * Delete Metrics Query by queryId
 * @param {string} queryId
 * @param {function} callback optional
 */
module.exports = function(queryId, callback) {
    try {
        validate.validateString(queryId);
        var path = '/metrics/queries/' + queryId;
        return client.delete('auth', path, {}, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}