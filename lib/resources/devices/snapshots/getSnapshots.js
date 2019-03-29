/**********************************************************************
 * Copyright (c) 2019 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var querystring = require('querystring');
var client = require('../../../client');
var validate = require('../../../utils/validate');
var checkers = require('../../../utils/checkers');

/**
 * Get a list of available snapshots for a device
 * @param {string} deviceId
 * @param {number} page
 * @param {number} limit
 * @param {string} sortBy
 * @param {string} sortOrder
 * @param {function} callback optional
 */
module.exports = function (deviceId, page, limit, sortBy, sortOrder, callback) {
    if (checkers.isFunction(page)) {
        callback = page;
        page = null;
    }
    if (checkers.isFunction(limit)) {
        callback = limit;
        limit = null;
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
        var query = {};
        var hasQueryParams = false;
        if (page !== undefined && page !== null) {
            query.page = page;
            validate.validateNumber(page);
            hasQueryParams = true;
        }
        if (limit !== undefined && limit !== null) {
            query.limit = limit;
            validate.validateNumber(limit);
            hasQueryParams = true;
        }
        if (sortBy) {
            query.sortBy = sortBy;
            validate.validateString(sortBy);
            hasQueryParams = true;
        }
        if (sortOrder) {
            query.sortOrder = sortOrder;
            validate.validateString(sortOrder);
            hasQueryParams = true;
        }
        validate.validateString(deviceId);
        var path = '/devices/' + deviceId + '/snapshots';
        if (hasQueryParams) {
            path += '?' + querystring.stringify(query);
        }
        return client.get('auth', path, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}