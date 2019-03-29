/**********************************************************************
 * Copyright (c) 2019 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../client');
var validate = require('../../utils/validate');

/**
 * Delete a module from the appstore
 * @param {string} moduleId
 * @param {function} callback optional
 */
module.exports = function (moduleId, callback) {
    try {
        validate.validateString(moduleId);
        var path = '/modules/' + moduleId;
        return client.delete('auth', path, {}, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}