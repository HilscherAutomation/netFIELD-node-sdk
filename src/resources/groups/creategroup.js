/**********************************************************************
 * Copyright (c) 2022 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../client');
var validate = require('../../utils/validate');

/**
 * Create Devices/Containers Group
 * @param {number} parentGroupId
 * @param {{name: string, groupType: string}} params
 * @param {function} callback optional
 */
module.exports = function (parentGroupId, params, callback) {
    try {
        validate.validateNumber(parentGroupId);
        validate.validateObject(params);
        var path = '/groups/' + parentGroupId;
        return client.post('auth', path, params, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
};

