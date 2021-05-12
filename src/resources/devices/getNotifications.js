/**********************************************************************
 * Copyright (c) 2019 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
"use strict";

var querystring = require("querystring");
var client = require("../../client");
var validate = require("../../utils/validate");
var checkers = require("../../utils/checkers");

/**
 * Get all Device notifications
 * @param {string} deviceId
 * @param {number} page
 * @param {number} limit
 * @param {string} sortBy
 * @param {string} sortOrder
 * @param {function} callback optional
 */
module.exports = function(deviceId, page, limit, sortBy, sortOrder, callback) {
  for (let i = 0; i < arguments.length; i++) {
    if (checkers.isFunction(arguments[i])) {
      callback = arguments[i];
      arguments[i] = null;
    }
  }
  try {
    const query = {};

    if (page && !checkers.isFunction(page)) {
      query.page = page;
      validate.validateNumber(page);
    }

    if (limit && !checkers.isFunction(limit)) {
      query.limit = limit;
      validate.validateNumber(limit);
    }
    if (sortBy && !checkers.isFunction(sortBy)) {
      query.sortBy = sortBy;
      validate.validateString(sortBy);
    }
    if (sortOrder && !checkers.isFunction(sortOrder)) {
      query.sortOrder = sortOrder;
      validate.validateString(sortOrder);
    }
    var path = `/devices/${deviceId}/notifications`;
    var queryPath = `${path}?${querystring.stringify(query)}`;
    return client.get(false, queryPath, callback);
  } catch (e) {
    if (callback) {
      return callback(e, null);
    }
    return Promise.reject(e);
  }
};
