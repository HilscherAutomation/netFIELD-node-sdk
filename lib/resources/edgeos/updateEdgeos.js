/**********************************************************************
 * Copyright (c) 2019 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../client');
var validate = require('../../utils/validate');

/**
 * Update a EdgeOS
 * @param {string} edgeosId
 * @param {object} formData
 * @param {function} callback optional
 */
module.exports = function (edgeosId, formData, callback) {
    try {
        validate.validateString(edgeosId);
        validate.validateObject(formData);
        var path = '/edgeos/'+ edgeosId;
        return client.sendForm('auth', path, formData, 'PUT', callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}