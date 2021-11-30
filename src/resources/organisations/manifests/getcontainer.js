/** ********************************************************************
 * Copyright (c) 2021 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
 **********************************************************************/
'use strict';

var client = require('../../../client');
var validate = require('../../../utils/validate');

/**
 * Get container from the Deployment manifest
 * @param {number} organisationId
 * @param {string} containerId
 * @param {function} callback optional
 */
module.exports = function (organisationId, containerId, callback) {
    try {
        validate.validateNumber(organisationId);
        validate.validateString(containerId);
        let path = `/organisations/${organisationId}/deployment-manifests/containers/${containerId}`;
        return client.get('auth', path, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
};