/**********************************************************************
 * Copyright (c) 2022 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../../client');
var validate = require('../../../utils/validate');

/**
 * Create deployment filter
 * @param {{organisationId: number, name: string, description: string, filterCondition: object}} params
 * @param {function} callback optional
 */
module.exports = function (params, callback) {
  try {
    validate.validateObject(params);
    var path = '/deployments/filters';
    return client.post('auth', path, params, callback);
  } catch (e) {
    if (callback) {
      return callback(e, null);
    }
    return Promise.reject(e);
  }
}
