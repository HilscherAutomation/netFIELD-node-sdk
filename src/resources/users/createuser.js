/**********************************************************************
 * Copyright (c) 2022 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../client');
var validate = require('../../utils/validate');
var checkers = require('../../utils/checkers');

/**
 * Create User
 * @param {{organisationId: number,
 * password: string,
 * firstName: string,
 * lastName: string,
 * email: string,
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
 * statusId: number,
 * editable: boolean,
 * deletable: boolean}} params 
 * @param {function} callback optional
 */
module.exports = function (params, options, callback) {
    try {
        if (checkers.isFunction(options)){
            callback = options;
            options = {};
        }
        validate.validateFormData(params);
        var path = '/users';
        return client.sendForm('auth', path, params, 'POST', options, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}