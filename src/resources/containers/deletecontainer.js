/**********************************************************************
 * Copyright (c) 2022 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../client');
var validate = require('../../utils/validate');
var checkers = require('../../utils/checkers');
var querystring = require('query-string');

/**
 * Delete a container from the appstore
 * @param {string} containerId
 * @param {boolean} deleteContainerReferences optional
 * @param {function} callback optional
 */
module.exports = function (containerId, deleteContainerReferences, callback) {
    if (checkers.isFunction(deleteContainerReferences)) {
        callback = deleteContainerReferences;
        deleteContainerReferences = null;
    }
    try {
        validate.validateString(containerId);
        var path;
        if (deleteContainerReferences) {
            path = `/containers/${containerId}?${querystring.stringify({ deleteContainerReferences: deleteContainerReferences })}`;
        } else {
        path = `/containers/${containerId}`;
        }
        return client.delete('auth', path, {}, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}