/**********************************************************************
 * Copyright (c) 2022 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../client');
var validate = require('../../utils/validate');

/**
 * Check what permissions a user is allowed to use with given webhooks
 * @param {{webhookIds: Array<String>, resources: Array<string>}} params
 * @param {function} callback optional
 */
module.exports = function (params, callback) {
    try {
        const {webhookIds} = params;
        validate.validateArray(webhookIds);
        for (let i = 0; i < webhookIds.length; i += 1) {
            validate.validateString(webhookIds[i]);
        }
        validate.validateObject(params);
        var path =  '/permissions/webhooks';
        return client.post('auth', path, params, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}