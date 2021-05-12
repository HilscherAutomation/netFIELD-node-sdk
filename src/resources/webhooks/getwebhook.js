/**********************************************************************
 * Copyright (c) 2019 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var querystring = require('querystring');
var client = require('../../client');
var validate = require('../../utils/validate');
var checkers = require('../../utils/checkers');

/**
 * Get webhook by webhookId
 * @param {string} webhookId
 * @param {function} callback optional
 */
module.exports = function (webhookId, callback) {
  try {
    validate.validateString(webhookId);
    var path = '/webhooks/' + webhookId;
    return client.get('auth', path, callback);
  } catch (e) {
    if (callback) {
      return callback(e, null);
    }
    return Promise.reject(e);
  }
}