/**********************************************************************
 * Copyright (c) 2019 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../client');
var validate = require('../../utils/validate');

/**
 * Update webhook by webhookId
 * @param {string} webhookId
 * @param {object} params
 * @param {function} callback optional
 */
module.exports = function(webhookId, params, callback){
    try {
        validate.validateString(webhookId);
        validate.validateObject(params);
        var path = '/webhooks/' + webhookId;
        return client.put('auth', path, params, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}