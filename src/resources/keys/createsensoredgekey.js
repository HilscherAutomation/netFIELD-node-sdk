/**********************************************************************
 * Copyright (c) 2019 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../client');
var validate = require('../../utils/validate');

/**
 * Create Key for SensorEdge tenant
 * @param {function} callback optional
 * @param {object} params
 */

module.exports = function (params, callback) {
    try {
        validate.validateObject(params);
        var path = '/keys/sensoredge';
        return client.post('auth', path, params, callback)
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}