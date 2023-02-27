/**********************************************************************
 * Copyright (c) 2022 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
 **********************************************************************/
"use strict";

var client = require("../../../client");

/**
 * Get allowed system containers environment variables 
 * @param {function} callback optional
 */
module.exports = function (callback) {
  try {
    var path = '/devices/system-containers/allowed-environment-variables';
    return client.get("auth", path, callback);
  } catch (e) {
    if (callback) {
      return callback(e, null);
    }
    return Promise.reject(e);
  }
};
