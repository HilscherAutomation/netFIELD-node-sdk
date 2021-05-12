var client = require('../../client');
var validate = require('../../utils/validate');

/**
 * OffBoard Confirm Device
 * @param {string} key jwtkey
 * @param {string} deviceId
 * @param {function} callback optional
 */
module.exports = function (params, callback) {
  try {
    validate.validateObject(params);
    var path = '/devices/offboard/confirm';
    return client.put('public', path, params, callback);
  } catch (e) {
    if (callback) {
      return callback(e, null);
    }
    return Promise.reject(e);
  }
}