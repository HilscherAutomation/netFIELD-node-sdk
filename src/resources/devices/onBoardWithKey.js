/**********************************************************************
 * Copyright (c) 2022 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../client');
var validate = require('../../utils/validate');

/**
 * OnBoard Device with API key
 * @param {{
 *   activationCode: string, 
 *   serialNumber: string, 
 *   firmwareVersion: string, 
 *   modelName: string, 
 *   containerJWT: string, 
 *   useManifest: boolean,
 *   useRemoteControl: boolean
 * }} params
 * @param {function} callback optional
 */
module.exports = function (params, callback) {
    try {
        validate.validateObject(params);
        var path = '/devices/onboard/sas';
        return client.post('key', path, params, callback); // used for advanced onboarding, SDK needs to be refactored because of hard-coded 'auth'
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}