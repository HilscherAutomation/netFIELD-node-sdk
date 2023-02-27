/**********************************************************************
 * Copyright (c) 2022 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
 **********************************************************************/
'use strict';

var client = require('../../client');
var validate = require('../../utils/validate');
var checkers = require('../../utils/checkers');

/**
 * Send bug report email
 * @param {{description: string, stepsToReproduce: string, attachmentFile: File}} params
 * @param {any} options
 * @param {function} callback optional
 */
module.exports = function(params, options, callback) {
    try {
        if (checkers.isFunction(options)) {
          callback = options;
          options = {};
        }
        validate.validateFormData(params);
        var path = '/bug-reports';
        return client.sendForm('auth', path, params, 'POST', options, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}