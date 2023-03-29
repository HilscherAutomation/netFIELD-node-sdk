/**********************************************************************
 * Copyright (c) 2022 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../client');
var validate = require('../../utils/validate');

/**
 * Delete webhook by webhookId
 * @param {string} webhookId
 * @param {function} callback optional
 */
module.exports = function (webhookId, callback) {
    try {
        validate.validateString(webhookId);
        var path = '/webhooks/' + webhookId;
        return client.delete('auth', path, {}, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}