# Roles

## Overview
*The resources responsible for installing and managing roles*

## Available Resources

1. [netField.roles.create(organisationId, params, [callback])](#createrole)

2. [netField.roles.get(organisationId, roleName, [callback])](#getrole)

3. [netField.roles.update(organisationId, params, [callback])](#updaterole)

4. [netField.roles.getAll(organisationId, page, [callback])](#getroles)

5. [netField.roles.delete(organisationId, roleName, [callback])](#deleterole)

## Resource Usage

### createrole

    Create role

```javascript
/**
 * @param {number} organisationId
 * @param {object} params
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
 * @param {object} params
 * @param {function} callback optional
*/
netField.roles.update(organisationId, params, [callback])
```

### getroles

    Get roles by organisationId

```javascript
/**
 * @param {number} organisationId
 * @param {number} page
 * @param {function} callback optional
*/
netField.roles.getAll(organisationId, page, [callback])
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
