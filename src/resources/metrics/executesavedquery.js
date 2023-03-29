/**********************************************************************
 * Copyright (c) 2022 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
 **********************************************************************/
'use strict';

var client = require('../../client');
var validate = require('../../utils/validate');
var checkers = require('../../utils/checkers');
const querystring = require('query-string');

/**
 * Execute already saved metrics query
 * @param {number} organisationId
 * @param {string} queryId
 * @param {string} startDate
 * @param {string} endDate
 * @param {string} collection optional
 * @param {function} callback optional
 */

module.exports = function (organisationId, queryId, startDate, endDate, collection, callback) {
    try {
        if (checkers.isFunction(collection)) {
            callback = collection;
            collection = null;
        }

        validate.validateString(queryId);

        const query = {};
        validate.validateNumber(organisationId);
        query.organisationId = organisationId;

        validate.validateDate(startDate);
        query.startDate = startDate;

        validate.validateDate(endDate);
        query.endDate = endDate;

        if (collection !== undefined && collection != null) {
            validate.validateString(collection);
            query.collection = collection;
        }

        var path = '/metrics/execute/' + queryId + '?' + querystring.stringify(query);
        return client.get('auth', path, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}