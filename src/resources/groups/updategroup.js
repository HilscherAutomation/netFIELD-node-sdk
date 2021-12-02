/**********************************************************************
 * Copyright (c) 2021 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../client');
var validate = require('../../utils/validate');

/**
 * Update Devices/Containers Group by organisationId
 * @param {number} groupId
 * @param {object} params
 * @param {function} callback optional
 */
module.exports = function (groupId, params, callback) {
    try {
        validate.validateNumber(groupId);
        validate.validateObject(params);
        var path = '/groups/' + groupId;
        return client.put('auth', path, params, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
};
