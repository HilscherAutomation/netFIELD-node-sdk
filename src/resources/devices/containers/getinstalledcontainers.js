/**********************************************************************
 * Copyright (c) 2021 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
 **********************************************************************/
"use strict";

var querystring = require("querystring");
var client = require("../../../client");
var validate = require("../../../utils/validate");
var checkers = require("../../../utils/checkers");

/**
 * Get device installed container
 * @param {string} deviceId
 * @param {number} page
 * @param {number} limit
 * @param {string} sortBy
 * @param {string} sortOrder
 * @param {function} callback optional
 */
module.exports = function(deviceId, page, limit, sortBy, sortOrder, settingsPageId, callback) {
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
    if (settingsPageId && !checkers.isFunction(settingsPageId)) {
      query.settingsPageId = settingsPageId;
      validate.validateString(settingsPageId);
    }

    validate.validateString(deviceId);
    var path = "/devices/" + deviceId + "/containers/installed?" + querystring.stringify(query);
    return client.get("auth", path, callback);
  } catch (e) {
    if (callback) {
      return callback(e, null);
    }
    return Promise.reject(e);
  }
};
