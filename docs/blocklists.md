# blocklists

## Overview
*The resources responsible for managing IP address blocklists*

## Available Resources

1. [netField.blocklists.create(params, [callback])](#createBlocklist)
2. [netField.blocklists.delete(blocklistId, [callback])](#deleteBlocklist)
3. [netField.blocklists.update(blocklistId, params, [callback])](#updateBlocklist)
4. [netField.blocklists.get(blocklistId, [callback])](#getBlocklist)
5. [netField.blocklists.getAll([page], [limit], [sortBy], [sortOrder], [callback])](#getblocklists)

## Resource Usage

### createBlocklist

    Create an IP address blocklists

```javascript
/**
 * @param {{name: string, ipAddress: string, description: string}} params
 * @param {function} callback optional
*/
netField.blocklists.create(params, [callback])
```

### deleteBlocklist

    Delete an IP address blocklists

```javascript
/**
 * @param {string} blocklistId
 * @param {function} callback optional
*/
netField.blocklists.delete(blocklistId, [callback])
```

### updateBlocklist

    Update an IP address blocklists

```javascript
/**
 * @param {string} blocklistId
 * @param {{name: string, description: string}} params
 * @param {function} callback optional
*/
netField.blocklists.update(blocklistId, params, [callback])
```

### getBlocklist

    Get an IP address blocklists by id

```javascript
/**
 * @param {string} blocklistId
 * @param {function} callback optional
*/
netField.blocklists.get(blocklistId, [callback])
```

### getblocklists

    Get all user IP address blocklists

```javascript
/**
 * @param {number} page optional
 * @param {number} limit optional
 * @param {string} sortBy optional
 * @param {string} sortOrder optional
 * @param {function} callback optional
*/
netField.blocklists.getAll(page, limit, sortBy, sortOrder, [callback])
```
