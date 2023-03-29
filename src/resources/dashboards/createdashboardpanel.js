/**********************************************************************
 * Copyright (c) 2022 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
 **********************************************************************/
'use strict';

var client = require('../../client');
var validate = require('../../utils/validate');
var checkers = require('../../utils/checkers');

/**
 * Create dashboard panel
 * @param {string} dashboardId
 * @param {{title: string,
 *  layouts: {
 *    lg: {
 *       layoutPosX: number,
 *       layoutPosY: number,
 *       layoutWidth: number,
 *       layoutHeight: number
 *     },
 *    md: {
 *       layoutPosX: number,
 *       layoutPosY: number,
 *       layoutWidth: number,
 *       layoutHeight: number
 *     },
 *    sm: {
 *       layoutPosX: number,
 *       layoutPosY: number,
 *       layoutWidth: number,
 *       layoutHeight: number
 *     },
 *    xs: {
 *       layoutPosX: number,
 *       layoutPosY: number,
 *       layoutWidth: number,
 *       layoutHeight: number
 *     },
 *    xxs: {
 *       layoutPosX: number,
 *       layoutPosY: number,
 *       layoutWidth: number,
 *       layoutHeight: number
 *     }
 *  },
 * types: string,
 * visualisation: object,
 * image: file
 * }} params
 * @param {object} options optional
 * @param {function} callback optional
 */
module.exports = function (dashboardId, params, options, callback) {
  try {
    if (checkers.isFunction(options)) {
      callback = options;
      options = {};
    }

    validate.validateString(dashboardId);
    validate.validateFormData(params);

    var path = `/dashboards/${dashboardId}/panels`;
    return client.sendForm('auth', path, params, 'POST', options, callback);
  } catch (e) {
    if (callback) {
      return callback(e, null);
    }
    return Promise.reject(e);
  }
}
