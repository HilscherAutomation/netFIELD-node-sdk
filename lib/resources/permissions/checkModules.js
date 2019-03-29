/**********************************************************************
 * Copyright (c) 2019 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../client');
var validate = require('../../utils/validate');

/**
 * Check what permissions a user is allowed to use with given modules
 * @param {Array<String>} moduleIds
 * @param {function} callback optional
 */
module.exports = function (moduleIds, callback) {
    try {
        if (!moduleIds || !Array.isArray(moduleIds)) {
            throw new Error("moduleIds must be an array of string");
        }
        for (let i = 0; i < moduleIds.length; i += 1) {
            validate.validateString(moduleIds[i]);
        }
        const params = {
            moduleIds: moduleIds,
        };
        var path =  '/permissions/modules';
        return client.post('auth', path, params, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}