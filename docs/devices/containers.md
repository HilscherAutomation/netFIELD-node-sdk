# Device Containers

## Overview
*The resources responsible for installing and managing device containers*

## Available Resources

1. [netField.devices.containers.getAll(deviceId, [options], [callback])](#getAll)

2. [netField.devices.containers.delete(containerId, deviceId, [callback])](#delete)

3. [netField.devices.containers.create(containerId, deviceId, params, [callback])](#create)

4. [netField.devices.containers.update(containerId, deviceId, params, [options], [callback])](#update)

5. [netField.devices.containers.properties(containerId, deviceId, [callback])](#properties)

6. [netField.devices.containers.getInstalled(deviceId, [options], [callback])](#getInstalled)

7. [netField.devices.containers.get(deviceId, containerId, [callback])](#get)

8. [netField.devices.containers.getDeployable(deviceId, [options], [callback])](#getDeployable)

9. [netField.devices.containers.deleteAll(deviceId, [callback])](#deleteAll)


## Resource Usage

### getAll

    Get list of installed and deployable containers to device

```javascript
/**
 * @param {string} deviceId
 * @param {any} options optional
 * @param {function} callback optional
*/
netField.devices.containers.getAll(deviceId, [options], [callback])
```

### delete

    Delete device container

```javascript
/**
 * @param {string} containerId
 * @param {string} deviceId
 * @param {function} callback optional
*/
netField.devices.containers.delete(containerId, deviceId, [callback])
```

### create

    Install device container

```javascript
/**
 * @param {string} containerId
 * @param {string} deviceId
 * @param {any} params
 * @param {function} callback optional
*/
netField.devices.containers.create(containerId, deviceId, params, [callback])
```

### update

    Update device container

```javascript
/**
 * @param {string} containerId
 * @param {string} deviceId
 * @param {any} params
 * @param {any} options optional
 * @param {function} callback optional
*/
netField.devices.containers.update(containerId, deviceId, params, [options], [callback])
```

### properties

    Get device container properties

```javascript
/**
 * @param {string} containerId
 * @param {string} deviceId
 * @param {function} callback optional
*/
netField.devices.containers.properties(containerId, deviceId, [callback])
```

### getInstalled

    Get list of installed containers to device

```javascript
/**
 * @param {string} deviceId
 * @param {any} options optional
 * @param {function} callback optional
*/
netField.devices.containers.getInstalled(deviceId, [options], [callback])
```

### getdevicecontainer

    Get a single installed container to a device

```javascript
/**
 * @param {string} deviceId
 * @param {string} containerId
 * @param {function} callback optional
*/
netField.devices.containers.get(deviceId, containerId, [callback])
```

### getDeployable

    Get list of deployable containers to device

```javascript
/**
 * @param {string} deviceId
 * @param {any} options optional
 * @param {function} callback optional
*/
netField.devices.containers.getDeployable(deviceId, [options], [callback])
```

### deleteAll

    Delete all device containers

```javascript
/**
 * @param {string} deviceId
 * @param {function} callback optional
*/
netField.devices.containers.delete(deviceId, [callback])
```