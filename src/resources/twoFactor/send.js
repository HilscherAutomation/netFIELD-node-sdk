/**********************************************************************
 * Copyright (c) 2022 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../client');

/**
 * Sends two-factor authentication code to the user email 
 * @param {function} callback optional
 */
module.exports = function (callback) {
    try {        
        var path = '/auth/two-factor/send';
        return client.get('auth', path, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}
