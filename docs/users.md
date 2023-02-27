# Users

## Overview

_The resources responsible for creating and managing users_

## Available Resources

1. [netField.users.create(params, [options], [callback])](#createuser)

2. [netField.users.createselfuser(params, [language], [options], [callback])](#createselfuser)

3. [netField.users.getAll(organisationId, [page], [limit], [sortBy], [sortOrder], [callback])](#getusers)

4. [netField.users.get(userId, organisationId, [callback])](#getuser)

5. [netField.users.getverifyuser(email, captchaToken, language[callback])](#getverifyuser)

6. [netField.users.suggest(params, [callback])](#suggestuser)

7. [netField.users.update(userId, params, [options], [callback])](#updateuser)

8. [netField.users.verifyusers(params, [language], [callback])](#verifyuser)

9. [netField.users.delete(userId, [callback])](#deleteuser)

10. [netField.users.profile.get([callback])](#getprofile)

11. [netField.users.profile.update(params, [options], [callback])](#updateprofile)

12. [netField.users.sensoredge.create(params, [language], [callback])](#createtempuser)

13. [netField.users.sensoredge.completeRegistration(params, [language], [callback])](#completeregistration)

14. [netField.users.sensoredge.verify(params, [language], [callback])](#verifytempuser)

15. [netField.users.sensoredge.getverifytempuser(email, [language], [callback])](#getverifytempuser)

16. [netField.users.profile.notificationEmails.add(params, [callback])](#addnotificationemail)

17. [netField.users.profile.notificationEmails.getAll([page], [limit], [sortBy], [sortOrder], [callback])](#getnotificationemails)

18. [netField.users.profile.notificationEmails.delete(notificationEmailId, [language], [callback])](#deletenotificationemail)

19. [netField.users.invite.create(params, [callback])](#inviteuser)

20. [netField.users.invite.update(params, [language], [callback])](#changeInvitationStatus)

21. [netField.users.invite.getAll(organisationId, [page], [limit], [sortBy], [sortOrder], [callback])](#getusersinvitations)

22. [netField.users.invite.revoke(invitationId, params, [callback])](#revokeuserinvitation)

23. [netField.users.invite.delete(invitationId, [callback])](#deleteuserinvitation)

24. [netField.users.workspaces.getAll(organisationId, [page], [limit], [sortBy], [sortOrder], [callback])](#getworkspaceusers)

25. [netField.users.workspaces.delete(userId, organisationId, [callback])](#removeuserfromworkspace)

26. [netField.users.preferences.get([callback])](#getuserpreferences)

27. [netField.users.preferences.update(params, [callback])](#updateuserpreferences)

28. [netField.users.preferences.delete([callback])](#deleteuserpreferences)

## Resource Usage

### createuser

    Create new user

```javascript
/**
 * @param {{organisationId: number,
 * password: string,
 * firstName: string,
 * lastName: string,
 * email: string,
 * jobTitle: string,
 * department: string,
 * mobilePhone: string,
 * telephone: string,
 * street: string,
 * houseNumber: string,
 * addressSupplement: string,
 * zipCode: string,
 * city: string,
 * state: string,
 * country: string,
 * statusId: number,
 * editable: boolean,
 * deletable: boolean}} params
 * @param {any} options optional
 * @param {function} callback optional
 */
netField.users.create(params, [options], [callback]);
```

### createselfuser

    Self registration for user (uses public token)

```javascript
/**
 * @param {{organisationId: number,
 * password: string,
 * firstName: string,
 * lastName: string,
 * email: string,
 * jobTitle: string,
 * department: string,
 * mobilePhone: string,
 * telephone: string,
 * street: string,
 * houseNumber: string,
 * addressSupplement: string,
 * zipCode: string,
 * city: string,
 * state: string,
 * country: string,
 * captchaToken: string}} params
 * @param {string} language
 * @param {any} options optional
 * @param {function} callback optional
 */
netField.users.createselfusers(params, [language], [options], [callback]);
```

### getusers

    Get users by organisationId

```javascript
/**
 * @param {number} organisationId
 * @param {number} page optional
 * @param {number} limit optional
 * @param {string} sortBy optional
 * @param {string} sortOrder optional (asc, desc)
 * @param {function} callback optional
 */
netField.users.getAll(organisationId, page, limit, sortBy, sortOrder, [callback]);
```

### getuser

    Get user by userId

```javascript
/**
 * @param {number} userId
 *  * @param {number} organisationId
 * @param {function} callback optional
 */
netField.users.get(userId, organisationId, [callback]);
```

### suggestuser

    Suggest user

```javascript
/**
 * @param {{search: string}} params
 * @param {function} callback optional
 */
netField.users.suggest(params, [callback]);
```

### getverifyuser

    Resend user verification code to email

```javascript
/**
 * @param {string} email
 * @param {string} captchaToken
 * @param {string} language
 * @param {function} callback optional
 */
netField.users.getverifyuser(email, captchaToken, language[callback]);
```

### updateuser

    Update user

```javascript
/**
 * @param {number} userId
 * @param {{organisationId: number,
 * password: string,
 * statusId: number,
 * firstName: string,
 * lastName: string,
 * email: string,
 * jobTitle: string,
 * department: string,
 * mobilePhone: string,
 * telephone: string,
 * street: string,
 * houseNumber: string,
 * addressSupplement: string,
 * zipCode: string,
 * city: string,
 * state: string,
 * country: string,
 * editable: boolean,
 * deletable: boolean,
 * receiveSensorEdgeNotifications: boolean}} params
 * @param {any} options optional
 * @param {function} callback optional
 */
netField.users.update(userId, params, [options], [callback]);
```

### verifyuser

    Verify user by code send trough email

```javascript
/**
 * @param {{email: string, code: string}} params
 * @param {string} language optional
 * @param {function} callback optional
 */
netField.users.verifyuser(params, [language], [callback]);
```

### deleteuser

    Delete User

```javascript
/**
 * @param {number} userId
 * @param {function} callback optional
 */
netField.users.delete(userId, [callback]);
```

### getprofile

    Get user profile

```javascript
/**
 * @param {function} callback optional
 */
netField.users.profile.get([callback]);
```

### updateprofile

    Update user profile

```javascript
/**
 * @param {{organisationId: number,
 * password: string,
 * statusId: number,
 * firstName: string,
 * lastName: string,
 * email: string,
 * jobTitle: string,
 * department: string,
 * mobilePhone: string,
 * telephone: string,
 * street: string,
 * houseNumber: string,
 * addressSupplement: string,
 * zipCode: string,
 * city: string,
 * state: string,
 * country: string,
 * editable: boolean,
 * deletable: boolean,
 * receiveSensorEdgeNotifications: boolean,
 * oldPassword: string}} params
 * @param {any} options optional
 * @param {function} callback optional
 */
netField.users.profile.update(params, [options], [callback]);
```

### createtempuser

    Create new tempUser

```javascript
/**
 * @param {{email: string, password: string, captchaToken: string}} params
 * @param {string} language optional
 * @param {function} callback optional
 */
netField.users.sensoredge.create(params, [language], [callback]);
```

### completeregistration

    Generate sensor edge registration access token

```javascript
/**
 * @param {{firstName: string,
 * lastName: string,
 * jobTitle: string,
 * department: string,
 * mobilePhone: string,
 * telephone: string,
 * street: string,
 * houseNumber: string,
 * addressSupplement: string,
 * zipCode: string,
 * city: string,
 * state: string,
 * country: string,
 * companyName: string,
 * receiveSensorEdgeNotifications: boolean,
 * }} params
 * @param {string} language
 * @param {function} callback optional
 */
netField.users.sensoredge.completeRegistration(params, [language], [callback]);
```

### verifytempuser

    Verify a user by the code sent through email

```javascript
/**
 * @param {{email: string, code: string}} params
 * @param {string} language
 * @param {function} callback optional
 */
netField.users.sensoredge.verify(params, [language], [callback]);
```

### getverifytempuser

    Resend tempUser verification code to email

```javascript
/**
 * @param {string} email
 * @param {string} language
 * @param {function} callback optional
 */
netField.users.sensoredge.getverifytempuser(email, language[callback]);
```

### addnotificationemail

    Add notification email to current user profile

```javascript
/**
 * @param {{email: string}} params
 * @param {function} callback optional
 */
netField.users.profile.notificationEmails.add(params, [callback]);
```

### getnotificationemails

    Get user profile notification emails

```javascript
/**
 * @param {number} page optional
 * @param {number} limit optional
 * @param {String} sortBy optional
 * @param {String} sortOrder optional (asc, desc)
 * @param {function} callback optional
 */
netField.users.profile.notificationEmails.getAll(page, limit, sortBy, sortOrder, callback);
```

### deletenotificationemail

    Delete notification email

```javascript
/**
 * @param {number} notificationEmailId
 * @param {string} language
 * @param {function} callback optional
 */
netField.users.profile.notificationEmails.delete(notificationEmailId, [language], [callback]);
```

### inviteuser

    Send invitation email to the user

```javascript
/**
 * @param {emails: Array<string>, organisationId: number} params
 * @param {function} callback optional
 */
netField.users.invite.create(params, [callback]);
```

### changeInvitationStatus

    Accept/decline invitation

```javascript
/**
 * @param {{email: string, code: string, accept: boolean}} params
 * @param {string} language
 * @param {function} callback optional
 */
netField.users.invite.update(params, [language], [callback]);
```

### getusersinvitations

    Get all users invitations by organisationId

```javascript
/**
 * @param {number} organisationId
 * @param {number} page optional
 * @param {number} limit optional
 * @param {String} sortBy optional
 * @param {String} sortOrder optional (asc, desc)
 * @param {function} callback optional
 */
netField.users.invite.getAll(organisationId, page, limit, sortBy, sortOrder, callback);
```

### revokeuserinvitation

    Revoke user invitation

```javascript
/**
 * @param {number} invitationId
 * @param {{revoke: boolean}} params
 * @param {function} callback optional
 */
netField.users.invite.revoke(invitationId, params, [callback]);
```

### deleteuserinvitation

    Delete user invitation

```javascript
/**
 * @param {number} invitationId
 * @param {function} callback optional
 */
netField.users.invite.delete(invitationId, [callback]);
```

### getworkspaceusers

    Get all workspace users by organisationId

```javascript
/**
 * @param {number} organisationId
 * @param {number} page optional
 * @param {number} limit optional
 * @param {String} sortBy optional
 * @param {String} sortOrder optional (asc, desc)
 * @param {function} callback optional
 */
netField.users.workspaces.getAll(organisationId, page, limit, sortBy, sortOrder, callback);
```

### removeuserfromworkspace

    Remove user from workspace

```javascript
/**
 * @param {number} userId
 * @param {number} organisationId
 * @param {function} callback optional
 */
netField.users.workspaces.delete(userId, organisationId, [callback]);
```

### getuserpreferences

    Get user preferences

```javascript
/**
 * @param {function} callback optional
 */
netField.users.preferences.get([callback]);
```

### updateuserpreferences

    Update user preferences

```javascript
/**
 * @param {object} params
 * @param {function} callback optional
 */
netField.users.preferences.put(params, [callback]);
```

### deleteuserpreferences

    Delete user preferences

```javascript
/**
 * @param {function} callback optional
 */
netField.users.preferences.delete([callback]);
```
