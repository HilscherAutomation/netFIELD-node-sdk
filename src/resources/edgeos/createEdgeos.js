/**********************************************************************
 * Copyright (c) 2022 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../client');
var validate = require('../../utils/validate');
var checkers = require('../../utils/checkers');

/**
 * Create a EdgeOS
 * @param {{version: string, name: string, platform: string, type: string, file: file, notes: string, links: Array<object>}} formData
 * @param {object} options
 * @param {function} callback optional
 */
module.exports = function (formData, options, callback) {
    try {
        if (checkers.isFunction(options)){
            callback = options;
            options = {};
        }
        validate.validateObject(formData);
        var path = '/edgeos';
        return client.sendForm('auth', path, formData, 'POST', options, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}
