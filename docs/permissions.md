# Permissions

## Overview
*The resources responsible for installing and managing permissions*

## Available Resources

1. [netField.permissions.devices(deviceIds, [callback])](#devicepermissions)

2. [netField.permissions.containers(containerIds, [callback])](#containerpermissions)

3. [netField.permissions.organisations(organisationIds, [callback])](#organisationpermissions)

4. [netField.permissions.users(userIds, [callback])](#userpermissions)

5. [netField.permissions.roles(roles, [callback])](#rolepermissions)

6. [netField.permissions.tenants(tenantIds, [callback])](#tenantspermissions)

7. [netField.permissions.edgeos(edgeosIds, [callback])](#edgeospermissions)

8. [netField.permissions.groups(groupIds, [callback])](#groupspermissions)

## Resource Usage

### organisationpermissions

    Check organisations permissions

```javascript
/**
 * @param {number[]} organisationId
 * @param {function} callback optional
*/
netField.permissions.organisations(organisationId, [callback])
```

### userpermissions

    Check users permissions

```javascript
/**
 * @param {number[]} userIds
 * @param {function} callback optional
*/
netField.permissions.users(userIds, [callback])
```

### rolepermissions

    Check roles permissions

```javascript
/**
 * @param {any} roles
 * @param {function} callback optional
*/
netField.permissions.roles(roles, [callback])
```

### tenantspermissions

    Check tenants permissions

```javascript
/**
 * @param {number[]} tenantIds
 * @param {function} callback optional
*/
netField.permissions.tenants(tenantIds, [callback])
```

### edgeospermissions

 Check EdgeOS permissions

```javascript
/**
 * @param {string[]} edgeosId
 * @param {function} callback optional
*/
netField.permissions.edgeos(edgeosIds, [callback])
```

### groupspermissions

 Check device/container group permissions

```javascript
/**
 * @param {string[]} groupIds
 * @param {function} callback optional
*/
netField.permissions.groups(groupIds, [callback])
```
