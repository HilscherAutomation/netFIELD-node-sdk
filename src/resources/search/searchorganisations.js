/**********************************************************************
 * Copyright (c) 2019 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../client');
var querystring = require('querystring');
var validate = require('../../utils/validate');
var checkers = require('../../utils/checkers');

/**
 * Get search results for organisations
 * @param {string} searchText (optional)
 * @param {Array[string]} filter (optional)
 * @param {string} searchType One of two values: "fuzzy" or "exact". (optional)
 * @param {integer} page (optional)
 * @param {integer} limit (optional)
 * @param {function} callback (optional)
 */
module.exports = function (searchText, filter, searchType, page, limit, callback) {
  if (checkers.isFunction(searchText)) {
    callback = searchText;
    searchText = null;
  }
  if (checkers.isFunction(filter)) {
    callback = filter;
    filter = null;
  }
  if (checkers.isFunction(searchType)) {
    callback = searchType;
    searchType = null;
  }
  if (checkers.isFunction(page)) {
    callback = page;
    page = null;
  }
  if (checkers.isFunction(limit)) {
    callback = limit;
    limit = null;
  }

  try {
    const query = {};
    if (searchText) {
      query.searchText = searchText;
      validate.validateString(searchText);
    }
    if (filter) {
      query.filter = filter;
      if (Array.isArray(filter)) {
        filter.forEach(el => {
          validate.validateString(el);
        });
      } else {
        validate.validateString(filter);
      }
    }
    if (searchType) {
      query.searchType = searchType;
      validate.validateString(searchType);
    }
    if (page !== undefined && page !== null) {
      query.page = page;
      validate.validateNumber(page);
    }
    if (limit !== undefined && limit !== null) {
      query.limit = limit;
      validate.validateNumber(limit);
    }
    const path = '/search/organisations?' + querystring.stringify(query);
    return client.get('auth', path, callback);
  } catch (e) {
    if (callback) {
      return callback(e, null);
    }
    return Promise.reject(e);
  }
}
