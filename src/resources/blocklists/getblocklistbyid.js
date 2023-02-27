/**********************************************************************
 * Copyright (c) 2022 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../client');
var validate = require('../../utils/validate');

/**
 * Get an IP address blocklist by id
 * @param {string} blocklistId
 * @param {function} callback optional
 */
module.exports = function (blocklistId, callback) {
    try {
        validate.validateString(blocklistId);
        var path = `/blocklists/${blocklistId}`;
        return client.get('auth', path, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}