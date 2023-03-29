/**********************************************************************
 * Copyright (c) 2022 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../client');
var validate = require('../../utils/validate');

/**
 * Check what permissions a user is allowed to use with given organisations
 * @param {{organisationIds: Array<number>, resources: Array<string>}} params
 * @param {function} callback optional
 */
module.exports = function (params, callback) {
    try {
        const {organisationIds} = params;
        validate.validateArray(organisationIds);
        for (let i = 0; i < organisationIds.length; i += 1) {
            validate.validateNumber(organisationIds[i]);
        }
        validate.validateObject(params);
        var path =  '/permissions/organisations';
        return client.post('auth', path, params, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}