/**********************************************************************
 * Copyright (c) 2019 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../client');
var validate = require('../../utils/validate');

/**
 * Create a EdgeOS
 * @param {object} formData
 * @param {function} callback optional
 */
module.exports = function (formData, callback) {
    try {
        validate.validateObject(formData);
        var path = '/edgeos';
        return client.sendForm('auth', path, formData, 'POST', callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}