/**********************************************************************
 * Copyright (c) 2019 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../client');
var validate = require('../../utils/validate');

/**
 * Check what permissions a user is allowed to use with given groups
 * @param {Array<number>} groupIds
 * @param {function} callback optional
 */
module.exports = function (groupIds, callback) {
    try {
        if (!groupIds || !Array.isArray(groupIds)) {
            throw new Error("groupIds must be an array of number");
        }
        for (let i = 0; i < groupIds.length; i += 1) {
            validate.validateNumber(groupIds[i]);
        }
        const params = {
          groupIds: groupIds,
        };
        var path =  '/permissions/groups';
        return client.post('auth', path, params, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}