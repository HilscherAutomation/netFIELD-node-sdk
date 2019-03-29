/**********************************************************************
 * Copyright (c) 2019 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../client');
var validate = require('../../utils/validate');

/**
 * Create a module for the appstore
 * @param {object} params
 * @param {function} callback optional
 */
module.exports = function (params, callback) {
    try {
        validate.validateFormData(params);
        var path = '/modules';
        return client.sendForm('auth', path, params, 'POST', callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}