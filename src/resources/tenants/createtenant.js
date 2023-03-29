/**********************************************************************
 * Copyright (c) 2022 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
"use strict";

var client = require("../../client");
var validate = require("../../utils/validate");
const path = "/tenants/organisations";

/**
 * Create tenant's root organization
 * @param {name: string,
 * admin: object,
 * phoneNumber: string,
 * street: string,
 * houseNumber: string,
 * addressSupplement: string,
 * zipCode: string,
 * city: string,
 * state: string,
 * country: string,
 * notes: string,
 * persistStreamingData: boolean,
 * childOrganisationsLimit: number,
 * usersLimit: number,
 * devicesLimit: number,
 * keysLimit: number, 
 * keysRequestMonthlyLimit: number,
 * dataStorageLimit: number, 
 * wsConnectionLimit: number} params
 * @param {function} callback optional
 */
module.exports = function(params, callback) {
  try {
    validate.validateObject(params);
    return client.post("auth", path, params, callback);
  } catch (e) {
    if (callback) {
      return callback(e, null);
    }
    return Promise.reject(e);
  }
};
