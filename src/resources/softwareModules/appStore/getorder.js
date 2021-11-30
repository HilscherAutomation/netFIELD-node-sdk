/**********************************************************************
 * Copyright (c) 2021 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../../client');
var validate = require('../../../utils/validate');

/**
 * Get single order by orderId
 * @param {number} orderId
 * @param {function} callback optional
 */
module.exports = function (orderId, callback) {
  try {
    validate.validateNumber(orderId);
    var path = `app-store/containers/orders/${orderId}`;
    return client.get('auth', path, callback);
  } catch (e) {
    if (callback) {
      return callback(e, null);
    }
    return Promise.reject(e);
  }
}