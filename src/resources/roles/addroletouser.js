/**********************************************************************
 * Copyright (c) 2022 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
 **********************************************************************/
'use strict';

var querystring = require('query-string');
var client = require('../../client');
var validate = require('../../utils/validate');

/**
 * Add a role to a user
 * @param {Number} userId
 * @param {String} roleName
 * @param {Number} organisationId
 * @param {function} callback optional
 */
module.exports = function(userId, roleName, organisationId, callback) {
    try {
        const query = {};
        validate.validateNumber(userId);
        validate.validateNumber(organisationId);
        query.organisationId = organisationId;
        validate.validateString(roleName);
        var path = '/users/' + userId + '/roles/' + encodeURIComponent(roleName) + '?' + querystring.stringify(query);
        return client.put('auth', path, {}, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}