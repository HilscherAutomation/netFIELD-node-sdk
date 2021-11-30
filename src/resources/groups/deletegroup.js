/**********************************************************************
 * Copyright (c) 2021 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../client');
var validate = require('../../utils/validate');

/**
 * Delete Devices/Containers Group by Id
 * @param {number} groupId
 * @param {function} callback optional
 */
module.exports = function (groupId, callback) {
    try {
        validate.validateNumber(groupId);
        var path = '/groups/' + groupId;
        return client.delete('auth', path, {}, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
};
