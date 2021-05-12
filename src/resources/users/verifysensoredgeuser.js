/**********************************************************************
 * Copyright (c) 2020 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../client');
var validate = require('../../utils/validate');

/**
 * Verify Sensor Edge user by code send trough email.
 * @param {object} params 
 * @param {function} callback optional 
 */
module.exports = function ( params, callback) {
    try {
        validate.validateObject(params);
        var path = '/users/sensoredge/verify';
        return client.put('public', path, params, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}