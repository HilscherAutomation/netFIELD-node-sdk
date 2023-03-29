/**********************************************************************
 * Copyright (c) 2022 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
 **********************************************************************/
'use strict';

var client = require('../../client');
var validate = require('../../utils/validate');

/**
 * Send user invitation email
 * @param {emails: Array<string>, organisationId: number} params 
 * @param {function} callback optional 
 */
module.exports = function(params, callback) {
    try {
        validate.validateObject(params);
        var path = '/users/invite';
        return client.post('auth', path, params, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}