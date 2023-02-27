/**********************************************************************
 * Copyright (c) 2022 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var querystring = require('query-string');
var client = require('../../client');
var validate = require('../../utils/validate');

/**
 * Update role by organisationId
 * @param {number} organisationId
 * @param {string} role
 * @param {{resource: Array<{resource: string, permissions: Array<string>}>}} params
 * @param {function} callback optional
 */
module.exports = function (organisationId, role, params, callback) {
    try {
        validate.validateNumber(organisationId);
        validate.validateString(role);
        validate.validateObject(params);
        var path = '/roles?' + querystring.stringify({ organisationId: organisationId, role: role });
        return client.put('auth', path, params, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}