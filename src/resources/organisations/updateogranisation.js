/**********************************************************************
 * Copyright (c) 2022 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
 **********************************************************************/
'use strict';

var client = require('../../client');
var validate = require('../../utils/validate');

/**
 * Update organisation by organisationId
 * @param {number} organisationId
 * @param {{name: string,
 * admin: string,
 * phoneNumber: string,
 * street: string,
 * houseNumber: string,
 * addressSupplement: string,
 * zipCode: string,
 * city: string,
 * state: string,
 * country: string,
 * notes: string,
 * companyName: string,
 * allowChildrenToInheritManifest: boolean,
 * inheritParentManifest: boolean,
 * childOrganisationsLimit: number,
 * usersLimit: number,
 * devicesLimit: number,
 * keysLimit: number,
 * keysRequestMonthlyLimit: number,
 * wsConnectionLimit: number,
 * dataStorageLimit: number,
 * persistStreamingData: boolean,
 * }} params
 * @param {function} callback optional
 */
module.exports = function(organisationId, params, callback) {
    try {
        validate.validateNumber(organisationId);
        validate.validateObject(params);
        var path = '/organisations/' + organisationId;
        return client.put('auth', path, params, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}