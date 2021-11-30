/**********************************************************************
 * Copyright (c) 2021 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var querystring = require('querystring');
var client = require('../../client');
var validate = require('../../utils/validate');

/**
 * Update role by organisationId
 * @param {number} organisationId
 * @param {string} roleName
 * @param {object} params
 * @param {function} callback optional
 */
module.exports = function (organisationId, roleName, params, callback) {
    try {
        validate.validateNumber(organisationId);
        validate.validateString(roleName);
        validate.validateObject(params);
        var path = '/roles?' + querystring.stringify({ organisationId: organisationId, role: roleName });
        return client.put('auth', path, params, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}