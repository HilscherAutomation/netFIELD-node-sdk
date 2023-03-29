/**********************************************************************
 * Copyright (c) 2022 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../client');
var validate = require('../../utils/validate');
var checkers = require('../../utils/checkers');

/**
 * Update a EdgeOS
 * @param {string} edgeosId
 * @param {{version: string, name: string, platform: string, type: string, notes: string, links: Array<object>}} formData
 * @param {function} callback optional
 */
module.exports = function (edgeosId, formData, options, callback) {
    try {
        if (checkers.isFunction(options)){
            callback = options;
            options = {};
        }
        validate.validateString(edgeosId);
        validate.validateObject(formData);
        var path = '/edgeos/'+ edgeosId;
        return client.sendForm('auth', path, formData, 'PUT', options, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}