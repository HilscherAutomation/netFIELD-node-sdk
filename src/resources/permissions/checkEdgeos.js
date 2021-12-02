/**********************************************************************
 * Copyright (c) 2021 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../client');
var validate = require('../../utils/validate');

/**
 * Check what permissions a user is allowed to use with given EdgeOS
 * @param {Array<String>} edgeosIds
 * @param {function} callback optional
 */
module.exports = function (edgeosIds, callback) {
    try {
        if (!edgeosIds || !Array.isArray(edgeosIds)) {
            throw new Error("edgeosIds must be an array of string");
        }
        for (let i = 0; i < edgeosIds.length; i += 1) {
            validate.validateString(edgeosIds[i]);
        }
        const params = {
            edgeosIds: edgeosIds,
        };
        var path =  '/permissions/edgeos';
        return client.post('auth', path, params, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}