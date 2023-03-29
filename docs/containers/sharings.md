# Container sharing

## Overview
*The resources responsible for managing container sharing

## Available Resources

1. [netField.containers.sharings.share(params, [callback])](#share)

2. [netField.containers.sharings.unshare(sharingId, [callback])](#unshare)

3. [netField.containers.sharings.get(sharingId, [callback])](#getsharing)

4. [netField.containers.sharings.getAll(containerId, [page], [limit], [sortBy], [sortOrder], [callback])](#getall)

5. [netField.containers.sharings.update(sharingId, params, [callback])](#updatesharing)

6. [netField.containers.versions.sharings.unshare(sharingId, params, [callback])](#unshareVersion)

## Resource Usage

### share

    Share container with other organisation

```javascript
/**
 * @param {{containerId: string, 
 * versionIds: string[],
 * sharingOrganisationId: number,
 * targetOrganisationId: number,
 * limit: number}} params
 * @param {function} callback optional
*/
netField.containers.sharings.share(params, [callback])
```

### unshare

    Unshare container with organisation

```javascript
/**
 * @param {number} sharingId
 * @param {function} callback optional
*/
netField.containers.sharings.unshare(sharingId, [callback])
```

### getsharing

    Get container sharing by sharingId

```javascript
/**
 * @param {number} sharingId
 * @param {function} callback optional
*/
netField.containers.sharings.get(sharingId, [callback])
```
### getall

    Get container sharings by containerId

``` javascript
/**
 * @param {string} containerId
 * @param {number} page optional
 * @param {number} limit optional
 * @param {string} sortBy optional
 * @param {string} sortOrder optional (asc, desc)
 * @param {function} callback optional
 */
netField.containers.sharings.getAll(containerId, page, limit, sortBy, sortOrder, [callback])
```

### updatesharing

    Update container sharing

```javascript
/**
 * @param {number} sharingId
 * @param {{limit: number}} params
 * @param {function} callback optional
*/
netField.containers.sharings.update(sharingId, params, [callback])
```
### unshareVersion

    Unshare container version with organisation

```javascript
/**
 * @param {number} sharingId
 * @param {{ version: string }} params
 * @param {function} callback optional
*/
netField.containers.versions.sharings.unshare(sharingId, params, [callback])
```
