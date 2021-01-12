# Keys

## Overview
*The resources responsible for installing and managing keys*

## Available Resources

1. [netField.keys.create(params, [callback])](#createkey)

2. [netField.keys.delete(keyId, [callback])](#deletekey)

3. [netField.keys.getkeys(organisationId, page, limit, sortBy, sortOrder, [callback])](#getkeys)

4. [netField.keys.getkey(keyId, [callback])](#getkey)

5. [netField.keys.updatekey(keyId, params, [callback])](#updatekey)

6. [netField.keys.getkeypermissions([callback])](#getkeypermissions)

7. [netField.keys.createsensoredgekey([callback])](#createsensoredgekey)

## Resource Usage

### createkey

    Create key

```javascript
/**
 * @param {object} params
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
 * @param {organisationId} number
 * @param {number} page
 * @param {number} limit
 * @param {string} sortBy
 * @param {string} sortOrder
 * @param {function} callback optional
*/
netField.keys.getkeys(organisationId, page, limit, sortBy, sortOrder, [callback])
```

### getkey

    Get key by keyId

```javascript
/**
 * @param {keyId} string
 * @param {function} callback optional
*/
netField.keys.getkey(keyId, [callback])
```

### updatekey

    Update api key

```javascript
/**
 * @param {keyId} string
 * @param {object} params
 * @param {function} callback optional
*/
netField.keys.updatekey(keyId, params, [callback])
```

### getkeypermissions

    Get api key resource data

```javascript
/**
 * @param {function} callback optional
*/
netField.keys.getkeypermissions([callback])
```

### createsensoredgekey

    Create a key for SensorEdge tenant

```javascript
/**
 * @param {object} params
 * @param {function} callback optional
*/
netField.keys.createsensoredgekey(params, [callback])
```
