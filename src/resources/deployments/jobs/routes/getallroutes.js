/**********************************************************************
 * Copyright (c) 2021 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
 **********************************************************************/
"use strict";

var querystring = require("querystring");
var client = require("../../../../client");
var validate = require("../../../../utils/validate");
var checkers = require("../../../../utils/checkers");

/**
 * Get a list of all routes in a deployment job
 * @param {string} jobId
 * @param {number} page
 * @param {number} limit
 * @param {string} sortBy
 * @param {string} sortOrder
 * @param {function} callback optional
 */
module.exports = function (jobId, page, limit, sortBy, sortOrder, callback) {
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
  try {
    const query = {};
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
    validate.validateString(jobId);
    var path = `/deployments/jobs/${jobId}/routes?${querystring.stringify(query)}`;
    return client.get("auth", path, callback);
  } catch (e) {
    if (callback) {
      return callback(e, null);
    }
    return Promise.reject(e);
  }
};
