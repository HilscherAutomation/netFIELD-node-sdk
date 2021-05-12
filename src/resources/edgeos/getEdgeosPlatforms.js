/**********************************************************************
 * Copyright (c) 2019 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
"use strict";

var client = require("../../client");

/**
 * Get all available edge OS platforms
 * @param {function} callback optional
 */
module.exports = function(callback) {
  try {
    var path = "/edgeos/platforms";
    return client.get("auth", path, callback);
  } catch (e) {
    if (callback) {
      return callback(e, null);
    }
    return Promise.reject(e);
  }
};
