/**********************************************************************
 * Copyright (c) 2022 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../client');
var querystring = require('querystring');
var validate = require('../../utils/validate');
var checkers = require('../../utils/checkers');

/**
 * Get search results for groups
 * @param {string} searchText (optional)
 * @param {Array[string]} filter (optional)
 * @param {string} searchType One of two values: "fuzzy" or "exact". (optional)
 * @param {integer} page (optional)
 * @param {integer} limit (optional)
 * @param {string} sortBy (optional)
 * @param {string} sortOrder One of two values: "asc" or "desc". (optional)
 * @param {string} groupType one of two values: 'devices' or 'containers'
 * @param {function} callback (optional)
 */
module.exports = function (searchText, filter, searchType, page, limit, sortBy, sortOrder, groupType, callback) {
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
  if (checkers.isFunction(sortBy)) {
    callback = sortBy;
    sortBy = null;
  }
  if (checkers.isFunction(sortOrder)) {
    callback = sortOrder;
    sortOrder = null;
  }
  if (checkers.isFunction(groupType)) {
    callback = groupType;
    groupType = null;
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
    if (sortBy !== undefined && sortBy !== null) {
      query.sortBy = sortBy;
      validate.validateString(sortBy);
    }
    if (sortOrder !== undefined && sortOrder !== null) {
      query.sortOrder = sortOrder;
      validate.validateString(sortOrder);
    }
    if (groupType) {
      query.groupType = groupType;
      validate.validateString(groupType);
    }
    const path = '/search/groups?' + querystring.stringify(query);
    return client.get('auth', path, callback);
  } catch (e) {
    if (callback) {
      return callback(e, null);
    }
    return Promise.reject(e);
  }
}