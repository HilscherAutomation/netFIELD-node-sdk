/**********************************************************************
 * Copyright (c) 2021 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

const client = require('../../client');
const querystring = require('querystring');
const validate = require('../../utils/validate');
const checkers = require('../../utils/checkers');

/**
 * Get available organisations
 * @param {number} page (optional)
 * @param {number} limit (optional)
 * @param {string} sortBy (optional)
 * @param {string} sortOrder asc, desc (optional)
 * @param {string} type tenants, organisations (optional)
 * @param {function} callback (optional)
 */
module.exports = function (page, limit, sortBy, sortOrder, type, callback) {
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
        sortBy - null;
    }
    if (checkers.isFunction(sortOrder)) {
        callback = sortOrder;
        sortOrder = null;
    }
    if (checkers.isFunction(type)) {
        callback = type;
        type = null;
    }
    try {
        const query = {};
        if (page !== undefined && page != null) {
            query.page = page;
            validate.validateNumber(page);
        }
        if (limit !== undefined && limit != null) {
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
        if (type) {
            query.type = type;
            validate.validateString(type);
        }
        const path = '/organisations?' + querystring.stringify(query);
        return client.get('auth', path, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}
