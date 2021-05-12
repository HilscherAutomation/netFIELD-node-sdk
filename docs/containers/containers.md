# Containers

## Overview
*The resources responsible for creating and managing 'appstore' containers*

## Available Resources

1. [netField.containers.getAll([page, limit, sortBy, sortOrder, callback])](#getAll)

2. [netField.containers.get(containerId, [callback])](#get)

3. [netField.containers.create(params, [options], [callback])](#create)

4. [netField.containers.update(params, [options], [callback])](#update)

5. [netField.containers.delete(containerId, [callback])](#delete)

6. [netField.containers.share(containerId, organisationIds, [callback])](#share)

7. [netField.containers.unshare(containerId, organisationId, [callback])](#unshare)

## Resource Usage

### getAll

    Get list of 'Appstore' containers

```javascript
/**
 * Get containers from the appstore
 * @param {any} options optional
 * @param {function} callback optional
*/
netField.containers.getAll([options], [callback])
```

### get

    Get a container from the 'appstore'

```javascript
/**
 * @param {string} containerId
 * @param {function} callback optional
*/
netField.containers.get(containerId, [callback])
```

### create

    Adds a new container to the 'appstore'

```javascript
/**
 * @param {any} params
 * @param {any} options optional
 * @param {function} callback optional
*/
netField.containers.create(params, [options], [callback])
```

### update

    Updates a container in the 'appstore'

```javascript
/**
 * @param {any} params
 * @param {any} options optional
 * @param {function} callback optional
*/
netField.containers.update(params, [options], [callback])
```

### delete

    Delete a container from the 'appstore'

```javascript
/**
 * @param {string} containerId
 * @param {function} callback optional
*/
netField.containers.delete(containerId, [callback])
```

### share

    Share container with different organisations

```javascript
/**
 * @param {string} containerId
 * @param {Array<number>} organisationIds
 * @param {function} callback optional
*/
netField.containers.share(containerId, organisationIds, [callback])
```

### unshare

    Unshare container with organisation

```javascript
/**
 * @param {string} containerId
 * @param {number} organisationId
 * @param {function} callback optional
*/
netField.containers.unshare(containerId, organisationId, [callback])
```