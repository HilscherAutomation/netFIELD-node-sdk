/**********************************************************************
 * Copyright (c) 2021 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../client');

/**
 * Get Profile
 * @param {function} callback optional
 */
module.exports = function (callback) {
    try {
        var path = '/users/profile';
        return client.get(false, path, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}