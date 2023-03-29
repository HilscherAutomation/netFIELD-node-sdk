/**********************************************************************
 * Copyright (c) 2022 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
 **********************************************************************/
'use strict';

var jwt = require('jsonwebtoken');
var configuration = require('./configure');
var utils = require('./utils/utils');
var errors = require('./utils/errors');
var client = require('./client');
var validate = require('./utils/validate');
var querystring = require('query-string');

/************************
 *   Setter and Getter  *
 ************************/

/**
 * Sets the user token which is sent in the 'Authorization' header for public resources.
 * Also decodes the token and sets the tokenExpiresAt value accordingly
 */
var setUserToken = exports.setUserToken = function setUserToken(token) {
    try {
        validate.validateString(token);
        var decodedToken = jwt.decode(token);
        setTokenExpiresAt(new Date(decodedToken.exp * 1000));
        configuration.default_options.userToken = token;
    } catch (e) {
        var onSetUserTokenError = configuration.default_options.onSetUserTokenError;
        if (onSetUserTokenError) {
            onSetUserTokenError(e);
        } else {
            throw e;
        }
    }
}

/**
 * Sets the workspace token which is sent in the 'Authorization' header for public resources.
 */
var setUserWorkspaceToken = exports.setUserWorkspaceToken = function setUserWorkspaceToken(token) {
    try {
        validate.validateString(token);
        var decodedToken = jwt.decode(token);
        setWorkspaceTokenExpiresAt(new Date(decodedToken.exp * 1000));
        configuration.default_options.userWorkspaceToken = token;
    } catch (e) {
        var onSetUserTokenError = configuration.default_options.userWorkspaceToken;
        if (onSetUserTokenError) {
            onSetUserTokenError(e);
        } else {
            throw e;
        }
    }
}

var setKeyToken = exports.setKeyToken = function setKeyToken(token) {
    configuration.default_options.keyToken = token;
}

/**
 * Sets the user refresh token
 */
var setUserRefreshToken = exports.setUserRefreshToken = function setUserRefreshToken(token) {
    configuration.default_options.userRefreshToken = token;
}

/**
 * Removes the user token (aka. set it to undefined)
 */
var removeUserToken = exports.removeUserToken = function removeUserToken() {
    configuration.default_options.userToken = undefined;
}

/**
 * Removes the user refresh token (aka. set it to undefined)
 */
var removeUserRefreshToken = exports.removeUserRefreshToken = function removeUserRefreshToken() {
    configuration.default_options.userRefreshToken = undefined;
}

/**
 * Sets the tokenExpiresAt value
 * @param {Date} expiresAt
 */
var setTokenExpiresAt = exports.setTokenExpiresAt = function setTokenExpiresAt(expiresAt) {
    configuration.default_options.tokenExpiresAt = expiresAt;
}

/**
 * Sets the workspace tokenExpiresAt value
 * @param {Date} expiresAt
 */
var setWorkspaceTokenExpiresAt = exports.setWorkspaceTokenExpiresAt = function setWorkspaceTokenExpiresAt(expiresAt) {
    configuration.default_options.workspaceTokenExpiresAt = expiresAt;
}

/**
 * Removes the tokenExpiresAt value
 */
var removeTokenExpiresAt = exports.removeTokenExpiresAt = function removeTokenExpiresAt() {
    configuration.default_options.tokenExpiresAt = undefined;
}

/**
 * Merges the provided configuration with the default configuration.
 * After the initial configuration, these attributes do not have to be
 * passed again.
 */
var setConfiguration = exports.setConfiguration = function setConfiguration(config) {
    // Check existence of configuration object
    if (typeof config !== 'object' || !config) {
        throw new Error(errors.mustBe('Configuration', 'an Object'));
    }

    configuration.default_options = utils.merge(configuration.default_options, config);
    isAuthenticated();
}

/**
 * Returns the current state of the configuration.
 */
var getConfiguration = exports.getConfiguration = function getConfiguration() {
    return configuration.default_options;
}

/**
 * Checks whether the current configuration is sufficient to call back-end resources that require authentication.
 * If the current configuration does not suffice to make authenticated requests, all configuration values for
 * authentication are cleared
 * @returns {bool} indicating whether the sdk can make authenticated requests or not
 */
var isAuthenticated = exports.isAuthenticated = function isAuthenticated() {
    var config = configuration.default_options;
    var userToken = config.userToken;
    var userRefreshToken = config.userRefreshToken;

    // If one of the tokens is missing, we are not authenticated
    if (userToken && userRefreshToken) {
        var decodedToken = jwt.decode(userToken);
        var accessExpiryDate = new Date(decodedToken.exp * 1000);

        // if the refresh token is expired, we have to log in again
        if (utils.isTokenExpired(accessExpiryDate)) {
            configuration.default_options.userToken = undefined;
            configuration.default_options.userRefreshToken = undefined;
            configuration.default_options.tokenExpiresAt = undefined;
            return false;
        } else return true; // we are authenticated
    } else {
        configuration.default_options.userToken = undefined;
        configuration.default_options.userRefreshToken = undefined;
        configuration.default_options.tokenExpiresAt = undefined;
        return false;
    }
}

/************************
 *   Token management   *
 ************************/

/**
 * Wrapper function for generateToken
 */
var generateUserToken = exports.generateUserToken = function generateUserToken(email, password, stayLoggedIn, language, callback) {
    validate.validateString(email);
    validate.validateString(password);
    var stayLoggedInVerified;
    if (stayLoggedIn === undefined || stayLoggedIn === null) {
        stayLoggedInVerified = undefined;
    } else {
        stayLoggedInVerified = stayLoggedIn;
    }
    var params = { grantType: "password", email: email, password: password, stayLoggedIn: stayLoggedInVerified, language };
    if (callback) {
        generateToken(params, callback);
    } else return generateToken(params);
}

