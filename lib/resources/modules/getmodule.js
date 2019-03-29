/**********************************************************************
 * Copyright (c) 2019 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../client');
var validate = require('../../utils/validate');

/**
 * Get module by id
 * @param {string} moduleId
 * @param {function} callback optional
 */
module.exports = function (moduleId, callback) {
    try {
        validate.validateString(moduleId);
        var path = '/modules/' + moduleId;
        return client.get('auth', path, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}
