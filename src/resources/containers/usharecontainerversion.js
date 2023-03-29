/**********************************************************************
 * Copyright (c) 2022 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

const client = require('../../client');
const validate = require('../../utils/validate');

/**
 * Unshare container version with organisation 
 * @param {number} sharingId
 * @param {{ version: string }} params
 * @param {function} callback optional
 */
module.exports = function (sharingId, params, callback) {
    try {
        validate.validateNumber(sharingId);
        validate.validateObject(params);
        const path = '/containers/versions/share/' + sharingId;
        return client.delete('auth', path, params, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}