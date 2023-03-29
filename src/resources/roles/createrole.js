/**********************************************************************
 * Copyright (c) 2022 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../client');
var querystring = require('query-string');
var validate = require('../../utils/validate');

/**
 * Create Role
 * @param {number} organisationId
 * @param {{role: string, resource: Array<{resource: string, permissions: Array<string>}>}} params
 * @param {function} callback optional
 */
module.exports = function (organisationId, params, callback) {
    try {
        validate.validateNumber(organisationId);
        validate.validateObject(params);
        var path =  '/roles?' + querystring.stringify({ organisationId: organisationId });
        return client.post('auth', path, params, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}