/**********************************************************************
 * Copyright (c) 2021 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

const client = require('../../client');
const validate = require('../../utils/validate');

/**
 * Share container with other organisations
 * @param {string} containerId
 * @param {Array<number>} organisationIds
 * @param {function} callback optional
 */
module.exports = function (containerId, organisationIds, callback) {
    try {
        if (!organisationIds || !Array.isArray(organisationIds)) {
            throw new Error("organisationIds must be an array of string");
        }
        for (const organisation of organisationIds) {
            validate.validateNumber(organisation);
        }
        const params = {
          organisationIds: organisationIds,
        };
        const path =  '/containers/' + containerId + '/share';
        return client.put('auth', path, params, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}