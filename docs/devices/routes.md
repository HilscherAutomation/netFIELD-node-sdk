# Device Containers Routes

## Overview
*The resources responsible for creating and managing device containers routes*

## Available Resources

1. [netField.devices.containers.routes.getAll(deviceId, [callback])](#getAll)

2. [netField.devices.containers.routes.create(deviceId, params, [callback])](#create)

3. [netField.devices.containers.routes.update(routeId, deviceId, params, [callback])](#update)

4. [netField.devices.containers.routes.delete(routeId, deviceId, [callback])](#delete)

## Resource Usage

### get

    Get information about specific device container route

```javascript
/**
 * @param {string} deviceId
 * @param {string} routeId
 * @param {function} callback optional
*/
netField.devices.containers.routes.get(deviceId, routeId, [callback])
```

### getAll

    Gets all device container routes

```javascript
/**
 * @param {string} deviceId
 * @param {function} callback optional
*/
netField.devices.containers.routes.getAll(deviceId, [callback])
```

### create

    Adds a device container route to device

```javascript
/**
 * @param {string} deviceId
 * @param {any} params
 * @param {function} callback optional
*/
netField.devices.containers.routes.create(deviceId, params, [callback])
```

### update

    Updates values of a device container route form device

```javascript
/**
 * @param {string} routeId
 * @param {string} deviceId
 * @param {any} params
 * @param {function} callback optional
*/
netField.devices.containers.routes.update(routeId, deviceId, params, [callback])
```

### delete

    Delete device container route from a device

```javascript
/**
 * @param {string} routeId
 * @param {string} deviceId
 * @param {function} callback optional
*/
netField.devices.containers.routes.delete(routeId, deviceId, [callback])
```
