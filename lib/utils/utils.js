/**********************************************************************
 * Copyright (c) 2019 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
"use strict";

var btoa = require('btoa');
var isArray = Array.isArray;
var hasOwn = Object.prototype.hasOwnProperty;

/**
 * Recursively copies given object into a new object. Helper method for merge
 * Implementation from https://github.com/paypal/PayPal-node-SDK/blob/master/lib/utils.js#L21
 * @param  {Object} v
 * @return {Object}
 */
function clone(v) {
    if (v === null || typeof v !== "object") {
        return v;
    }

    if (isArray(v)) {
        var arr = v.slice();
        for (var i = 0; i < v.length; i++) {
            arr[i] = clone(arr[i]);
        }
        return arr;
    }
    else {
        var obj = {};
        for (var k in v) {
            obj[k] = clone(v[k]);
        }
        return obj;
    }
}

/**
 * Merges two Objects recursively, setting property of obj1 to those of obj2
 * and creating property as necessary. 
 *
 * Implementation from https://github.com/paypal/PayPal-node-SDK/blob/master/lib/utils.js#L51
 * @param  {Object} obj1 
 * @param  {Object} obj2 
 * @return {Object}     
 */
var merge = exports.merge = function merge(obj1, obj2, appendOnly) {

  //Handle invalid arguments
  if (obj1 === null || typeof obj1 !== "object") {
      throw new TypeError("merge() - first parameter has to be an object, not " + typeof obj1 + ".");
  }

  if (obj2 === null || typeof obj2 !== "object") {
      throw new TypeError("merge() - first parameter has to be an object, not " + typeof obj2 + ".");
  }

  if (isArray(obj1) || isArray(obj2)) {
      throw new TypeError("merge() - Unsupported for arrays.");
  }

  for (var k in obj2) {
      var obj1Val, obj2Val = obj2[k];
      if (hasOwn.call(obj1, k)) {
          if (!appendOnly) {
              obj1Val = obj1[k];
              if (obj1Val !== null && typeof obj1Val === "object" &&
                      obj2Val !== null && typeof obj2Val === "object") {
                  merge(obj1Val, obj2Val);
              }
              else {
                  obj1[k] = clone(obj2Val);
              }
          }
      }
      else {
          obj1[k] = clone(obj2Val);
      }
  }
  return obj1;
};

/**
 * Creates a basic authorization token. Format: "basic btoa(clientId:clientPassword)"
 * @param {String} clientId
 * @param {String} clientPassword
 */
var createBasicToken = exports.createBasicToken = function createBasicToken(clientId, clientPassword) {
  return btoa(unescape(encodeURIComponent(clientId + ':' + clientPassword))).replace(new RegExp('=', 'g'),'');
}

/**
 * Checkes whether a given token is expired or not.
 * @param {String} token The jwt to check
 * @returns {boolean} indicating whether the token is expired or not
 */
var isTokenExpired = exports.isTokenExpired = function isTokenExpired(expireDate) {
    var currentDate = new Date(Date.now());
    return (expireDate.valueOf() - currentDate.valueOf()) < 0;
}