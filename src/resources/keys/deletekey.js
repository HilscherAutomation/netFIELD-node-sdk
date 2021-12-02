/**********************************************************************
 * Copyright (c) 2021 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../client');
var validate = require('../../utils/validate');

/**
 * Delete Key
 * @param {id} organisationId
 * @param {params} params
 * @param {function} callback optional
 */

module.exports = function (id, callback) {
    try {
        validate.validateString(id);
        var path = '/keys/' + id
        return client.delete('auth', path, {}, callback)
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}