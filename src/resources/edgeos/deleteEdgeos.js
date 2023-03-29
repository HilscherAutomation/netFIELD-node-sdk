/**********************************************************************
 * Copyright (c) 2022 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../client');
var validate = require('../../utils/validate');

/**
 * Delete a EdgeOS
 * @param {string} edgeosId
 * @param {function} callback optional
 */
module.exports = function (edgeosId, callback) {
    try {
        validate.validateString(edgeosId);
        var path = '/edgeos/'+ edgeosId;
        return client.delete('auth', path, {}, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}