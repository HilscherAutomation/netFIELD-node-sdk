/**********************************************************************
 * Copyright (c) 2022 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

const client = require('../../client');
const validate = require('../../utils/validate');

/**
 * Get container sharing
 * @param {number} sharingId
 * @param {function} callback optional
 */
module.exports = function (sharingId, callback) {
    try {
        validate.validateNumber(sharingId);
        const path = '/containers/share/' + sharingId;
        return client.get('auth', path, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}