/**********************************************************************
 * Copyright (c) 2019 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../../client');
var validate = require('../../../utils/validate');

/**
 * Delete Snapshot by deviceId and snapshotId
 * @param {string} deviceId
 * @param {string} snapshotId
 * @param {function} callback optional
 */
module.exports = function (deviceId, snapshotId, callback) {
    try {
        validate.validateString(deviceId);
        validate.validateString(snapshotId);
        var path = '/devices/' + deviceId +  '/snapshots/' + snapshotId;
        return client.delete('auth', path, {}, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}