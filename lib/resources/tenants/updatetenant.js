/**********************************************************************
 * Copyright (c) 2019 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../client');
var validate = require('../../utils/validate');

/**
 * Update tenant by tenantId
 * @param {number} tenantId
 * @param {object} params
 * @param {function} callback optional
 */
module.exports = function (tenantId, params, callback) {
    try {
        validate.validateNumber(tenantId);
        validate.validateObject(params);
        var path = '/tenants/organisations/' + tenantId;
        return client.put('auth', path, params, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}