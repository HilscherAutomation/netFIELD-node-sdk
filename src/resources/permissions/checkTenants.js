/**********************************************************************
 * Copyright (c) 2021 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../client');
var validate = require('../../utils/validate');

/**
 * Check what permissions a user is allowed to use with given tenants
 * @param {Array<number>} tenantIds
 * @param {function} callback optional
 */
module.exports = function (tenantIds, callback) {
    try {
        if (!tenantIds || !Array.isArray(tenantIds)) {
            throw new Error("tenantIds must be an array of number");
        }
        for (let i = 0; i < tenantIds.length; i += 1) {
            validate.validateNumber(tenantIds[i]);
        }
        const params = {
            tenantIds: tenantIds,
        };
        var path =  '/permissions/tenants';
        return client.post('auth', path, params, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}