/**********************************************************************
 * Copyright (c) 2019 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../client');
var validate = require('../../utils/validate');
var checkers = require('../../utils/checkers');

/**
 * Create a EdgeOS
 * @param {object} formData
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
