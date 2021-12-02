/**********************************************************************
 * Copyright (c) 2021 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../../client');
var validate = require('../../../utils/validate');

/** 
 * Rollback deployment job by rolloutId
 * @param {string} rolloutId 
 * @param {function} callback optional
 */
module.exports = function (rolloutId, callback) {
  try {
    validate.validateString(rolloutId);
    var path = `/deployments/rollouts/${rolloutId}/rollback`;
    return client.put('auth', path, {}, callback);
  } catch (e) {
    if (callback) {
      return callback(e, null);
    }
    return Promise.reject(e);
  }
}