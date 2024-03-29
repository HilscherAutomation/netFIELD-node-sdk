/**********************************************************************
 * Copyright (c) 2021 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../client');
var validate = require('../../utils/validate');

/**
 * Add a role to a user
 * @param {Number} userId
 * @param {String} roleName
 * @param {object} params
 * @param {function} callback optional
 */
module.exports = function (userId, roleName, callback) {
    try {
        validate.validateNumber(userId);
        validate.validateString(roleName);
        var path = '/users/'+ userId +'/roles/'+ encodeURIComponent(roleName);
        return client.put('auth', path, {}, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}