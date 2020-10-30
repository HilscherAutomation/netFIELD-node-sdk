/**********************************************************************
 * Copyright (c) 2019 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
"use strict";

var http = require('http');
var https = require('https');
var api = require('./api');
var utils = require('./utils/utils');

var get = exports.get = function get(authStrategy, path, callback) {
  var config = api.getConfiguration();
  var client = (config.schema === 'http') ? http : https;
  var opts = buildHttpOptions(authStrategy, 'GET', config, path);

  if ((authStrategy === 'auth') && utils.isTokenExpired(config.tokenExpiresAt)) {
    return api.refreshToken()
      .then(function () {
        opts = buildHttpOptions(authStrategy, 'GET', api.getConfiguration(), path);
        return makeRequest(client, opts, undefined, callback);
      });
  } else {
    return makeRequest(client, opts, undefined, callback);
  }
};

var post = exports.post = function post(authStrategy, path, params, callback) {
  var config = api.getConfiguration();
  var client = (config.schema === 'http') ? http : https;
  var postData = JSON.stringify(params);
  var opts = buildHttpOptions(authStrategy, 'POST', config, path, postData);

  if ((authStrategy === 'auth') && utils.isTokenExpired(config.tokenExpiresAt)) {
    return api.refreshToken()
      .then(function () {
        opts = buildHttpOptions(authStrategy, 'POST', api.getConfiguration(), path, postData);
        return makeRequest(client, opts, postData, callback);
      });
  } else {
    return makeRequest(client, opts, postData, callback);
  }
};

var sendForm = exports.sendForm = function sendForm(authStrategy, path, params, method, options, callback) {
  var config = api.getConfiguration();
  var formData = params;
  var requestMethod = method || 'POST';
  var opts = buildHttpOptions(authStrategy, requestMethod, config, path);
  var uploadProgressHandler = options && options.handlers && options.handlers.progressEventHandler;
  var sendDatamethod = uploadProgressHandler ? sendXhrFormData : sendFormData;
  if ((authStrategy === 'auth') && utils.isTokenExpired(config.tokenExpiresAt)) {
    return api.refreshToken()
      .then(function () {
        opts = buildHttpOptions(authStrategy, requestMethod, config, path);
        return sendDatamethod(opts.path, config.userToken, formData, requestMethod, options, callback);
      });
  } else {
    var builtPath = config.schema + '://' + opts.hostname + ':' + opts.port + opts.path;
    return sendDatamethod(builtPath, config.userToken, formData, requestMethod, options, callback);
  }
};

var put = exports.put = function put(authStrategy, path, params, callback) {
  var config = api.getConfiguration();
  var client = (config.schema === 'http') ? http : https;
  var postData = JSON.stringify(params);
  var opts = buildHttpOptions(authStrategy, 'PUT', config, path, postData);

  if ((authStrategy === 'auth') && utils.isTokenExpired(config.tokenExpiresAt)) {
    return api.refreshToken()
      .then(function () {
        opts = buildHttpOptions(authStrategy, 'PUT', api.getConfiguration(), path, postData);
        return makeRequest(client, opts, postData, callback);
      });
  } else {
    return makeRequest(client, opts, postData, callback);
  }
};

var del = exports.delete = function del(authStrategy, path, params, callback) {
  var config = api.getConfiguration();
  var client = (config.schema === 'http') ? http : https;
  var postData = JSON.stringify(params);
  var opts = buildHttpOptions(authStrategy, 'DELETE', config, path, postData);

  if ((authStrategy === 'auth') && utils.isTokenExpired(config.tokenExpiresAt)) {
    return api.refreshToken()
      .then(function () {
        opts = buildHttpOptions(authStrategy, 'DELETE', api.getConfiguration(), path, postData);
        return makeRequest(client, opts, postData, callback);
      });
  } else {
    return makeRequest(client, opts, postData, callback);
  }
};

var buildHttpOptions = function buildHttpOptions(authStrategy, method, config, path, postData) {
  var headers = Object.assign({ Authorization: null }, config.headers);
  switch (authStrategy) {
    case 'auth':
      headers.Authorization = config.userToken || 'dummy';
      break;
    case 'public':
      headers.Authorization = config.accessToken || 'dummy';
      break;
    case 'key':
      headers.Authorization = config.keyToken || 'dummy';
      break;
    default:
      headers.Authorization = config.userToken || 'dummy';
      break;
  }

  if (postData) {
    headers['Content-Length'] = Buffer.byteLength(postData);
  }

  return {
    method: method,
    headers: headers,
    port: config.port,
    hostname: config.host,
    path: '/' + config.version + '/' + handlePathFormat(path),
  };
}

var makeRequest = function makeRequest(client, httpOptions, postData, callback) {
  return new Promise(function (resolve, reject) {
    var req = client.request(httpOptions, function (res) {
      res.setEncoding('utf8');
      var chunks = "";

      // When a chunk was received, concatenate it to the previous chunks
      res.on('data', function (chunk) {
        chunks += chunk;
      });

      // Event is called when all data/chunks were received
      res.on('end', function () {
        // Handle Responses with data
        if (chunks) {
          var isFileData = res.headers['content-type'] === 'application/octet-stream';
          var processedData;
          try {
            processedData = isFileData ? chunks : JSON.parse(chunks);
          } catch (e) {
            if (callback) {
              return callback ? callback(e, undefined) : {};
            } else {
              reject(e);
            }
            return;
          }
          if ((res.statusCode === 401 && !res.url.endsWith('auth'))
            || (res.statusCode === 403 && res.url.endsWith('auth')
              && postData.indexOf('refreshToken') >= 0)) {

            api.removeUserToken();
            api.removeUserRefreshToken();
            api.removeTokenExpiresAt();
          }
          var data = handleResSuccess(processedData, res);
          var error = handleResError(processedData, res);
          if (callback) {
            return callback ? callback(error, data) : {};
          }

          if (error) {
            reject(error);
          } else {
            resolve(data);
          }
        } else {
          // Handle responses without data
          if (res.statusCode <= 400) { // Successful call
            if (callback) {
              return callback ? callback(null, undefined) : {};
            }
            resolve();
          } else { // Unsuccessful call
            // This case shouldn't happen
            // Every unsuccessful call should return an error
            if (callback) {
              return callback ? callback(new Error("Unsuccessful call - No data received"), undefined) : {};
            } else {
              reject();
            }
          }
        }
      });
    });

    req.on('error', function (error) {
      if (callback)
        return callback ? callback(error, null) : {};

      return reject(error);
    });

    if (postData) {
      req.write(postData);
    }
    req.end();
  });
};

var sendFormData = function sendFormData(url, token, formData, method, options, callback) {
  var status;
  var requestMethod = method || 'POST';
  return new Promise(function (resolve, reject) {
    var request = {
      method: requestMethod,
      headers: {
        Authorization: token,
      },
      body: formData,
    };
    fetch(url, request)
      .then(function (response) {
        status = response.status;
        return response.json();
      })
      .then(function (json) {
        // Success
        if (status < 400) {
          if (callback) {
            process.nextTick(function () { callback(null, json); });
            return;
          }
          return resolve(json);
        }
        // Error
        var error = {
          error: json && json.error ? json.error : undefined,
          message: json && json.message ? json.message : undefined,
        };
        if (callback) {
          process.nextTick(function () { callback(error, null); });
          return;
        }
        return reject(error);
      })
      .catch(function (error) {
        if (callback) {
          process.nextTick(function () { callback(error, null); });
          return;
        }
        return reject(error);
      });
  });
};

var sendXhrFormData = function sendXhrFormData(url, token, formData, method, options, callback) {
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.onload = function () {
      if (this.status >= 200 && this.status < 300) {
        resolve(xhr.response);
      } else {
        var error = {
          error: xhr.status,
          message: xhr.statusText,
        };
        if (callback) {
          process.nextTick(function () { callback(error, null); });
          return;
        }
        return reject(error);
      }
    };
    xhr.onerror = function () {
      var error = {
        error: xhr.status,
        message: xhr.statusText,
      };
      if (callback) {
        process.nextTick(function () { callback(error, null); });
        return;
      }
      return reject(error);
    };
    if (options && options.handlers && options.handlers.progressEventHandler) {
      xhr.upload.addEventListener('progress', function (e) {
        options.handlers.progressEventHandler(e);
      }, false);
    }
    const headers = {
      Authorization: token,
    }
    Object.keys(headers).forEach(function (key) {
      xhr.setRequestHeader(key, headers[key]);
    });
    xhr.send(formData);
  });
};

var handlePathFormat = function handlePathFormat(path) {
  return path[0] === "/" ? path.substring(1) : path;
};

var handleResError = function handleResError(aggregatedChunk, res) {
  var error = null;

  if (res.statusCode >= 400) {
    error = {
      error: aggregatedChunk.error
    };

    if (aggregatedChunk.message) {
      error.message = aggregatedChunk.message;
    }
  }

  return error;
}

var handleResSuccess = function handleResSuccess(aggregatedChunk, res) {
  var data = null;

  if (res.statusCode < 400) {
    data = aggregatedChunk;
  }

  return data;
}
