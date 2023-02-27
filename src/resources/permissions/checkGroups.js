/**********************************************************************
 * Copyright (c) 2022 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../client');
var validate = require('../../utils/validate');

/**
 * Check what permissions a user is allowed to use with given groups
 * @param {{groupIds: Array<number>, resources: Array<string>}} params
 * @param {function} callback optional
 */
module.exports = function (params, callback) {
    try {
        const {groupIds} = params;
        validate.validateArray(groupIds);
        for (let i = 0; i < groupIds.length; i += 1) {
            validate.validateNumber(groupIds[i]);
        }
        validate.validateObject(params);
        var path =  '/permissions/groups';
        return client.post('auth', path, params, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}