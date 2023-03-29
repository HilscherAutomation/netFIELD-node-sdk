/**********************************************************************
 * Copyright (c) 2022 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../../../client');
var validate = require('../../../../utils/validate');

/**
 * Create a manifest route
 * @param {integer} organisationId
 * @param {string} manifestId
 * @param {{name: string, source: string, condition: string, target: string}} params
 * @param {function} callback optional
 */
module.exports = function (organisationId, manifestId, params, callback) {
    try {
        validate.validateNumber(organisationId);
        validate.validateString(manifestId);
        validate.validateObject(params);        
        var path = `/organisations/${organisationId}/deployment-manifests/${manifestId}/routes`;
        return client.post('auth', path, params, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}
