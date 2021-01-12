# Auth

## Overview
*The resources responsible for user auth*

## Available Resources

1. [netField.auth.auth(params, [callback])](#auth)

2. [netField.auth.verify([callback])](#verify)

3. [netField.auth.revoke([callback])](#revoke)

4. [netField.auth.resetPassword(email, [callback])](#resetPassword)

5. [netField.auth.setPassword(params, [callback])](#reset)


## Resource Usage

### auth

    Gets user authentication token

```javascript
/**
 * @param {object} params
 * @param {function} callback optional
*/
netField.auth.auth(params, [callback])

//Or refresh token

/**
 * @param {object} params
 * @param {function} callback optional
*/
netField.auth.auth(params, [callback])
```

### verify

    Verify token if it's valid

```javascript
/**
* @param {function} callback optional
*/
netField.auth.verify([callback])
```

### revoke

    Revoke token (logout)

```javascript
/**
 * @param {function} callback optional
*/
netField.auth.revoke([callback])
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
