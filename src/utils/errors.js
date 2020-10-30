/**********************************************************************
 * Copyright (c) 2019 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
"use strict";

var messagePrefix = '[EdgeSDK]';

var mustContain = exports.mustContain = function mustContain(name, params){
    return messagePrefix + ' ' + name +' must contain ' + params + '!';
}

var mustBe = exports.mustBe = function mustBe(name, params){
    return messagePrefix + ' ' + name +' must be ' + params + '!';
}

var mustBeLoggedIn = exports.mustBeLoggedIn = function mustBeLoggedIn(){
    return messagePrefix + ' User needs to be logged in to call this resource.';
}

var mustSetConfiguration = exports.mustSetConfiguration = function mustSetConfiguration(){
    return messagePrefix + ' SDK must be configured before invoking functions.';
}

var mustBeOfType = exports.mustBeOfType = function mustBeOfType(type) {
    return messagePrefix + ' Expected parameter must be of type ' + type + ' and cannot be empty.'
}

var mustBeObject = exports.mustBeObject = function mustBeObject() {
    return mustBeOfType('Object');
}

var mustBeFormData = exports.mustBeFormData = function mustBeFormData() {
    return mustBeOfType('FormData');
}

var mustBeString = exports.mustBeString = function mustBeString() {
    return mustBeOfType('String');
}

var mustBeNumber = exports.mustBeNumber = function mustBeNumber() {
    return mustBeOfType('Number');
}