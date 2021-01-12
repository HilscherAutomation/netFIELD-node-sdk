/**********************************************************************
 * Copyright (c) 2020 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../client');
var validate = require('../../utils/validate');

/**
 * Get dashboard by id
 * @param {string} dashboardId
 * @param {function} callback optional
 */
module.exports = function (dashboardId, callback) {
    try {
        validate.validateString(dashboardId);
        var path = '/dashboards/' + dashboardId;
        return client.get('auth', path, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}