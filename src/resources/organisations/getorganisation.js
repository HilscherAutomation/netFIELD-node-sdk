/**********************************************************************
 * Copyright (c) 2021 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var querystring = require('querystring');
var client = require('../../client');
var validate = require('../../utils/validate');
var checkers = require('../../utils/checkers');

/**
 * Get organisation by organisationId and depth
 * @param {number} organisationId
 * @param {number} depth
 * @param {function} callback optional
 */
module.exports = function (organisationId, depth, callback) {
    if(checkers.isFunction(depth)){
        callback = depth;
        depth = 1;
    }
    try {
        if (!depth) { depth = 1; }
        validate.validateNumber(organisationId);
        validate.validateNumber(depth);
        var path = '/organisations/' + organisationId + '?' + querystring.stringify({ depth: depth });
        return client.get('auth', path, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}