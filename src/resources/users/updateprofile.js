/**********************************************************************
 * Copyright (c) 2022 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../client');
var validate = require('../../utils/validate');
var checkers = require('../../utils/checkers');

/**
 * Update profile
 * @param {{organisationId: number,
 * password: string,
 * statusId: number,
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
 * editable: boolean,
 * deletable: boolean,
 * receiveSensorEdgeNotifications: boolean,
 * oldPassword: string}} params 
 * @param {function} callback optional 
 */
module.exports = function (params, options, callback) {
    try {
        if (checkers.isFunction(options)) {
            callback = options;
            options = {};
        }
        validate.validateFormData(params);
        var path = '/users/profile';
        return client.sendForm('auth', path, params, 'PUT', options, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}