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
 * Get devices by organisation id
 * @param {number} organisationId
 * @param {number} page
 * @param {number} limit
 * @param {string} sortBy
 * @param {string} sortOrder asc, desc
 * @param {string} deviceType optional
 * @param {Array<string>} firmwareVersion optional
 * @param {Array<string>} statusColor optional
 * @param {Array<string>} nestedStatus optional
 * @param {function} callback optional
 */
module.exports = function (organisationId, page, limit, sortBy, sortOrder, deviceType, firmwareVersion, statusColor, nestedStatus, callback) {
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
    if (checkers.isFunction(deviceType)) {
        callback = deviceType;
        deviceType = null;
    }
    if (checkers.isFunction(firmwareVersion)) {
        callback = firmwareVersion;
        firmwareVersion = null;
    }
    if (checkers.isFunction(statusColor)) {
        callback = statusColor;
        statusColor = null;
    }
    if (checkers.isFunction(nestedStatus)) {
        callback = nestedStatus;
        nestedStatus = null;
    }
    try {
        const query = {};
        if (page !== undefined && page !== null) {
            query.page = page;
            validate.validateNumber(page);
        }
        if (limit !== undefined && limit !== null) {
            query.limit = limit;
            validate.validateNumber(limit);
        }
        if (sortBy) {
            query.sortBy = sortBy;
            validate.validateString(sortBy);
        }
        if (sortOrder) {
            query.sortOrder = sortOrder;
            validate.validateString(sortOrder);
        }
        if (deviceType) {
            query.deviceType = deviceType;
            validate.validateString(deviceType)
        }
        if (firmwareVersion !== undefined && firmwareVersion != null) {
            if (Array.isArray(firmwareVersion)) {
              validate.validateArray(firmwareVersion);
              for (let i = 0; i < firmwareVersion.length; i += 1) {
                validate.validateString(firmwareVersion[i]);
              }
            } else {
              validate.validateString(firmwareVersion);
            }
            query.firmwareVersion = firmwareVersion;
        }
        if (statusColor !== undefined && statusColor != null) {
            if (Array.isArray(statusColor)) {
              validate.validateArray(statusColor);
              for (let i = 0; i < statusColor.length; i += 1) {
                validate.validateString(statusColor[i]);
              }
            } else {
              validate.validateString(statusColor);
            }
            query.statusColor = statusColor;
        }
        if (nestedStatus !== undefined && nestedStatus != null) {
            if (Array.isArray(nestedStatus)) {
                validate.validateArray(nestedStatus);
                for (let i = 0; i < nestedStatus.length; i += 1) {
                    validate.validateString(nestedStatus[i]);
                }
            } else {
                validate.validateString(nestedStatus);
            }
            query.nestedStatus = nestedStatus;
        }
        validate.validateNumber(organisationId);
        query.organisationId = organisationId;
        var path = '/devices?' + querystring.stringify(query);
        return client.get('auth', path, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}