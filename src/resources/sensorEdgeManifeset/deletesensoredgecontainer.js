/**********************************************************************
 * Copyright (c) 2019 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../client');
var validate = require('../../utils/validate');

/**
 * Delete sensor edge container
 * @param {string} containerId
 * @param {function} callback optional
 */
module.exports = function (containerId, callback) {
    try {
        validate.validateString(containerId);
        var path = '/sensoredge/deployment-manifest/containers' + containerId;
        return client.delete('auth', path, {}, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}