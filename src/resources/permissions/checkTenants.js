/**********************************************************************
 * Copyright (c) 2022 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../client');
var validate = require('../../utils/validate');

/**
 * Check what permissions a user is allowed to use with given tenants
 * @param {{tenantIds: Array<number>, resources: Array<string>}} params
 * @param {function} callback optional
 */
module.exports = function (params, callback) {
    try {
        const {tenantIds} = params;
        validate.validateArray(tenantIds);
        for (let i = 0; i < tenantIds.length; i += 1) {
            validate.validateNumber(tenantIds[i]);
        }
        validate.validateObject(params);
        var path =  '/permissions/tenants';
        return client.post('auth', path, params, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}