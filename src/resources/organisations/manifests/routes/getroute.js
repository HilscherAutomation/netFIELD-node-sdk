/** ********************************************************************
 * Copyright (c) 2022 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
 **********************************************************************/
'use strict';

var client = require('../../../../client');
var validate = require('../../../../utils/validate');

/**
 * Get route from the Deployment manifest
 * @param {number} organisationId
 * @param {string} manifestId
 * @param {string} routeId
 * @param {function} callback optional
 */
module.exports = function (organisationId, manifestId, routeId, callback) {
    try {
        validate.validateNumber(organisationId);
        validate.validateString(manifestId);
        validate.validateString(routeId);
        let path = `/organisations/${organisationId}/deployment-manifests/${manifestId}/routes/${routeId}`;
        return client.get('auth', path, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
};
