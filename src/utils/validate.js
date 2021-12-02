/**********************************************************************
 * Copyright (c) 2021 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
"use strict";

var errors = require('./errors');

var validateObject = exports.validateObject = function validateObject(params) {
    if (typeof params !== 'object' || !params) {
        throw new Error(errors.mustBeObject());
    }
}

var validateArray = exports.validateArray = function validateArray(params) {
    if (!Array.isArray(params)) {
        throw new Error(errors.mustBeArray());
    }
}

var validateFormData = exports.validateFormData = function validateFormData(params) {
    if (typeof params !== 'object') {
        throw new Error(errors.mustBeFormData());
    }
}

var validateString = exports.validateString = function validateString(str) {
    if (typeof str !== 'string' || !str) {
        throw new Error(errors.mustBeString());
    }
}

var validateNumber = exports.validateNumber = function validateNumber(num) {
    if (typeof num !== 'number' || !num) {
        throw new Error(errors.mustBeNumber());
    }
}