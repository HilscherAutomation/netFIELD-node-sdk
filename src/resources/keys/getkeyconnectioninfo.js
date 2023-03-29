/**********************************************************************
 * Copyright (c) 2022 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
 **********************************************************************/
'use strict';

var client = require('../../client');

/**
* Get connection information for data service using API key
* @param {function} callback (optional)
*/
module.exports = function (callback) {
  try {
    var path = '/keys/dataservice/info';
    return client.get('key', path, callback);
  } catch (e) {
    if (callback) {
      return callback(e, null);
    }
    return Promise.reject(e);
  }
}
