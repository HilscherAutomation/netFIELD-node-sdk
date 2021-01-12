/**********************************************************************
 * Copyright (c) 2019 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

const client = require('../../client');
const validate = require('../../utils/validate');

/**
 * Unshare container from organisation
 * @param {string} containerId
 * @param {number} organisationId
 * @param {function} callback optional
 */
module.exports = function (containerId, organisationId, callback) {
    try {
        validate.validateString(containerId);
        validate.validateNumber(organisationId);
        const path = '/containers/' + containerId + '/share/' + organisationId ;
        return client.delete('auth', path, {}, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}