/**********************************************************************
 * Copyright (c) 2019 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var querystring = require('querystring');
var client = require('../../client');
var validate = require('../../utils/validate');

/**
 * Get role by organisationId and roleName
 * @param {number} organisationId
 * @param {string} roleName
 * @param {function} callback optional
 */
module.exports = function (organisationId, roleName, callback) {
    try {
        validate.validateNumber(organisationId);
        validate.validateString(roleName);
        var path = '/roles/' + encodeURI(roleName) + '?' + querystring.stringify({ organisationId: organisationId });
        return client.get('auth', path, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}