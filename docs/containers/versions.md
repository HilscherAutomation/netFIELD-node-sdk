# Container versioning

## Overview

*The resources responsible for creating and managing container versions

## Available Resources

1. [netField.containers.versions.createversion(params, containerId, [options], [callback])](#create)

2. [netField.containers.versions.deleteversion(containerId, versionId, [callback])](#delete)

3. [netField.containers.versions.getversion(containerId, versionId, [callback])](#get)

4. [netField.containers.versions.getallversions(containerId, [page], [limit], [sortBy], [sortOrder], [callback])](#getAll)

5. [netField.containers.updateversion(params, containerId, versionId, [options], [callback])](#update)

## Resource Usage

### create

    Create a manifest container

``` javascript
/**
 * @param {integer} organisationId
 * @param {string} containerId
 * @param {object} params
 * @param {object} options optional
 * @param {function} callback optional
 */
netField.containers.versions.createversion(organisationId, containerId, params, [options], [callback])
```

### delete

     Delete version from container

``` javascript
/**
 * @param {string} containerId
 * @param {string} versionId
 * @param {function} callback optional
 */
netField.containers.versions.deleteversion(containerId, versionId, [callback])
```

### get

    Get specific version for container

``` javascript
/**
 * @param {string} containerId
 * @param {string} versionId
 * @param {function} callback optional
 */
netField.containers.versions.getversion(containerId, versionId, [callback])
```

### getAll

    Get all container versions

``` javascript
/**
 * @param {string} containerId
 * @param {number} page (optional)
 * @param {number} limit (optional)
 * @param {string} sortBy (optional)
 * @param {string} sortOrder asc, desc (optional)
 * @param {function} callback (optional)
 */
netField.containers.versions.getallversions(containerId, page, limit, sortBy, sortOrder, [callback])
```

### update

    Update container version

``` javascript
/**
 * @param {object} params
 * @param {string} containerId
 * @param {string} versionId
 * @param {object} options optional 
 * @param {function} callback optional
 */
netField.containers.versions.updateversion(params, containerId, versionId, [options], [callback])
```