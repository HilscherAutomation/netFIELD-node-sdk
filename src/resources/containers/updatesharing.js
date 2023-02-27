/**********************************************************************
 * Copyright (c) 2022 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
 **********************************************************************/
'use strict';

const client = require('../../client');
const validate = require('../../utils/validate');

/**
 * Update container sharing
 * @param {number} sharingId
 * @param {{limit: number}} params
 * @param {function} callback optional
 */
module.exports = function(sharingId, params, callback) {
    try {
        validate.validateNumber(sharingId);
        validate.validateObject(params);
        const path = '/containers/share/' + sharingId;
        return client.put('auth', path, params, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}