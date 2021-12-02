/**********************************************************************
 * Copyright (c) 2021 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../client');
var validate = require('../../utils/validate');

/**
 * Update organisation by organisationId
 * @param {number} organisationId
 * @param {object} params
 * @param {function} callback optional
 */
module.exports = function (organisationId, params, callback) {
    try {
        validate.validateNumber(organisationId);
        validate.validateObject(params);
        var path = '/organisations/' + organisationId;
        return client.put('auth', path, params, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}