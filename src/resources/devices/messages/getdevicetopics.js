/**********************************************************************
 * Copyright (c) 2022 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var querystring = require('query-string');
var client = require('../../../client');
var checkers = require('../../../utils/checkers');
var validate = require('../../../utils/validate');

/**
 * Get device topics by deviceId
 * @param {string} deviceId
 * @param {function} callback optional
 */
module.exports = function (deviceId, from, to, callback) {
    try {
        const query = {};
        validate.validateDate(from);
        query.from = from;
        validate.validateDate(to);
        query.to = to;
        validate.validateString(deviceId);
        var path = `/devices/${deviceId}/topics?${querystring.stringify(query)}`;
        return client.get('auth', path, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}