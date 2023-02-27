/**********************************************************************
 * Copyright (c) 2022 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
 **********************************************************************/
'use strict';

var client = require('../../client');
var querystring = require('query-string');
var validate = require('../../utils/validate');
var checkers = require('../../utils/checkers');

/**
 * Get containers from the app store
 * @param {number} page (optional)
 * @param {number} limit (optional)
 * @param {string} sortBy (optional)
 * @param {string} sortOrder asc, desc (optional)
 * @param {boolean} includeDisabled (optional)
 * @param {Array<string>} category (optional)
 * @param {Array<string>} organisationName (optional)
 * @param {boolean} purchased (optional)
 * @param {function} callback (optional)
 */
module.exports = function(page, limit, sortBy, sortOrder, includeDisabled, category, organisationName, purchased, callback) {
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
    if (checkers.isFunction(includeDisabled)) {
        callback = includeDisabled;
        includeDisabled = null;
    }
    if (checkers.isFunction(category)) {
        callback = category;
        category = null;
    }
    if (checkers.isFunction(organisationName)) {
        callback = organisationName;
        organisationName = null;
    }
    if (checkers.isFunction(purchased)) {
        callback = purchased;
        purchased = null;
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
        if (includeDisabled !== undefined && includeDisabled != null) {
            query.includeDisabled = includeDisabled;
        }
        if (category !== undefined && category != null) {
            if (Array.isArray(category)) {
              validate.validateArray(category);
              for (let i = 0; i < category.length; i += 1) {
                validate.validateString(category[i]);
              }
            } else {
              validate.validateString(category);
            }
            query.category = category;
        }
        if (organisationName !== undefined && organisationName != null) {
            if (Array.isArray(organisationName)) {
              validate.validateArray(organisationName);
              for (let i = 0; i < organisationName.length; i += 1) {
                validate.validateString(organisationName[i]);
              }
            } else {
              validate.validateString(organisationName);
            }
            query.organisationName = organisationName;
        }
        if (purchased !== undefined && purchased != null) {
            query.purchased = purchased;
        }
        var path = '/containers?' + querystring.stringify(query);
        return client.get('auth', path, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}