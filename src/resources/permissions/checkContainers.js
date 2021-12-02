/**********************************************************************
 * Copyright (c) 2021 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../client');
var validate = require('../../utils/validate');

/**
 * Check what permissions a user is allowed to use with given containers
 * @param {Array<String>} containerIds
 * @param {function} callback optional
 */
module.exports = function (containerIds, callback) {
    try {
        if (!containerIds || !Array.isArray(containerIds)) {
            throw new Error("containerIds must be an array of string");
        }
        for (let i = 0; i < containerIds.length; i += 1) {
            validate.validateString(containerIds[i]);
        }
        const params = {
            containerIds: containerIds,
        };
        var path =  '/permissions/containers';
        return client.post('auth', path, params, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}