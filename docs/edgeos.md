# EdgeOS

## Overview
*The resources responsible for installing and managing EdgeOS*

## Available Resources

1. [netField.edgeos.getEdgeos(page, limit, sortBy, sortOrder, [callback])](#getEdgeos)

2. [netField.edgeos.get(edgeosId, [callback])](#getSingleEdgeos)

3. [netField.edgeos.deletegetEdgeos(edgeosId, [callback])](#deleteEdgeos)

4. [netField.edgeos.creategetEdgeos(formData, [callback])](#createEdgeos)

5. [netField.edgeos.updategetEdgeos(edgeosId, formData, [callback])](#updateEdgeos)

6. [netField.edgeos.getEdgeosPlatforms([callback])](#getEdgeosPlatforms)

## Resource Usage

### getEdgeos

    Get all EdgeOS

```javascript
/**
 * @param {any} params 
 * @param {any} options optional
 * @param {function} callback optional
*/
netField.edgeos.getAll(params, [options], [callback])
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
 * @param {object} formData
 * @param {function} callback optional
*/
netField.edgeos.create(formData, [callback])
```

### updateEdgeos

    Update a EdgeOS

```javascript
/**
 * @param {string} edgeosId
 * @param {object} formData
 * @param {function} callback optional
*/
netField.edgeos.update(edgeosId, formData, [callback]);
```

### getEdgeosPlatforms

Get all available edge OS platforms

```javascript
/** 
 * @param {function} callback optional
 */
netField.edgeos.getEdgeosPlatforms([callback]);
```
