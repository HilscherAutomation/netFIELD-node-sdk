/**********************************************************************
 * Copyright (c) 2021 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
"use strict";

var querystring = require("querystring");
var client = require("../../client");
var validate = require("../../utils/validate");
var checkers = require("../../utils/checkers");

/**
 * Get all tenants
 * @param {number} page
 * @param {number} limit
 * @param {string} sortBy
 * @param {string} sortOrder
 * @param {function} callback optional
 */
module.exports = function(page, limit, sortBy, sortOrder, callback) {
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

    var path = "/tenants/organisations?" + querystring.stringify(query);
    return client.get(false, path, callback);
  } catch (e) {
    if (callback) {
      return callback(e, null);
    }
    return Promise.reject(e);
  }
};
