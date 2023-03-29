/** ********************************************************************
 * Copyright (c) 2022 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
 **********************************************************************/
'use strict';

var client = require('../../../../client');
var validate = require('../../../../utils/validate');

/**
 * Update route from the manifest
 * @param {number} organisationId
 * @param {string} manifestId
 * @param {string} routeId
 * @param {{name: string, source: string, condition: string, target: string}} params
 * @param {function} callback optional
 */
module.exports = function (organisationId, manifestId, routeId, params, callback) {
    try {
        validate.validateNumber(organisationId);
        validate.validateString(manifestId);
        validate.validateString(routeId);
        let path = `/organisations/${organisationId}/deployment-manifests/${manifestId}/routes/${routeId}`;
        return client.put('auth', path, params, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
};
