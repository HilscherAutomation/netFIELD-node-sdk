/**********************************************************************
 * Copyright (c) 2022 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
 **********************************************************************/
"use strict";

var client = require("../../client");
var querystring = require('query-string');
var validate = require('../../utils/validate');
var checkers = require('../../utils/checkers');

/**
 * Get netFIELD dynamic pages
 * @param {string} locale (optional)
 * @param {function} callback (optional)
 */
module.exports = function (locale, callback) {
  if (checkers.isFunction(locale)) {
    callback = locale;
    locale = null;
  }
  try {
    const query = {};
    if (locale !== undefined && locale !== null) {
      query.locale = locale;
      validate.validateString(locale);
    }
    var path = '/pages?' + querystring.stringify(query);
    return client.get("dynamicPages", path, callback);
  } catch (e) {
    if (callback) {
      return callback(e, null);
    }
    return Promise.reject(e);
  }
};
