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
 * Complete registration of Sensor Edge user
 * @param {{firstName: string,
 * lastName: string,
 * jobTitle: string,
 * department: string,
 * mobilePhone: string,
 * telephone: string,
 * street: string,
 * houseNumber: string,
 * addressSupplement: string,
 * zipCode: string,
 * city: string,
 * state: string,
 * country: string,
 * companyName: string,
 * receiveSensorEdgeNotifications: boolean,
 * }} params 
 * @param {string} language (optional)
 * @param {function} callback optional 
 */
module.exports = function(params, language, callback) {
    if (checkers.isFunction(language)) {
        callback = language;
        language = null;
    }
    try {
        validate.validateObject(params);
        const query = {};
        if (language) {
            query.language = language;
            validate.validateString(language);
        }
        var path = '/users/sensoredge/register/complete?' + querystring.stringify(query);
        return client.put(false, path, params, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}