/**********************************************************************
 * Copyright (c) 2021 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
"use strict";

var querystring = require("querystring");
var client = require("../../client");
var validate = require("../../utils/validate");
var checkers = require("../../utils/checkers");

/**
 * Get a tenant by tenant Id
 * @param {number} tenantId
 * @param {function} callback optional
 */
module.exports = function(tenantId, callback) {
    try {
        validate.validateNumber(tenantId);
        var path = '/tenants/organisations/' + tenantId;
        return client.get('auth', path, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
};
