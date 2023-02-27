# Auth

## Overview
*The resources responsible for user auth*

## Available Resources

1. [netField.generateUserToken(params, [callback])](#generateUserToken)

2. [netField.verifyUserToken([callback])](#verifyUserToken)

3. [netField.revokeUserToken([callback])](#revokeUserToken)

4. [netField.auth.resetPassword(email, captchaToken, language, [callback])](#resetPassword)

5. [netField.auth.setPassword(params, language, [callback])](#reset)

6. [netField.auth.sso(params, [callback])](#authsso)

7. [netField.auth.twoFactor.enable([callback])](#enabletwofactor)

8. [netField.auth.twoFactor.disable(code, [callback])](#disabletwofactor)

9. [netField.auth.twoFactor.verify(twoFactorMethodId, twoFactorCode, tokenType, [callback])](#verifytwofactorcode)

10. [netField.auth.twoFactor.send([callback])](#sendtwofactorcode)

11. [netField.auth.twoFactor.methods.add(twoFactorMethodType, [callback])](#addtwofactormethod)

12. [netField.auth.twoFactor.methods.delete(twoFactorMethodId, code, [callback])](#deletetwofactormethod)

13. [netField.auth.twoFactor.methods.getAll([callback])](#getalltwofactormethods)

14. [netField.auth.twoFactor.methods.getEnabled([callback])](#getenabledtwofactormethods)

15. [netField.auth.twoFactor.methods.select(twoFactorMethodId, [callback])](#selecttwofactormethod)

16. [netField.auth.twoFactor.methods.verify(twoFactorMethodId, twoFactorCode, [callback])](#verifytwofactormethod)


## Resource Usage

### generateUserToken

    Calls the API to get a user token which is then saved in the config

```javascript
/**
 * @param {{grantType: string, refreshToken: string, email: string, password: string, stayLoggedIn: boolean, language: string}} params
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
 * @param {string} captchaToken
 * @param {string} language optional
 * @param {function} callback optional
*/
netField.auth.resetPassword(email, captchaToken, language, [callback])
```

### reset

    Set new user password

```javascript
/**
 * @param {{email: string, password: string, code: string}} params
 * @param {string} language optional
 * @param {function} callback optional
*/
netField.auth.setPassword(params, language, [callback])
```

### authsso

    Sign In with SSO

```javascript
/**
 * @param {{code: string, sso: string}} params
 * @param {function} callback optional
*/
netField.auth.sso(params, [callback])
```

### enabletwofactor

    Enable two-factor authentication for the current user

```javascript
/** 
 * @param {function} callback optional
*/
netField.auth.twoFactor.enable([callback])
```

### disabletwofactor

    Disable two-factor authentication for the current user

```javascript
/** 
 * @param {string} code verification code
 * @param {function} callback optional
*/
netField.auth.twoFactor.disable(code, [callback])
```

### verifytwofactorcode

    Verify two-factor authentication code and generate authorization and refresh token

```javascript
/** 
 * @param {number} twoFactorMethodId
 * @param {string} twoFactorCode
 * @param {string} tokenType optional
 * @param {function} callback optional
*/
netField.auth.twoFactor.verify(twoFactorMethodId, twoFactorCode, tokenType, [callback])
```

### sendtwofactorcode

    Sends two-factor authentication code to the user email 

```javascript
/** 
 * @param {function} callback optional
*/
netField.auth.twoFactor.send([callback])
```

### addtwofactormethod

    Add two-factor authentication method

```javascript
/**
 * @param {string} twoFactorMethodType
 * @param {function} callback optional
*/
netField.auth.twoFactor.methods.add(twoFactorMethodType, [callback])
```

### deletetwofactormethod

    Delete (disable) two-factor authentication method

```javascript
/**
 * @param {number} twoFactorMethodId
 * @param {string} code verification code
 * @param {function} callback optional
*/
netField.auth.twoFactor.methods.delete(twoFactorMethodId, code, [callback])
```

### getalltwofactormethods

    Get all two-factor authentication methods for the current user

```javascript
/** 
 * @param {function} callback optional
*/
netField.auth.twoFactor.methods.getAll([callback])
```

### getenabledtwofactormethods

    Get a list of enabled two-factor authentication methods for the current user

```javascript
/** 
 * @param {function} callback optional
*/
netField.auth.twoFactor.methods.getEnabled([callback])
```

### selecttwofactormethod

    Select which two-factor authentication method to use

```javascript
/**
 * @param {number} twoFactorMethodId 
 * @param {function} callback optional
*/
netField.auth.twoFactor.methods.select(twoFactorMethodId, [callback])
```


### verifytwofactormethod

    Verify (enable) two-factor authentication method

```javascript
/** 
 * @param {number} twoFactorMethodId
 * @param {string} twoFactorCode
 * @param {function} callback optional
*/
netField.auth.twoFactor.methods.verify(twoFactorMethodId, twoFactorCode, [callback])
```