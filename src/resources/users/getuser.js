/**********************************************************************
 * Copyright (c) 2022 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
 **********************************************************************/
'use strict';

var querystring = require('query-string');
var client = require('../../client');
var validate = require('../../utils/validate');

/**
 * Get User by userId
 * @param {number} organisationId
 * @param {number} userId 
 * @param {function} callback optional
 */
module.exports = function(userId, organisationId, callback) {
    try {
        const query = {};
        validate.validateNumber(organisationId);
        validate.validateNumber(userId);
        query.organisationId = organisationId;
        var path = '/users/' + userId + '?' + querystring.stringify(query);
        return client.get(false, path, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}