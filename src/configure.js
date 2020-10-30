/**********************************************************************
 * Copyright (c) 2019 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
"use strict";

var sdkVersion = 1;

var default_options = exports.default_options = {
    version: 'v' + parseInt(sdkVersion),
    schema: 'http',
    host: 'edge-portal-api-dev.azurewebsites.net',
    port: 80,
    headers: { // Default headers that are included in every request
        'Content-type': 'application/json',
        'Accept': 'application/json'
    },
    remote: "https://remotecontrol.netfield.io/"
    /*
    +++ These attributes will be available after configuration +++
    clientId: String,
    clientPassword: String,
    accessToken: String, // the authorization token for public resources

    +++ These attributes will be available after a successful login +++
    userToken: String, // the authorization token for private resources
    userRefreshToken: String // the refresh token of a user
    tokenExpiresAt: Date // to determine whether a token is expired without decoding the userToken every time
    onTokenRefresh // This method can be set via setConfiguration and will be called everytime the token refresh.
                   // The method is called with an object of the shape { accessToken: '', refreshToken: '' } (the original server response)
    */
};
