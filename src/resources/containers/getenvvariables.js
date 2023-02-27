/**********************************************************************
 * Copyright (c) 2022 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../client');
var querystring = require('query-string');
var validate = require('../../utils/validate');
var checkers = require('../../utils/checkers');

/**
 * Get container environment variables suggestions
 * @param {string} containerId
 * @param {string} installedContainerId optional
 * @param {function} callback optional
 */

module.exports = function (containerId, installedContainerId, callback) {
  if (checkers.isFunction(installedContainerId)) {
    callback = installedContainerId;
    installedContainerId = null;
  }
  try {
    const query = {};
    if (installedContainerId !== undefined && installedContainerId != null) {
      query.installedContainerId = installedContainerId;
      validate.validateString(installedContainerId);
    }
    validate.validateString(containerId);
    var path = `/containers/${containerId}/env-variables?${querystring.stringify(query)}`;
    return client.get('auth', path, callback);
  } catch (e) {
    if (callback) {
      return callback(e, null);
    }
    return Promise.reject(e);
  }
}