/**********************************************************************
 * Copyright (c) 2022 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
 **********************************************************************/
"use strict";

var client = require("../../../client");
var validate = require("../../../utils/validate");

/**
 * Get installed system container
 * @param {string} deviceId
 * @param {string} containerName
 * @param {function} callback optional
 */
module.exports = function (deviceId, containerName, callback) {

  try {
    validate.validateString(deviceId);
    validate.validateString(containerName);

    var path = `/devices/${deviceId}/system-containers/${containerName}`;
    return client.get("auth", path, callback);
  } catch (e) {
    if (callback) {
      return callback(e, null);
    }
    return Promise.reject(e);
  }
};
