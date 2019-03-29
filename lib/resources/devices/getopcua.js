/**********************************************************************
 * Copyright (c) 2019 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../client');
var validate = require("../../utils/validate");
var checkers = require('../../utils/checkers');
var querystring = require('querystring');

/**
 * Get opc ua
 * @param {function} deviceId optional
 * @param {function} parentNodeId optional
 * @param {function} skip optional
 * @param {function} limit optional
 * @param {function} callback optional
 */
module.exports = function (deviceId, parentNodeId, skip, limit, callback) {
    if (checkers.isFunction(parentNodeId)) {
        callback = parentNodeId;
        parentNodeId = null;
    }
    if (checkers.isFunction(skip)) {
        callback = skip;
        skip = null;
    }
    if (checkers.isFunction(limit)) {
        callback = limit;
        limit = null;
    }
    try {
        var query = {};
        var hasQueryParams = false;
        validate.validateString(deviceId);
        if (parentNodeId) {
            validate.validateString(parentNodeId);
            query.parentNodeId = parentNodeId;
            hasQueryParams = true;
        }
        if (skip !== undefined && skip !== null) {
            validate.validateNumber(skip);
            query.skip = skip;
            hasQueryParams = true;
        }
        if (limit !== undefined && limit !== null) {
            validate.validateNumber(limit);
            query.limit = limit;
            hasQueryParams = true;
        }
        var path = '/devices/' + deviceId + '/opc';
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