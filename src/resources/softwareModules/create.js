/**********************************************************************
 * Copyright (c) 2021 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../client');
var validate = require('../../utils/validate');

/**
 * Create software module(s)
 * @param {Array<object>} params
 * @param {function} callback optional
 */
module.exports = function (params, callback) {
  try {
    validate.validateArray(params)
    for (const p of params) {
      validate.validateObject(p);
    }
    var path = '/rest/v1/softwaremodules';
    return client.post('auth', path, params, callback);
  } catch (e) {
    if (callback) {
      return callback(e, null);
    }
    return Promise.reject(e);
  }
}