# Roles

## Overview
*The resources responsible for installing and managing roles*

## Available Resources

1. [netField.roles.create(organisationId, params, [callback])](#createrole)

2. [netField.roles.get(organisationId, roleName, [callback])](#getrole)

3. [netField.roles.update(organisationId, role, params, [callback])](#updaterole)

4. [netField.roles.getAll(organisationId, [page], [limit], [sortBy], [sortOrder], [callback])](#getroles)

5. [netField.roles.delete(organisationId, roleName, [callback])](#deleterole)

6. [netField.users.roles.add(organisationId, userId, roleName, [callback])](#addroletouser)

7. [netField.users.roles.getAll(userId, organisationId, [page], [limit], [sortBy], [sortOrder], [callback])](#getuserroles)

8. [netField.users.roles.delete(organisationId, userId, roleName, [callback])](#deleteuserrole)

## Resource Usage

### createrole

    Create role

```javascript
/**
 * @param {number} organisationId
 * @param {{role: string, resource: Array<{resource: string, permissions: Array<string>}>}} params
 * @param {function} callback optional
*/
netField.roles.create(organisationId, params, [callback])
```

### getrole

    Get role by organisationId and roleName

```javascript
/**
 * @param {number} organisationId
 * @param {string} roleName
 * @param {function} callback optional
*/
netField.roles.get(organisationId, roleName, [callback])
```

### updaterole

    Update role

```javascript
/**
 * @param {number} organisationId
 * @param {string} role
 * @param {{resource: Array<{resource: string, permissions: Array<string>}>}} params
 * @param {function} callback optional
*/
netField.roles.update(organisationId, role, params, [callback])
```

### getroles

    Get roles by organisationId

```javascript
/**
 * @param {number} organisationId
 * @param {number} page optional
 * @param {number} limit optional
 * @param {string} sortBy optional
 * @param {string} sortOrder optional
 * @param {function} callback optional
*/
netField.roles.getAll(organisationId, page, limit, sortBy, sortOrder, [callback])
```

### deleterole

    Delete role

```javascript
/**
 * @param {number} organisationId
 * @param {string} roleName
 * @param {function} callback optional
*/
netField.roles.delete(organisationId, roleName, [callback])
```

### addroletouser

    Add role to user

```javascript
/**
 * @param {number} organisationId
 * @param {number} userId
 * @param {string} roleName
 * @param {function} callback optional
*/
netField.users.roles.add(organisationId, userId, roleName, [callback])
```

### getuserroles

    Get users roles

```javascript
/**
 * @param {number} userId
 * @param {number} organisationId
 * @param {number} page optional
 * @param {number} limit optional
 * @param {string} sortBy optional
 * @param {string} sortOrder optional
 * @param {function} callback optional
*/
netField.users.roles.getAll(userId, organisationId, page, limit, sortBy, sortOrder, [callback])
```

### deleteuserrole

    Delete role from user

```javascript
/**
 * @param {number} organisationId
 * @param {number} userId
 * @param {string} roleName
 * @param {function} callback optional
*/
netField.users.roles.delete(organisationId, userId, roleName, [callback])
```
