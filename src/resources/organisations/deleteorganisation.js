/**********************************************************************
 * Copyright (c) 2019 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../client');
var validate = require('../../utils/validate');

/**
 * Delete organisation by Id
 * @param {number} organisationId
 * @param {function} callback optional
 */
module.exports = function (organisationId, callback) {
    try {
        validate.validateNumber(organisationId);
        var path = '/organisations/' + organisationId;
        return client.delete('auth', path, {}, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}