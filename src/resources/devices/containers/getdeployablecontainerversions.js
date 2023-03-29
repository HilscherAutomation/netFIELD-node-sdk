/**********************************************************************
 * Copyright (c) 2022 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
 **********************************************************************/
 "use strict";

 var client = require("../../../client");
 var validate = require("../../../utils/validate");
 
 /**
    Get a list of all deployable container versions for a device
  * @param {string} deviceId
  * @param {string} containerId
  * @param {function} callback optional
  */
 module.exports = function(deviceId, containerId, callback) {
   try {
     validate.validateString(deviceId);
     validate.validateString(containerId);
     var path = `/devices/${deviceId}/containers/${containerId}/deployable`;
     return client.get("auth", path, callback);
   } catch (e) {
     if (callback) {
       return callback(e, null);
     }
     return Promise.reject(e);
   }
 };
 