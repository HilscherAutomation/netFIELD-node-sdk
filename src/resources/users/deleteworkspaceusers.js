/**********************************************************************
 * Copyright (c) 2022 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../client');
var validate = require('../../utils/validate');
var querystring = require('query-string');

/**
 * Remove user from workspace
 * @param {number} userId
 * @param {number} organisationId
 * @param {function} callback optional
 */
module.exports = function (userId, organisationId, callback) {
    try {
        const query = {};
        validate.validateNumber(userId);
        validate.validateNumber(organisationId);
        query.organisationId = organisationId;
        var path = `/users/${userId}/workspaces?` + querystring.stringify(query);
        return client.delete('auth', path, {}, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}