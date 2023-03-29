# Keys

## Overview
*The resources responsible for installing and managing keys*

## Available Resources

1. [netField.keys.create(params, [callback])](#createkey)

2. [netField.keys.delete(keyId, [callback])](#deletekey)

3. [netField.keys.getAll(organisationId, [page], [limit], [sortBy], [sortOrder], [callback])](#getkeys)

4. [netField.keys.get(keyId, [callback])](#getkey)

5. [netField.keys.update(keyId, params, [callback])](#updatekey)

6. [netField.keys.getpermissions([callback])](#getkeypermissions)

7. [netField.keys.createsensoredgekey(params, [callback])](#createsensoredgekey)

8. [netField.keys.getConnectionInfo([callback])](#getKeyConnectionInfo)

9. [netField.keys.getConnectionDevices([page], [limit], [sortBy], [sortOrder], [deviceIds], [callback])](#getKeyConnectionDevices)

## Resource Usage

### createkey

    Create key

```javascript
/**
 * @param {{organisationId: number,
 * name: string,
 * type: string,
 * resources: Array<{resource: string, permissions: Array<string>}>,
 * expiresAt: string}} params
 * @param {function} callback optional
*/
netField.keys.create(params, [callback])
```

### deletekey

    Delete key by keyId

```javascript
/*
 * @param {keyId} string
 * @param {function} callback optional
*/
netField.keys.delete(keyId, [callback])
```

### getkeys

    Get all keys by organisationId

```javascript
/**
 * @param {number} organisationId
 * @param {number} page optional
 * @param {number} limit optional
 * @param {string} sortBy optional
 * @param {string} sortOrder optional
 * @param {function} callback optional
*/
netField.keys.getAll(organisationId, page, limit, sortBy, sortOrder, [callback])
```

### getkey

    Get key by keyId

```javascript
/**
 * @param {keyId} string
 * @param {function} callback optional
*/
netField.keys.get(keyId, [callback])
```

### updatekey

    Update api key

```javascript
/**
 * @param {sting} keyId
 * @param {{organisationId: number,
 * name: string,
 * type: string,
 * resources: Array<{resource: string, permissions: Array<string>}> }} params
 * @param {function} callback optional
*/
netField.keys.update(keyId, params, [callback])
```

### getkeypermissions

    Get api key resource data

```javascript
/**
 * @param {function} callback optional
*/
netField.keys.getpermissions([callback])
```

### createsensoredgekey

    Create a key for SensorEdge tenant

```javascript
/**
 * @param {{organisationId: number, name: string}} params
 * @param {function} callback optional
*/
netField.keys.createSensorEdgeKey(params, [callback])
```

### getKeyConnectionInfo

    Get connection information for Data Service using API key.
    authStrategy: 'key'

```javascript
/**
 * @param {function} callback optional
*/
netField.keys.getConnectionInfo([callback])
```

### getKeyConnectionDevices

    Get devices in Data Service that are accessible using API key.
    authStrategy: 'key'

```javascript
/**
 * @param {number} page optional
 * @param {number} limit optional
 * @param {string} sortBy optional
 * @param {string} sortOrder optional
 * @param {Array<string>} deviceIds optional
 * @param {function} callback optional
*/
netField.keys.getConnectionDevices([page], [limit], [sortBy], [sortOrder], [deviceIds], [callback])
```
