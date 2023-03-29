/**********************************************************************
 * Copyright (c) 2022 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
 **********************************************************************/
'use strict';

var client = require('../../client');
var validate = require('../../utils/validate');
var checkers = require('../../utils/checkers');

/**
 * Execute a metrics query
 * @param {string} startDate
 * @param {string} endDate
 * @param {{collection: string,
 * organisationId: number,
 * filters: Array<object>,
 * includeChildOrganisations: boolean}} params
 * @param {object} options optional
 * @param {function} callback optional
 */

module.exports = function (startDate, endDate, params, options, callback) {
    try {
        if (checkers.isFunction(options)) {
            callback = options;
            options = {};
        }

        validate.validateDate(startDate);

        validate.validateDate(endDate);

        params.append('startDate', startDate);

        params.append('endDate', endDate);

        validate.validateFormData(params);

        var path = '/metrics/execute';
        return client.sendForm('auth', path, params, 'POST', options, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}