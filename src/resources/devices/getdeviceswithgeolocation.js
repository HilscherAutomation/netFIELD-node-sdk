/**********************************************************************
 * Copyright (c) 2022 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var querystring = require('query-string');
var client = require('../../client');
var validate = require('../../utils/validate');
var checkers = require('../../utils/checkers');


/**
 * Get devices with geolocation by organisation id
 * @param {number} organisationId
 * @param {string} deviceType
 * @param {string} sortBy
 * @param {string} sortOrder asc, desc
 * @param {function} callback optional
 */
module.exports = function (organisationId, deviceType, sortBy, sortOrder, callback) {
    if (checkers.isFunction(deviceType)) {
        callback = deviceType;
        deviceType = null;
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
        if (deviceType) {
            query.deviceType = deviceType;
            validate.validateString(deviceType)
        }
        if (sortBy) {
            query.sortBy = sortBy;
            validate.validateString(sortBy);
        }
        if (sortOrder) {
            query.sortOrder = sortOrder;
            validate.validateString(sortOrder);
        }
        validate.validateNumber(organisationId);
        query.organisationId = organisationId;
        var path = '/devices/geolocation?' + querystring.stringify(query);
        return client.get('auth', path, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}