# Permissions

## Overview
*The resources responsible for installing and managing permissions*

## Available Resources

1. [netField.permissions.devices(params, [callback])](#devicepermissions)

2. [netField.permissions.containers(params, [callback])](#containerpermissions)

3. [netField.permissions.organisations(params, [callback])](#organisationpermissions)

4. [netField.permissions.users(params, [callback])](#userpermissions)

5. [netField.permissions.roles(params, [callback])](#rolepermissions)

6. [netField.permissions.tenants(params, [callback])](#tenantspermissions)

7. [netField.permissions.edgeos(params, [callback])](#edgeospermissions)

8. [netField.permissions.groups(params, [callback])](#groupspermissions)

9. [netField.permissions.webhooks(params, [callback])](#webhookspermissions)

10. [netField.permissions.permissions(resource, [callback])](#checkpermissions)

## Resource Usage

### devicepermissions

    Check devices permissions

```javascript
/**
 * @param {{deviceIds: Array<string>, resources: Array<string>}} params
 * @param {function} callback optional
*/
netField.permissions.devices(params, [callback])
```

### containerpermissions

    Check containers permissions

```javascript
/**
 * @param {{containerIds: Array<string>, resources: Array<string>}} params
 * @param {function} callback optional
*/
netField.permissions.containers(params, [callback])
```

### organisationpermissions

    Check organisations permissions

```javascript
/**
 * @param {{organisationIds: Array<number>, resources: Array<string>}} params
 * @param {function} callback optional
*/
netField.permissions.organisations(params, [callback])
```

### userpermissions

    Check users permissions

```javascript
/**
 * @param {{userIds: Array<number>, resources: Array<string>}} params
 * @param {function} callback optional
*/
netField.permissions.users(params, [callback])
```

### rolepermissions

    Check roles permissions

```javascript
/**
 * @param {{roles: Object, resources: Array<string>}} params
 * @param {function} callback optional
*/
netField.permissions.roles(params, [callback])
```

### tenantspermissions

    Check tenants permissions

```javascript
/**
 * @param {{tenantIds: Array<number>, resources: Array<string>}} params
 * @param {function} callback optional
*/
netField.permissions.tenants(params, [callback])
```

### edgeospermissions

 Check EdgeOS permissions

```javascript
/**
 * @param {{edgeosIds: Array<String>, resources: Array<string>}} params
 * @param {function} callback optional
*/
netField.permissions.edgeos(params, [callback])
```

### groupspermissions

 Check device/container group permissions

```javascript
/**
 * @param {{groupIds: Array<number>, resources: Array<string>}} params
 * @param {function} callback optional
*/
netField.permissions.groups(params, [callback])
```

### webhookspermissions

 Check webhooks permissions

```javascript
/**
 * @param {{webhookIds: Array<number>, resources: Array<string>}} params
 * @param {function} callback optional
*/
netField.permissions.webhooks(params, [callback])
```

### checkpermissions

 Check permissions and security levels per resource

```javascript
/**
 * @param {string} resource optional
 * @param {function} callback optional
*/
netField.permissions.permissions(resource, [callback])
```
