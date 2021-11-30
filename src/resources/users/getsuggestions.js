/**********************************************************************
 * Copyright (c) 2021 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../client');
var validate = require('../../utils/validate');
var querystring = require('querystring');

/**
 * Get a list of suggestions for a registered user, identified by their email
 * @param {object} params params
 * @param {function} callback optional
 */
module.exports = function (params, callback) {
    try {
        let { organisationId, search, ...notValid } = params;
        let query = {};
        try {
            validate.validateString(search);
        } catch (err) {
            throw new Error("Parameter 'search' must be a string: " + err);
        }

        query.search = search;

        if (organisationId) {
            query.organisationId = organisationId
        }

        if (Object.keys(notValid).length > 0) {
            throw new Error(`[Edge SDK](Users Suggest) invalid parameter/s: ${Object.keys(notValid).toString()}`);
        }

        var path = `/users/suggest?${querystring.stringify(query)}`;
        return client.get(false, path, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}