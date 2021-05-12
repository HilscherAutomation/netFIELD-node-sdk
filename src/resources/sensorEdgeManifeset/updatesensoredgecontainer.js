/**********************************************************************
 * Copyright (c) 2019 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../client');
var validate = require('../../utils/validate');
var checkers = require('../../utils/checkers');

/**
 * Update sensor edge container
 * @param {string} containerId
 * @param {object} params
 * @param {function} callback optional
 */
module.exports = function (containerId, params, options, callback) {
    try {
        if (checkers.isFunction(options)){
            callback = options;
            options = {};
        }
        validate.validateString(containerId);
        validate.validateFormData(params);
        var path = '/sensoredge/deployment-manifest/containers' + containerId;
        return client.sendForm('auth', path, params, 'PUT', options, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}