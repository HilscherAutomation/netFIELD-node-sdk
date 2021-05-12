/**********************************************************************
 * Copyright (c) 2019 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../client');
var validate = require('../../utils/validate');

/**
 * Create organisation
 * @param {number} organisationId parent organisation id
 * @param {object} params
 * @param {function} callback optional
 */
module.exports = function (organisationId, params, callback) {
    try {
        validate.validateNumber(organisationId);
        validate.validateObject(params);
        var path = '/organisations/' + organisationId;
        return client.post('auth', path, params, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}