/**********************************************************************
 * Copyright (c) 2022 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../client');
var validate = require('../../utils/validate');

/**
 * Get the api key data
 * Requires only the key token for authorization to check the key resources
 * @param {function} callback optional
 */

module.exports = function (callback) {
    try {
        var path = '/keys/permissions';
        return client.get('auth', path, callback)
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}