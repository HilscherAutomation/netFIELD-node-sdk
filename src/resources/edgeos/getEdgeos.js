/**********************************************************************
 * Copyright (c) 2022 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
"use strict";

var querystring = require("query-string");
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
 * @param {number} platformKey number
 * @param {string} name string
 * @param {string} version string
 * @param {function} callback optional
 */

module.exports = function(page, limit, sortBy, sortOrder, platform, platformKey, name, version, callback) {
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

    if (platformKey && !checkers.isFunction(platformKey)) {
      query.platformKey = platformKey;
      validate.validateNumber(platformKey);
    }

    if (name && !checkers.isFunction(name)) {
      query.name = name;
      validate.validateString(name);
    }

    if (version && !checkers.isFunction(version)) {
      query.version = version;
      validate.validateString(version);
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
