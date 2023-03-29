# EdgeOS

## Overview
*The resources responsible for installing and managing EdgeOS*

## Available Resources

1. [netField.edgeos.getEdgeos([page], [limit], [sortBy], [sortOrder], [platform], [platformKey], [name], [version], [callback])](#getEdgeos)

2. [netField.edgeos.get(edgeosId, [callback])](#getSingleEdgeos)

3. [netField.edgeos.deletegetEdgeos(edgeosId, [callback])](#deleteEdgeos)

4. [netField.edgeos.creategetEdgeos(formData, [callback])](#createEdgeos)

5. [netField.edgeos.updategetEdgeos(edgeosId, formData, [callback])](#updateEdgeos)

6. [netField.edgeos.getPlatforms([callback])](#getAvailablePlatforms)

## Resource Usage

### getEdgeos

    Get all EdgeOS

```javascript
/**
 * @param {number} page optional
 * @param {number} limit optional
 * @param {string} sortBy optional
 * @param {string} sortOrder optional (asc, desc)
 * @param {string} platform optional
 * @param {number} platformKey optional
 * @param {string} name optional
 * @param {string} version optional
 * @param {function} callback optional
*/
netField.edgeos.getAll(page, limit, sortBy, sortOrder, platform, platformKey, name, version, [callback])
```

### getSingleEdgeos

    Get single EdgeOS

```javascript
/**
 * @param {string} edgeosId
 * @param {function} callback optional
*/
netField.edgeos.get(edgeosId, [callback])
```

### getAvailablePlatforms

    Get all available edge OS platforms

```javascript
/** 
 * @param {function} callback optional
*/
netField.edgeos.getPlatforms([callback])
```

### deleteEdgeos

    Delete a EdgeOS by Id

```javascript
/**
 * @param {string} edgeosId
 * @param {function} callback optional
*/
netField.edgeos.delete(edgeosId, [callback])
```

### createEdgeos

    Create a EdgeOS

```javascript
/**
 * @param {{version: string, name: string, platform: string, type: string, file: file, notes: string, links: Array<object>}} formData
 * @param {function} callback optional
*/
netField.edgeos.create(formData, [callback])
```

### updateEdgeos

    Update a EdgeOS

```javascript
/**
 * @param {string} edgeosId
 * @param {{version: string, name: string, platform: string, type: string, notes: string, links: Array<object>}} formData
 * @param {function} callback optional
*/
netField.edgeos.update(edgeosId, formData, [callback]);
```
