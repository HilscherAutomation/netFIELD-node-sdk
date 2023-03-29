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
 * Get specific article version by id
 * @param {string} articleId
 * @param {string} versionId
 * @param {string} language (optional)
 * @param {function} callback (optional)
 */

module.exports = function (articleId, versionId, language, callback) {
  if (checkers.isFunction(language)) {
    callback = language;
    language = null;
}
  try {
    const query = {};
    if (language) {
      query.language = language;
      validate.validateString(language);
  }
    validate.validateString(articleId);
    validate.validateString(versionId);
    var path = `/documentations/${articleId}/versions/${versionId}?`+ querystring.stringify(query);
    return client.get('', path, callback);
  } catch (e) {
    if (callback) {
      return callback(e, null);
    }
    return Promise.reject(e);
  }
}