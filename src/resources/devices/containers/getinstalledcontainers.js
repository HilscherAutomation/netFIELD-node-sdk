/**********************************************************************
 * Copyright (c) 2022 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
 **********************************************************************/
"use strict";

var querystring = require("query-string");
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
 * @param {string} settingsPageId optional
 * @param {Array<string>} category optional
 * @param {Array<string>} status optional
 * @param {function} callback optional
 */
module.exports = function(deviceId, page, limit, sortBy, sortOrder, settingsPageId, category, status, callback) {
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
    if (category !== undefined && category != null) {
      if (Array.isArray(category)) {
        validate.validateArray(category);
        for (let i = 0; i < category.length; i += 1) {
          validate.validateString(category[i]);
        }
      } else {
        validate.validateString(category);
      }
      query.category = category;
    }
    if (status !== undefined && status != null) {
      if (Array.isArray(status)) {
        validate.validateArray(status);
        for (let i = 0; i < status.length; i += 1) {
          validate.validateString(status[i]);
        }
      } else {
        validate.validateString(status);
      }
      query.status = status;
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
