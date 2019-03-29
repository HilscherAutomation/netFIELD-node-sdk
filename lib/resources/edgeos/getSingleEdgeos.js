/**********************************************************************
 * Copyright (c) 2019 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
"use strict";

var querystring = require("querystring");
var client = require("../../client");
var validate = require("../../utils/validate");
var checkers = require("../../utils/checkers");

/**
 * Get single EdgeOS
 * @param {string} edgeosId
 * @param {function} callback optional
 */

module.exports = function(edgeosId, callback) {
  try {
    validate.validateString(edgeosId);

    if(checkers.isFunction(edgeosId)){
      callback = edgeosId;
      edgeosId = null;
    }

    var path = "/edgeos/" + edgeosId;
    return client.get("auth", path, callback);
  } catch (e) {
    if (callback) {
      return callback(e, null);
    }
    return Promise.reject(e);
  }
};
