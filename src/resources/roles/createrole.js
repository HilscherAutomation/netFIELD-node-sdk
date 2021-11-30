/**********************************************************************
 * Copyright (c) 2021 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../client');
var querystring = require('querystring');
var validate = require('../../utils/validate');

/**
 * Create Role
 * @param {number} organisationId
 * @param {object} params
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