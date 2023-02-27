/**********************************************************************
 * Copyright (c) 2022 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
 **********************************************************************/
"use strict";

var client = require("../../../client");
var validate = require("../../../utils/validate");
var checkers = require("../../../utils/checkers");

/**
 * Execute deployment job with custom selection of devices
 * @param {string} jobId
 * @param {{deviceIds: Array<string>}} params
 * @param {function} callback optional
 */
module.exports = function (jobId, params = {}, callback) {
  if (checkers.isFunction(params)) {
    callback = params;
    params = {};
  }
  try {
    validate.validateString(jobId);
    validate.validateObject(params);
    var path = `/deployments/jobs/${jobId}/execute/custom`;
    return client.post("auth", path, params, callback);
  } catch (e) {
    if (callback) {
      return callback(e, null);
    }
    return Promise.reject(e);
  }
};
