/**********************************************************************
 * Copyright (c) 2022 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../client');
var validate = require('../../utils/validate');

/**
 * Update an IP address blocklist
 * @param {string} blocklistId
 * @param {{ name: string,
 * description: string,
 * }} params
 * @param {function} callback optional
 */
module.exports = function (blocklistId, params, callback) {
    try {
        validate.validateString(blocklistId);
        validate.validateObject(params);
        var path = `/blocklists/${blocklistId}`;
        return client.put('auth', path, params, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}