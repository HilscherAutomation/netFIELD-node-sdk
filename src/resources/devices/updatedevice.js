/**********************************************************************
 * Copyright (c) 2022 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
'use strict';

var client = require('../../client');
var validate = require('../../utils/validate');

/**
 * Update device by deviceId
 * @param {string} deviceId
 * @param {{organisationId: string,
 * name: string,
 * firmwareVersion: string,
 * modelName: string,
 * geolocation: {
 *  longitude: string,
 *  latitude: string,
 * },
 * timeToLiveSecs: number,
 * proxySettings: { 
 * useHttpsProxySettings: boolean,
 * noProxy: string,
 *   httpsProxy: {
 *     uri: string,
 *     username": string,
 *     password": string
 *   },
 * useHttpProxySettings: boolean,
 *   httpProxy: {
 *    uri: string,
 *    username: string,
 *    password: string
 *   }
 * },
 * remoteSettings: {
 *    host: string,
 *    httpPort: number,
 *    services: Array<{service: string, edgePort: number, localPort: number, forward: boolean, destinationIp: string, destinationPort: number}>
 *  },
 * description: string,
 * tags: string,
 * properties: Array<{name: string, value: string}>,
 * desiredProperties: object,
 * upstreamProtocol: string,
 * }} params
 * @param {function} callback optional
 */
module.exports = function(deviceId, params, callback){
    try {
        validate.validateString(deviceId);
        validate.validateObject(params);
        var path = '/devices/' + deviceId;
        return client.put('auth', path, params, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}