/**********************************************************************
 * Copyright (c) 2019 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../../client');
var validate = require('../../../utils/validate');

/**
 * Create a manifest route
 * @param {integer} organisationId
 * @param {object} params
 * @param {function} callback optional
 */
module.exports = function (organisationId, params, callback) {
    try {
        validate.validateObject(params);
        validate.validateNumber(organisationId);
        var path = `/organisations/${organisationId}/deployment-manifests/routes`;
        return client.post('auth', path, params, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}