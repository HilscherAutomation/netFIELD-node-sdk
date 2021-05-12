/**********************************************************************
 * Copyright (c) 2019 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../client');
var validate = require('../../utils/validate');

/**
 * Check what permissions a user is allowed to use with given organisations
 * @param {Array<number>} organisationIds
 * @param {function} callback optional
 */
module.exports = function (organisationIds, callback) {
    try {
        if (!organisationIds || !Array.isArray(organisationIds)) {
            throw new Error("organisationIds must be an array of number");
        }
        for (let i = 0; i < organisationIds.length; i += 1) {
            validate.validateNumber(organisationIds[i]);
        }
        const params = {
            organisationIds: organisationIds,
        };
        var path =  '/permissions/organisations';
        return client.post('auth', path, params, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}