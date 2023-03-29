/**********************************************************************
 * Copyright (c) 2022 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
 **********************************************************************/
"use strict";

var sdkVersion = 1;

var default_options = exports.default_options = {
    version: 'v' + parseInt(sdkVersion),
    schema: 'https',
    host: 'api.netfield.io',
    port: 443,
    headers: { // Default headers that are included in every request
        'Content-type': 'application/json',
        'Accept': 'application/json'
    },
    remote: "https://remotecontrol.netfield.io/",
    dynamicPagesAuthorizationToken: process.env.DYNAMIC_PAGES_AUTHORIZATION_TOKEN,
        /*

        +++ These attributes will be available after a successful login +++
        userToken: String, // the authorization token for private resources
        userWorkspaceToken: String // The  authorization token for workspaces
        userRefreshToken: String // the refresh token of a user
        tokenExpiresAt: Date // to determine whether a token is expired without decoding the userToken every time
        workspaceTokenExpiresAt: Date // to determine whether a workspace token is expired without decoding the workspaceToken every time
        onTokenRefresh // This method can be set via setConfiguration and will be called everytime the token refresh.
        onSetUserTokenError // This method can be set via setConfiguration and will be called if an error occurs in setUserToken.
        onSetUserWorkspaceTokenError // This method can be set via setConfiguration and will be called if an error occurs in setUserWorkspaceToken.
        */
};