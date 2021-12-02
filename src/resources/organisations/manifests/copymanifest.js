/** ********************************************************************
 * Copyright (c) 2021 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
 **********************************************************************/
'use strict';

var client = require('../../../client');
var validate = require('../../../utils/validate');

/**
 * Copy parents deployment manifest on current organisation
 * @param {number} organisationId
 * @param {function} callback optional
 */
module.exports = function (organisationId, callback) {
    try {
        validate.validateNumber(organisationId);
        let path = `/organisations/${organisationId}/deployment-manifests/copy`;
        return client.put('auth', path, {}, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
};
