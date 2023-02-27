/**********************************************************************
 * Copyright (c) 2022 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
 **********************************************************************/
'use strict';

var client = require('../../client');
var validate = require('../../utils/validate');
var checkers = require('../../utils/checkers');

/**
 * Add a metrics query
 * @param {{organisationId: number, name: string, filters: Array<object>, includeChildOrganisations: boolean, description: string}} params
 * @param {object} options optional
 * @param {function} callback optional
 */

module.exports = function(params, options, callback) {
    try {
        if (checkers.isFunction(options)) {
            callback = options;
            options = {};
        }
        validate.validateFormData(params);
        var path = `/metrics`;
        return client.sendForm('auth', path, params, 'POST', options, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}