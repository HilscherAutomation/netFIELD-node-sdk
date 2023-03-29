/**********************************************************************
 * Copyright (c) 2022 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
 **********************************************************************/
'use strict';

var client = require('../../client');
var validate = require('../../utils/validate');
var checkers = require('../../utils/checkers');

/**
 * Create a container for the app store
 * @param {{organisationId: string,
 * displayName : string,
 * containerName : string,
 * containerAccess: string,
 * image: file,
 * icon: string,
 * type: string,
 * restartPolicy: string,
 * desiredStatus: string,
 * registryType: string,
 * credentials: object,
 * category: string,
 * settingsPageId: string,
 * shortDescription: string,
 * description: string,
 * links: Array,
 * versions: Array}} params
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
        var path = '/containers';
        return client.sendForm('auth', path, params, 'POST', options, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}