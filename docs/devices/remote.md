# Device Remote Routes

## Overview
*The resources responsible for creating and managing device remote control*

## Available Resources

1. [netField.devices.remote.create(deviceId, params, [callback])](#create)

2. [netField.devices.remote.credentials(deviceId, [callback])](#credentials)

3. [netField.devices.remote.status(deviceId, [callback])](#status)

## Resource Usage

### create

    Create remote device

```javascript
/**
 * @param {string} deviceId
 * @param {any} params
 * @param {function} callback optional
*/
netField.devices.remote.create(deviceId, params, [callback])
```

### credentials

    Get remote device credentials

```javascript
/**
 * @param {string} deviceId
 * @param {function} callback optional
*/
netField.devices.remote.credentials(deviceId, [callback])
```

### status

    Get remote device status

```javascript
/**
 * @param {string} deviceId
 * @param {function} callback optional
*/
netField.devices.remote.status(deviceId, [callback])
```