/**
 * Wrapper function for generateWorkspaceUserToken
 */
var generateWorkspaceUserToken = exports.generateWorkspaceUserToken = function generateWorkspaceUserToken(workspaceToken, workspaceId, stayLoggedIn, language, callback) {
    validate.validateNumber(workspaceId);
    validate.validateString(workspaceToken);
    var stayLoggedInVerified;
    if (stayLoggedIn === undefined || stayLoggedIn === null) {
        stayLoggedInVerified = undefined;
    } else {
        stayLoggedInVerified = stayLoggedIn;
    }
    var params = { grantType: "workspace", workspaceToken: workspaceToken, workspaceId: workspaceId, stayLoggedIn: stayLoggedInVerified, language };
    if (callback) {
        generateToken(params, callback);
    } else return generateToken(params);
}

/**
 * Wrapper function for generateWorkspaceUserToken by accessToken
 */
var generateWorkspaceTokenWithAccessToken = exports.generateWorkspaceTokenWithAccessToken = function generateWorkspaceTokenWithAccessToken(accessToken, language, callback) {
    validate.validateString(accessToken);
    if (language) {
        validate.validateString(language);
    }
    var params = { grantType: "accessToken", accessToken: accessToken };
    if (callback) {
        generateWorkspaceToken(params, language, callback);
    } else return generateWorkspaceToken(params, language);
}

/**
 * Wrapper function for generateWorkspaceUserToken by email and password
 */
var generateWorkspaceTokenWithPassword = exports.generateWorkspaceTokenWithPassword = function generateWorkspaceTokenWithPassword(email, password, language, callback) {
    validate.validateString(email);
    validate.validateString(password);
    if (language) {
        validate.validateString(language);
    }
    var params = { grantType: "password", email: email, password: password };
    if (callback) {
        generateWorkspaceToken(params, language, callback);
    } else return generateWorkspaceToken(params, language);
}

/**
 * Verifies the userToken that is currently in use
 */
var verifyUserToken = exports.verifyUserToken = function verifyUserToken(callback) {
    try {
        if (!getConfiguration().userToken) {
            throw new Error(errors.mustBeLoggedIn());
        }
        var path = '/auth/verify';
        return client.get('auth', path, callback);
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}


/**
 * Revokes the userToken that is currently in use
 */
var revokeUserToken = exports.revokeUserToken = function revokeUserToken(callback) {
    try {
        if (!getConfiguration().userToken) {
            throw new Error(errors.mustBeLoggedIn());
        }
        var path = '/auth/revoke';
        if (callback) {
            client.post('auth', path, {}, function(error, data) {
                removeUserToken();
                removeUserRefreshToken();
                removeTokenExpiresAt();
                callback(error, data);
            });
        } else {
            return client
                .post('auth', path, {})
                .then(function(data) {
                    removeUserToken();
                    removeUserRefreshToken();
                    removeTokenExpiresAt();
                });
        }
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}

/**
 * Calls the API to get a user token which is then saved in the config
 * Uses provided user credentials
 */
var generateToken = exports.generateToken = function generateToken(params, callback) {
    try {
        validate.validateObject(params);
        var path = '/auth'
        var onTokenRefresh = getConfiguration().onTokenRefresh;

        if (callback) {
            client.post('public', path, params, function(error, data) {
                if (!error) {
                    // The name "accessToken" is used ambiguously.
                    // The "accessToken" returned by the API is the token
                    // for the currently logged in user.
                    setUserToken(data.accessToken);
                    setUserRefreshToken(data.refreshToken);

                    // Notify the user that new tokens are available
                    if (onTokenRefresh) {
                        onTokenRefresh(data);
                    }
                }
                callback(error, data)
            });
        } else {
            return client
                .post('public', path, params)
                .then(function(data) {
                    setUserToken(data.accessToken);
                    setUserRefreshToken(data.refreshToken);

                    // Notify the user that new tokens are available
                    if (onTokenRefresh) {
                        onTokenRefresh(data);
                    }
                    return data;
                });
        }
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}

/**
 * Calls the API to get a workspace token which is then saved in the config
 * Uses provided user credentials
 */
var generateWorkspaceToken = exports.generateWorkspaceToken = function generateWorkspaceToken(params, language, callback) {
    try {
        const query = {};
        if (language) {
            query.language = language;
        }
        validate.validateObject(params);
        var path = '/auth/workspaces?' + querystring.stringify(query);

        if (callback) {
            client.post('public', path, params, function(error, data) {
                if (!error) {
                    setUserWorkspaceToken(data.workspaceToken);
                }
                callback(error, data)
            });
        } else {
            return client
                .post('public', path, params)
                .then(function(data) {
                    setUserToken(data.workspaceToken);
                    return data;
                });
        }
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}

/**
 * Refreshes a userToken by using the refreshToken
 */
var refreshToken = exports.refreshToken = function refreshToken(callback) {
    try {
        var path = '/auth'
        var config = getConfiguration();
        if (!config.userRefreshToken) {
            throw new Error(errors.mustBeLoggedIn());
        }

        var params = { grantType: "refreshToken", refreshToken: config.userRefreshToken };

        if (callback) {
            generateToken(params, callback);
        } else {
            return generateToken(params);
        }
    } catch (e) {
        if (callback) {
            return callback(e, null);
        }
        return Promise.reject(e);
    }
}