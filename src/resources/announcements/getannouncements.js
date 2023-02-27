/**********************************************************************
 * Copyright (c) 2022 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
 **********************************************************************/
'use strict';

var client = require('../../client');
var validate = require('../../utils/validate');
var checkers = require('../../utils/checkers');

/**
 * Get current announcements
 * @param {string} type optional
 * @param {string} sortBy optional
 * @param {string} sortOrder optional
 * @param {function} callback optional
 */
module.exports = function (type, sortBy, sortOrder, callback) {
    if (checkers.isFunction(type)) {
        callback = type;
        type = null;
    }
    if (checkers.isFunction(sortBy)) {
        callback = sortBy;
        sortBy = null;
    }
    if (checkers.isFunction(sortOrder)) {
        callback = sortOrder;
        sortOrder = null;
    }

    try {
        const query = {}; 
        if (type) {
            query.type = type;
            validate.validateString(type);
        }
        if (sortBy) {
            query.sortBy = sortBy;
            validate.validateString(sortBy);
        }
        if (sortOrder) {
            query.sortOrder = sortOrder;
            validate.validateString(sortOrder);
        }
        
        const searchParams = new URLSearchParams(query);
        const path = '/announcements?' + searchParams.toString();
        return client.get('auth', path, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}