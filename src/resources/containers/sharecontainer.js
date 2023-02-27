/**********************************************************************
 * Copyright (c) 2022 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
 **********************************************************************/
'use strict';

const client = require('../../client');
const validate = require('../../utils/validate');

/**
 * Share container with other organisation
 * @param {{containerId: string,
 * versionIds: string[],
 * sharingOrganisationId: number,
 * targetOrganisationId: number,
 * limit: number}} params
 * @param {function} callback optional
 */
module.exports = function(params, callback) {
    try {
        validate.validateObject(params);
        var path = '/containers/share';
        return client.post('auth', path, params, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}