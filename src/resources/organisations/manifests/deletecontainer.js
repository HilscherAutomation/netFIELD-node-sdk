/** ********************************************************************
 * Copyright (c) 2019 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
 **********************************************************************/
'use strict';

var client = require('../../../client');
var validate = require('../../../utils/validate');

/**
 * Delete container from the manifest
 * @param {number} organisationId
 * @param {string} containerId
 * @param {function} callback optional
 */
module.exports = function (organisationId, containerId, callback) {
    try {
        validate.validateNumber(organisationId);
        validate.validateString(containerId);
        let path = `/organisations/${organisationId}/deployment-manifests/containers/${containerId}`;
        return client.delete('auth', path, {}, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
};
