# Auth

## Overview
*The resources responsible for user auth*

## Available Resources

1. [netField.generateUserToken(params, [callback])](#generateUserToken)

2. [netField.verifyUserToken([callback])](#verifyUserToken)

3. [netField.revokeUserToken([callback])](#revokeUserToken)

4. [netField.auth.resetPassword(email, [callback])](#resetPassword)

5. [netField.auth.setPassword(params, [callback])](#reset)


## Resource Usage

### generateUserToken

    Calls the API to get a user token which is then saved in the config

```javascript
/**
 * @param {object} params
 * @param {function} callback optional
*/
netField.generateUserToken(params, [callback])
```

### verifyUserToken

    Verify token if it's valid

```javascript
/**
* @param {function} callback optional
*/
netField.verifyUserToken([callback])
```

### revokeUserToken

    Revoke token (logout)

```javascript
/**
 * @param {function} callback optional
*/
netField.revokeUserToken([callback])
```

### resetPassword

    Send email with password reset token

```javascript
/**
 * @param {string} email
 * @param {function} callback optional
*/
netField.auth.resetPassword(email, [callback])
```

### reset

    Set new user password

```javascript
/**
 * @param {object} params
 * @param {function} callback optional
*/
netField.auth.setPassword(params, [callback])
```
