/** ********************************************************************
 * Copyright (c) 2019 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
 **********************************************************************/



let client = require('../../client');
let validate = require('../../utils/validate');
let querystring = require('querystring');

/**
 * Check specific resource permission
 * @param {String} resource
 * @param {function} callback optional
 */
module.exports = function (resource, callback) {
    try {
        let path;
        if (resource === undefined || resource === null) {
            path = '/permissions';
        } else {
            validate.validateString(resource);
            path = `/permissions?${querystring.stringify({ resource })}`;
        }
        return client.get('auth', path, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
};
