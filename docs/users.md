# Users

## Overview
*The resources responsible for creating and managing users*

## Available Resources
 
1. [netField.users.create(params, [callback])](#createuser)

2. [netField.users.createselfuser(params, [callback])](#createselfuser)

3. [netField.users.getAll(organisationId, page, [callback])](#getusers)

4. [netField.users.get(userId, [callback])](#getuser)

5. [netField.users.getverifyuser(email, [callback])](#getverifyuser)

6. [netField.users.suggest(params, [callback])](#suggestuser)

7. [netField.users.update(userId, params, [callback])](#updateuser)

8. [netField.users.verifyuser(params, [callback])](#verifyuser)

9. [netField.users.delete(userId, [callback])](#deleteuser)

10. [netField.users.profile.get([callback])](#getprofile)

11. [netField.users.profile.update(params, [callback])](#updateprofile)

12. [netField.users.sensoredge.create(params, [callback])](#createtempuser)

13. [netField.users.sensoredge.completeRegistration(params, [callback])](#completeregistration)

14. [netField.users.sensoredge.verify(params, [callback])](#verifytempuser)

15. [netField.users.sensoredge.getverifytempuser(email, [callback])](#getverifytempuser)

16. [netField.users.profile.notificationEmails.add(params, [callback])](#addnotificationemail)

17. [netField.users.profile.notificationEmails.getAll(page, limit, sortBy, sortOrder, [callback])](#getnotificationemails)

17. [netField.users.profile.notificationEmails.delete(notificationEmailId, [callback])](#deletenotificationemail)

## Resource Usage

### createuser

    Create new user

```javascript
/**
 * @param {object} params
 * @param {function} callback optional
*/
netField.users.create(params, [callback])
```

### createselfuser

    Self registration for user (uses public token)

```javascript
/**
 * @param {object} params
 * @param {function} callback optional
*/
netField.users.createselfusers(params, [callback])
```

### getusers

    Get users by organisationId

```javascript
/**
 * @param {number} organisationId
 * @param {any} options optional
 * @param {function} callback optional
*/
netField.users.getAll(organisationId, [options], [callback])
```

### getuser

    Get user by userId

```javascript
/**
 * @param {number} userId
 * @param {function} callback optional
*/
netField.users.get(userId, [callback])
```

### suggestuser

    Suggest user

```javascript
/**
 * @param {object} params
 * @param {function} callback optional
*/
netField.users.suggest(params, [callback])
```

### getverifyuser

    Resend user verification code to email

```javascript
/**
 * @param {string} email
 * @param {function} callback optional
*/
netField.users.getverifyuser(email, [callback])
```

### updateuser

    Update user

```javascript
/**
 * @param {number} userId
 * @param {object} params
 * @param {function} callback optional
*/
netField.users.update(userId, params, [callback])
```

### verifyuser

    Verify user by code send trough email

```javascript
/**
 * @param {object} params
 * @param {function} callback optional
*/
netField.users.verifyuser(params, [callback])
```

### deleteuser

    Delete User

```javascript
/**
 * @param {number} userId
 * @param {function} callback optional
*/
netField.users.delete(userId, [callback])
```

### getprofile

    Get user profile

```javascript
/**
 * @param {function} callback optional
*/
netField.users.profile.get([callback])
```

### updateprofile

    Update user profile

```javascript
/**
 * @param {object} params
 * @param {function} callback optional
*/
netField.users.profile.update(params, [callback])
```

### createtempuser

    Create new tempUser

```javascript
/**
 * @param {object} params
 * @param {function} callback optional
*/
netField.users.sensoredge.create(params, [callback])
```

### completeregistration

    Generate sensor edge registration access token

```javascript
/**
 * @param {object} params
 * @param {function} callback optional
*/
netField.users.sensoredge.completeRegistration(params, [callback])
```

### verifytempuser

    Verify a user by the code sent through email

```javascript
/**
 * @param {object} params
 * @param {function} callback optional
*/
netField.users.sensoredge.verify(params, [callback])
```

### getverifytempuser

    Resend tempUser verification code to email

```javascript
/**
 * @param {string} email
 * @param {function} callback optional
*/
netField.users.sensoredge.getverifytempuser(email, [callback])
```

### addnotificationemail

    Add notification email to current user profile

```javascript
/**
 * @param {object} params 
 * @param {function} callback optional
*/
netField.users.profile.notificationEmails.add(params, [callback])
```

### getnotificationemails

    Get user profile notification emails

```javascript
/** 
 * @param {number} page
 * @param {number} limit
 * @param {String} sortBy
 * @param {String} sortOrder asc, desc
 * @param {function} callback optional
 */
netField.users.profile.notificationEmails.getAll(page, limit, sortBy, sortOrder, callback)
```

### deletenotificationemail

    Delete notification email

```javascript
/**
 * @param {number} notificationEmailId
 * @param {function} callback optional
*/
netField.users.profile.notificationEmails.delete(notificationEmailId, [callback])
```