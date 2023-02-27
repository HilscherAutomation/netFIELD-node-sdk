/**********************************************************************
 * Copyright (c) 2022 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
 **********************************************************************/
'use strict';

var client = require('../../client');
var validate = require('../../utils/validate');
var checkers = require('../../utils/checkers');

/**
 * update metrics query
 * @param {string} queryId
 * @param {{organisationId: number, name: string, filters: Array<object>, includeChildOrganisations: boolean, description: string}} params
 * @param {object} options optional
 * @param {function} callback optional
 */

module.exports = function(queryId, params, options, callback) {
    try {
        if (checkers.isFunction(options)) {
            callback = options;
            options = {};
        }
        validate.validateFormData(params);
        validate.validateString(queryId);
        var path = '/metrics/' + queryId;
        return client.sendForm('auth', path, params, 'PUT', options, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}