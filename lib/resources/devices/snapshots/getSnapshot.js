/**********************************************************************
 * Copyright (c) 2019 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../../client');
var validate = require('../../../utils/validate');

/**
 * Get a snapshot by snapshotId and deviceId
 * @param {string} deviceId
 * @param {string} snapshotId
 * @param {function} callback optional
 */
module.exports = function (deviceId, snapshotId, callback) {
    try {
        validate.validateString(snapshotId);
        validate.validateString(deviceId);
        var path = '/devices/' + deviceId + '/snapshots/' + snapshotId;
        return client.get('auth', path, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}