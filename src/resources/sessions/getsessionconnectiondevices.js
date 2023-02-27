/**********************************************************************
 * Copyright (c) 2022 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../client');
var querystring = require('query-string');
var validate = require('../../utils/validate');
var checkers = require('../../utils/checkers');

/**
 * Get devices devices accessible by user access token.
 * @param {number} page
 * @param {number} limit
 * @param {string} sortBy
 * @param {string} sortOrder
 * @param {Array<string>} deviceIds optional
 * @param {function} callback optional
 */
module.exports = function (page, limit, sortBy, sortOrder, deviceIds, callback) {
  if (checkers.isFunction(page)) {
    callback = page;
    page = null;
  }
  if (checkers.isFunction(limit)) {
    callback = limit;
    limit = null;
  }
  if (checkers.isFunction(sortBy)) {
    callback = sortBy;
    sortBy = null;
  }
  if (checkers.isFunction(sortOrder)) {
    callback = sortOrder;
    sortOrder = null;
  }
  if (checkers.isFunction(deviceIds)) {
    callback = deviceIds;
    deviceIds = null;
  }
  try {
    const query = {};
    const params = {};
    if (page !== undefined && page !== null) {
      query.page = page;
      validate.validateNumber(page);
    }
    if (limit !== undefined && limit !== null) {
      query.limit = limit;
      validate.validateNumber(limit);
    }
    if (sortBy) {
      query.sortBy = sortBy;
      validate.validateString(sortBy);
    }
    if (sortOrder) {
      query.sortOrder = sortOrder;
      validate.validateString(sortOrder);
    }
    if (deviceIds !== undefined && deviceIds != null) {
      if (Array.isArray(deviceIds)) {
        validate.validateArray(deviceIds);
        for (let i = 0; i < deviceIds.length; i += 1) {
          validate.validateString(deviceIds[i]);
        }
      } else {
        validate.validateString(deviceIds);
      }
      params.deviceIds = deviceIds;
    }
    var path = `/sessions/dataservice/devices?${querystring.stringify(query)}`;
    return client.post('auth', path, params, callback);
  } catch (e) {
    if (callback) {
      return callback(e, null);
    }
    return Promise.reject(e);
  }
}
