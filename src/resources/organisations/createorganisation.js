/**********************************************************************
 * Copyright (c) 2022 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
 **********************************************************************/
'use strict';

var client = require('../../client');
var validate = require('../../utils/validate');

/**
 * Create organisation
 * @param {number} organisationId parent organisation id
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
 * allowChildrenToInheritManifest: boolean,
 * childOrganisationsLimit: number,
 * usersLimit: number,
 * devicesLimit: number,
 * keysLimit: number,
 * keysRequestMonthlyLimit: number,
 * wsConnectionLimit: number,
 * dataStorageLimit: number,
 * inheritParentManifest: boolean,
 * persistStreamingData: boolean,
 * defaultRoles: Array<{name: string, roleName: string}>,
 * }} params
 * @param {function} callback optional
 */
module.exports = function(organisationId, params, callback) {
    try {
        validate.validateNumber(organisationId);
        validate.validateObject(params);
        var path = '/organisations/' + organisationId;
        return client.post('auth', path, params, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}