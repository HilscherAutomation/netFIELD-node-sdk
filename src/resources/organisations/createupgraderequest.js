/**********************************************************************
 * Copyright (c) 2022 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
 **********************************************************************/
 'use strict';

 var client = require('../../client');
 var validate = require('../../utils/validate');
 
 /**
  * Create organisation upgrade request
  * @param {number} organisationId organisation id
  * @param {{ email: string, street: string, houseNumber: string, zipCode: string,
    city: string, state?: string, country: string, subscriptionPlan: string}} params
  * @param {function} callback optional
  */
 module.exports = function(organisationId, params, callback) {
     try {
         validate.validateNumber(organisationId);
         validate.validateObject(params);
         var path = '/organisations/' + organisationId + '/upgrade-requests';
         return client.post('auth', path, params, callback);
     } catch (e) {
         if (callback) {
             return callback(e, null);
         }
         return Promise.reject(e);
     }
 }