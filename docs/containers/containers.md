# Containers

## Overview
*The resources responsible for creating and managing 'appstore' containers*

## Available Resources

1. [netField.containers.getAll([page], [limit], [sortBy], [sortOrder], [includeDisabled], [category], [organisationName], [purchased], [callback])](#getAll)

2. [netField.containers.get(containerId, [callback])](#get)

3. [netField.containers.create(params, [options], [callback])](#create)

4. [netField.containers.update(containerId, params, [options], [callback])](#update)

5. [netField.containers.delete(containerId, [deleteContainerReferences], [callback])](#delete)

6. [netField.containers.disable(containerId, params, [callback])](#disable)

7. [netField.containers.envVariables.getAll(containerId, installedContainerId, [callback])](#getAllEnv)

## Resource Usage

### getAll

    Get list of 'Appstore' containers

```javascript
/**
 * Get containers from the appstore
 * @param {number} page optional
 * @param {number} limit optional
 * @param {string} sortBy optional
 * @param {string} sortOrder optional
 * @param {boolean} includeDisabled optional
 * @param {Array<string>} category optional
 * @param {Array<string>} organisationName optional
 * @param {boolean} purchased optional
 * @param {function} callback optional
*/
netField.containers.getAll(page, limit, sortBy, sortOrder, includeDisabled, category, organisationName, purchased, [callback])
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
 * @param {{organisationId: string,
 * displayName : string,
 * containerName : string,
 * containerAccess: string,
 * image: file,
 * icon: string,
 * type: string,
 * restartPolicy: string,
 * desiredStatus: string,
 * registryType: string,
 * credentials: object,
 * category: string,
 * settingsPageId: string,
 * shortDescription: string,
 * description: string,
 * links: Array,
 * versions: Array}} params
 * @param {any} options optional
 * @param {function} callback optional
*/
netField.containers.create(params, [options], [callback])
```

### update

    Updates a container in the 'appstore'

```javascript
/**
 * @param {string} containerId
 * @param {{organisationId: string,
 * displayName : string,
 * containerName : string,
 * containerAccess: string,
 * image: file,
 * icon: string,
 * type: string,
 * restartPolicy: string,
 * desiredStatus: string,
 * registryType: string,
 * credentials: object,
 * category: string,
 * settingsPageId: string,
 * shortDescription: string,
 * description: string,
 * links: Array }} params
 * @param {any} options optional
 * @param {function} callback optional
*/
netField.containers.update(containerId, params, [options], [callback])
```

### delete

    Delete a container from the 'appstore'

```javascript
/**
 * @param {string} containerId
 * @param {boolean} deleteContainerReferences optional
 * @param {function} callback optional
*/
netField.containers.delete(containerId, [deleteContainerReferences], [callback])
```

### disable

```javascript
/**
 * @param {string} containerId
 * @param {{isDisabled: boolean}} params
 * @param {function} callback optional
*/
netField.containers.disable(containerId, params, [callback])
```

### getAllEnv

    Get all container environment variable suggestions

```javascript
/**
 * @param {string} containerId
 * @param {string} installedContainerId optional
 * @param {function} callback optional
*/
netField.containers.envVariables.getAll(containerId, installedContainerId, [callback])
```