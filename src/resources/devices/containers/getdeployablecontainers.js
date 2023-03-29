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
 * Get device deployable container
 * @param {string} deviceId
 * @param {number} page
 * @param {number} limit
 * @param {string} sortBy
 * @param {string} sortOrder
 * @param {boolean} includeDisabled (optional)
 * @param {Array<string>} category (optional)
 * @param {Array<string>} organisationName (optional)
 * @param {boolean} purchased (optional)
 * @param {function} callback optional
 */
module.exports = function(deviceId, page, limit, sortBy, sortOrder, includeDisabled, category, organisationName, purchased, callback) {
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
    if (includeDisabled !== undefined && includeDisabled != null) {
      query.includeDisabled = includeDisabled;
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
    if (organisationName !== undefined && organisationName != null) {
        if (Array.isArray(organisationName)) {
          validate.validateArray(organisationName);
          for (let i = 0; i < organisationName.length; i += 1) {
            validate.validateString(organisationName[i]);
          }
        } else {
          validate.validateString(organisationName);
        }
        query.organisationName = organisationName;
    }
    if (purchased !== undefined && purchased != null) {
        query.purchased = purchased;
    }
    validate.validateString(deviceId);
    var path = "/devices/" + deviceId + "/containers/deployable?" + querystring.stringify(query);
    return client.get("auth", path, callback);
  } catch (e) {
    if (callback) {
      return callback(e, null);
    }
    return Promise.reject(e);
  }
};
