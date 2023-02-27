/**********************************************************************
 * Copyright (c) 2022 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
 **********************************************************************/
 'use strict';

 var client = require('../../client');
 var validate = require('../../utils/validate');
 var querystring = require('query-string');
 var checkers = require('../../utils/checkers');
 
 /**
  * Get documentation article by id
  * @param {string} articleId
  * @param {string} language optional
  * @param {function} callback optional
  */
 module.exports = function(articleId, language, callback) {
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
         var path = `/documentations/${articleId}?${querystring.stringify(query)}`;
         return client.get('', path, callback);
     } catch (e) {
         if (callback) {
             return callback(e, null);
         }
         return Promise.reject(e);
     }
 }