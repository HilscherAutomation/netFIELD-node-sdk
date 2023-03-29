/**********************************************************************
 * Copyright (c) 2022 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../client');
var validate = require('../../utils/validate');

/**
 * Destroy user session
 * @param {string} sessionId
 * @param {function} callback optional
 */
module.exports = function (sessionId, callback) {
    try {
        validate.validateString(sessionId);
        var path = `/sessions/${sessionId}`;
        return client.put('auth', path, {}, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}