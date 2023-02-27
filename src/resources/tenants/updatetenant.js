/**********************************************************************
 * Copyright (c) 2022 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../client');
var validate = require('../../utils/validate');

/**
 * Update tenant by tenantId
 * @param {number} tenantId
 * @param {status: string,
 * childOrganisationsLimit: number,
 * usersLimit: number,
 * devicesLimit: number,
 * keysLimit: number, 
 * keysRequestMonthlyLimit: number,
 * dataStorageLimit: number, 
 * wsConnectionLimit: number} params
 * @param {function} callback optional
 */
module.exports = function (tenantId, params, callback) {
    try {
        validate.validateNumber(tenantId);
        validate.validateObject(params);
        var path = '/tenants/organisations/' + tenantId;
        return client.put('auth', path, params, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}