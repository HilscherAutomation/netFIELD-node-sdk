/** ********************************************************************
 * Copyright (c) 2019 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
 **********************************************************************/
'use strict';

var client = require('../../../client');
var validate = require('../../../utils/validate');

/**
 * Delete route from the manifest
 * @param {number} organisationId
 * @param {string} routeId
 * @param {function} callback optional
 */
module.exports = function (organisationId, routeId, callback) {
    try {
        validate.validateNumber(organisationId);
        validate.validateString(routeId);
        let path = `/organisations/${organisationId}/deployment-manifests/routes/${routeId}`;
        return client.delete('auth', path, {}, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
};
