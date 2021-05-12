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
 * Get all EdgeOS
 * @param {number} page
 * @param {number} limit
 * @param {string} sortBy
 * @param {string} sortOrder asc, desc
 * @param {string} platform string
 * @param {function} callback optional
 */

module.exports = function(page, limit, sortBy, sortOrder, platform, callback) {
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

    if (platform && !checkers.isFunction(platform)) {
      query.platform = platform;
      validate.validateString(platform);
    }

    var path = "/edgeos?" + querystring.stringify(query);
    return client.get("auth", path, callback);
  } catch (e) {
    if (callback) {
      return callback(e, null);
    }
    return Promise.reject(e);
  }
};
