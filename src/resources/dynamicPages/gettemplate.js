/**********************************************************************
 * Copyright (c) 2022 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
 **********************************************************************/
"use strict";

var querystring = require('query-string');
var client = require("../../client");
var validate = require('../../utils/validate');
var checkers = require('../../utils/checkers');

/**
 * Get netFIELD dynamic page template
 * @param {string} path
 * @param {string} locale (optional)
 * @param {function} callback
 */
module.exports = function (path, locale, callback) {

  if (checkers.isFunction(locale)) {
    callback = locale;
    locale = null;
  }
  try {
    validate.validateString(path);
    const query = {};
    if (locale !== undefined && locale !== null) {
      validate.validateString(locale);
      query.locale = locale;      
    }
   
    var path = `/pages/${path}?${querystring.stringify(query) }`;
    return client.get("dynamicPages", path, callback); 
  } catch (e) {
    if (callback) {
      return callback(e, null);
    }
    return Promise.reject(e);
  }
};
