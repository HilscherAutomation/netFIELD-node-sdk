/**********************************************************************
 * Copyright (c) 2022 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
 **********************************************************************/
'use strict';

var client = require('../../client');
var validate = require('../../utils/validate');

/**
 * Mark announcement as read
 * @param {string} announcementId
 * @param {function} callback optional
 */
module.exports = function (announcementId, callback) {
    try {       
        validate.validateString(announcementId);
        const path = '/announcements/' + announcementId;
        return client.put('auth', path, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}