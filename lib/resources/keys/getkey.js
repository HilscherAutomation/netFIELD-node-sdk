/**********************************************************************
 * Copyright (c) 2019 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../client');
var validate = require('../../utils/validate');

/**
 * Get Key by keyID
 * @param {id} id
 * @param {function} callback optional
 */

module.exports = function (id, callback) {
    try {
        validate.validateString(id);
        var path = '/keys/' + id
        return client.get('auth', path, callback)
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}