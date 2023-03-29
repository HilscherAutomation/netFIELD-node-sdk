/**********************************************************************
 * Copyright (c) 2022 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/

var isFunction = exports.isFunction = function isFunction(param){
  if(typeof param === 'function' && param){
      return true;
  }
  return false;
}