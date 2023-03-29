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
 * Get Devices/Containers Group by id and depth
 * @param {number} groupId
 * @param {number} depth
 * @param {function} callback optional
 */
module.exports = function (groupId, depth, callback) {
    if(checkers.isFunction(depth)){
        callback = depth;
        depth = 1;
    }
    try {
        if (!depth) { depth = 1; }
        validate.validateNumber(groupId);
        validate.validateNumber(depth);
        var path = '/groups/' + groupId + '?' + querystring.stringify({ depth: depth });
        return client.get('auth', path, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
};
