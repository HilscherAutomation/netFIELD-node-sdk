/**********************************************************************
 * Copyright (c) 2019 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../client');
var validate = require('../../utils/validate');

/**
 * Remove a container from a group
 * @param {number} groupId
 * @param {string} containerId
 * @param {function} callback optional
 */

 module.exports = function (groupId, containerId, callback) {
    try {
        validate.validateNumber(groupId);
        validate.validateString(containerId);
        var path = `/groups/${groupId}/containers/${containerId}`;
        return client.delete('auth', path, {}, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
 }