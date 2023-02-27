/**********************************************************************
 * Copyright (c) 2022 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../../client');
var validate = require('../../../utils/validate');

/** 
 * Delete deployment rollout
 * @param {string} rolloutId
 * @param {function} callback optional
 */
module.exports = function (rolloutId, callback) {
  try {   
    validate.validateString(rolloutId);
    var path = '/deployments/rollouts/' + rolloutId;
    return client.delete('auth', path, {}, callback);
  } catch (e) {
    if (callback) {
      return callback(e, null);
    }
    return Promise.reject(e);
  }
}