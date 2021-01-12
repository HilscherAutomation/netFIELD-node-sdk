/**********************************************************************
 * Copyright (c) 2019 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../client');
var validate = require('../../utils/validate');

/**
 * Check what permissions a user is allowed to use with given webhooks
 * @param {Array<String>} webhookIds
 * @param {function} callback optional
 */
module.exports = function (webhookIds, callback) {
    try {
        if (!webhookIds || !Array.isArray(webhookIds)) {
            throw new Error("webhookIds must be an array of string");
        }
        for (let i = 0; i < webhookIds.length; i += 1) {
            validate.validateString(webhookIds[i]);
        }
        const params = {
            webhookIds: webhookIds,
        };
        var path =  '/permissions/webhooks';
        return client.post('auth', path, params, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}