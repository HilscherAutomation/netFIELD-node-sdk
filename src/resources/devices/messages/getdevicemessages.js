/**********************************************************************
 * Copyright (c) 2022 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var querystring = require('query-string');
var client = require('../../../client');
var checkers = require('../../../utils/checkers');
var validate = require('../../../utils/validate');

/**
 * Get device messages by deviceId
 * @param {string} deviceId
 * @param {function} callback optional
 */
module.exports = function (deviceId, from, to, topic, nextPage, limit, callback) {
    if (checkers.isFunction(topic)) {
        callback = topic;
        topic = null;
    }
    if (checkers.isFunction(nextPage)) {
        callback = nextPage;
        nextPage = null;
    }
    if (checkers.isFunction(limit)) {
        callback = limit;
        limit = null;
    }
    try {
        const query = {};
        if (topic) {
            query.topic = topic;
            validate.validateString(topic);
        }
        if (nextPage) {
            query.nextPage = nextPage;
            validate.validateString(nextPage);
        }
        if (limit !== undefined && limit !== null) {
            query.limit = limit;
            validate.validateNumber(limit);
        }
        validate.validateDate(from);
        query.from = from;
        validate.validateDate(to);
        query.to = to;
        validate.validateString(deviceId);
        var path = `/devices/${deviceId}/messages?${querystring.stringify(query)}`;
        return client.get('auth', path, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}