# Containers

## Overview
*The resources responsible for creating and managing sensor edge containers*

## Available Resources

1. [netField.sensoredgemanifest.getAll([page, limit, sortBy, sortOrder, callback])](#getAll)

2. [netField.sensoredgemanifest.get(containerId, [callback])](#get)

3. [netField.sensoredgemanifest.create(params, [options], [callback])](#create)

4. [netField.sensoredgemanifest.update(containerId, params, [options], [callback])](#update)

5. [netField.sensoredgemanifest.delete(containerId, [callback])](#delete)

6. [netField.sensoredgemanifest.uploadOs(params, [options], [callback])](#upload)

## Resource Usage

### getAll

    Get list sensor edge containers

```javascript
/**
 * Get sensor edge containers
 * @param {any} options optional
 * @param {function} callback optional
*/
netField.sensoredgemanifest.getAll([options], [callback])
```

### get

    Get sensor edge container

```javascript
/**
 * @param {string} containerId
 * @param {function} callback optional
*/
netField.sensoredgemanifest.get(containerId, [callback])
```

### create

    Adds a new sensor edge container to collection

```javascript
/**
 * @param {any} params
 * @param {any} options optional
 * @param {function} callback optional
*/
netField.sensoredgemanifest.create(params, [options], [callback])
```

### update

    Updates sensor edge container in collection

```javascript
/**
 * @param {any} params
 * @param {any} options optional
 * @param {function} callback optional
*/
netField.sensoredgemanifest.update(params, [options], [callback])
```

### delete

    Delete sensor edge container from collection

```javascript
/**
 * @param {string} containerId
 * @param {function} callback optional
*/
netField.sensoredgemanifest.delete(containerId, [callback])
```

### upload

    Upload sensorEDGE OS

```javascript
/**
 * @param {any} params
 * @param {any} options optional
 * @param {function} callback optional
*/
netField.sensoredgemanifest.uploadOs(params, [options], [callback])
```
