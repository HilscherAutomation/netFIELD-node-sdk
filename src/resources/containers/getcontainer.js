/**********************************************************************
 * Copyright (c) 2022 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
 **********************************************************************/
'use strict';

var client = require('../../client');
var validate = require('../../utils/validate');

/**
 * Get container from app store
 * @param {string} containerId
 * @param {function} callback optional
 */
module.exports = function(containerId, callback) {
    try {
        validate.validateString(containerId);
        var path = '/containers/' + containerId;
        return client.get('auth', path, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}