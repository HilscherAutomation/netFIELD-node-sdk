/**********************************************************************
 * Copyright (c) 2022 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
 **********************************************************************/
'use strict';

var client = require('../../../client');
var validate = require('../../../utils/validate');
var checkers = require('../../../utils/checkers');

/** 
 * Create deployment manifest
 * @param {number} organisationId 
 * @param {string} manifestId
 * @param {{
 *  name: string,
 *  description: string,
 *  isActive: boolean,
 *  useRemoteControl: boolean,
 *  containers: Array<{
 *    containerId: string,
 *    version: string,
 *    restartPolicy: string,
 *    desiredStatus: string,
 *    containerCreateOptions: object,
 *    containerTwinDesiredOptions: object,
 *    environmentVariables: Array<object>,
 *    startupOrder: number,
 *    useProxySettings: boolean,
 *    processorArchitecture: string
 *  }>
 *  routes: Array<{
 *    name: string, 
 *    source: string, 
 *    condition: string, 
 *    target: string 
 *  }>
 * }} params
 * @param {object} options optional
 * @param {function} callback optional
 */
module.exports = function (organisationId, manifestId, params, options, callback) {
  try {
    if (checkers.isFunction(options)) {
      callback = options;
      options = {};
    }
    validate.validateNumber(organisationId);
    validate.validateString(manifestId);
    validate.validateFormData(params);
    var path = `/organisations/${organisationId}/deployment-manifests/${manifestId}`;
    return client.sendForm('auth', path, params, 'PUT', options, callback);
  } catch (e) {
    if (callback) {
      return callback(e, null);
    }
    return Promise.reject(e);
  }
}
