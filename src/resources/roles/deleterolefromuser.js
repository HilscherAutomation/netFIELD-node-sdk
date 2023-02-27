/**********************************************************************
 * Copyright (c) 2022 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
 **********************************************************************/
'use strict';

var querystring = require('query-string');
var client = require('../../client');
var validate = require('../../utils/validate');

/**
 * Delete a role from a user
 * @param {Number} userId
 * @param {Number} organisationId
 * @param {String} roleName
 * @param {function} callback optional
 */
module.exports = function(userId, organisationId, roleName, callback) {
    try {
        const query = {};
        validate.validateNumber(organisationId);
        validate.validateNumber(userId);
        validate.validateString(roleName);
        query.organisationId = organisationId;
        var path = '/users/' + userId + '/roles/' + encodeURIComponent(roleName) + '?' + querystring.stringify(query);
        return client.delete('auth', path, {}, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}