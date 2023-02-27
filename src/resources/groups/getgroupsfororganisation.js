/**********************************************************************
 * Copyright (c) 2022 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var querystring = require('querystring');
var client = require('../../client');
var validate = require('../../utils/validate');
var checkers = require('../../utils/checkers');

/**
 * Get all groups by organisationId
 * @param {number} organisationId
 * @param {number} page
 * @param {number} limit
 * @param {String} sortBy
 * @param {String} sortOrder asc, desc
 * @param {String} groupType devices, containers
 * @param {function} callback optional
 */

 module.exports = function (organisationId, page, limit, sortBy, sortOrder, groupType, callback) {
    if(checkers.isFunction(page)) {
        callback = page;
        page = null;
    }
    if(checkers.isFunction(limit)) {
        callback = limit;
        limit = null;
    }
    if(checkers.isFunction(sortBy)) {
        callback = sortBy;
        sortBy = null;
    }
    if(checkers.isFunction(sortOrder)) {
        callback = sortOrder;
        sortOrder = null;
    }
    if(checkers.isFunction(groupType)) {
        callback = groupType;
        groupType = null;
    }
    try {
        const query = {};
        if(page !== undefined && page !== null) {
            query.page = page;
            validate.validateNumber(page);
        }
        if(limit !== undefined && limit !== null) {
            query.limit = limit;
            validate.validateNumber(limit);
        }
        if(sortBy !== undefined && sortBy !== null) {
            query.sortBy = sortBy;
            validate.validateString(sortBy);
        }
        if(sortOrder !== undefined && sortOrder !== null) {
            query.sortOrder = sortOrder;
            validate.validateString(sortOrder);
        }
        if(groupType !== undefined && groupType !== null) {
            query.groupType = groupType;
            validate.validateString(groupType);
        }
        validate.validateNumber(organisationId);
        query.organisationId = organisationId;
        var path = `/groups?` + querystring.stringify(query);
        return client.get('auth', path, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
 }