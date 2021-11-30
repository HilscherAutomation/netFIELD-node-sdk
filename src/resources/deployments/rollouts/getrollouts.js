/**********************************************************************
 * Copyright (c) 2021 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var querystring = require('querystring');
var client = require('../../../client');
var validate = require('../../../utils/validate');
var checkers = require('../../../utils/checkers');


/**
 * Get a list of all rollouts by organisation id
 * @param {number} organisationId
 * @param {number} page
 * @param {number} limit
 * @param {string} sortBy
 * @param {string} sortOrder asc, desc
 * @param {string} jobId
 * @param {string} status
 * @param {function} callback optional
 */
module.exports = function (organisationId, page, limit, sortBy, sortOrder, jobId, status, callback) {
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
    if (checkers.isFunction(jobId)) {
        callback = jobId;
        jobId = null;
    }
    if (checkers.isFunction(status)) {
        callback = status;
        status = null;
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
        if (jobId) {
            query.jobId = jobId;
            validate.validateString(jobId);
        }
        if (status) {
            query.status = status;
            validate.validateString(status);
        }
        validate.validateNumber(organisationId);
        query.organisationId = organisationId;
        var path = '/deployments/rollouts?' + querystring.stringify(query);
        return client.get('auth', path, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}