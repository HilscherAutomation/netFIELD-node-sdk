/**********************************************************************
 * Copyright (c) 2022 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../client');
var validate = require('../../utils/validate');

/**
 * Test webhook
 * @param {{organisationId: number,
 * url: string,
 * description: string,
 * requestType: string,
 * actionType: string,
 * headers: Array<{name: string, value: string}>,
 * queries: Array<{name: string, value: string}>,
 * payload: string}} params
 * @param {function} callback optional
 */
module.exports = function (params, callback) {
    try {
        validate.validateObject(params);
        var path = '/webhooks/test';
        return client.post('auth', path, params, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}