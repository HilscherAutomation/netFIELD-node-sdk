 # Device Notifications

## Overview
*The resources responsible for creating and managing device notifications*

## Available Resources

1. [netField.devices.notifications.create(deviceId, params, [callback])](#createNotification)

2. [netField.devices.notifications.delete(deviceId, notificationid, [callback])](#deletenotification)

3. [netField.devices.notifications.deleteAll(deviceId, [callback])](#deleteallnotification)

4. [netField.devices.notifications.getAll(deviceId, [page], [limit], [sortBy], [sortOrder], [callback])](#getallnotifications)

## Resource Usage

### createNotification

    Create device notifications

```javascript
/**
 * @param {string} deviceId
 * @param {{serialNumber: string, level: string, message: string}} params
 * @param {function} callback optional
*/
netField.devices.notifications.create(deviceId, params [callback])
```

### deletenotification

    Delete only one device notifications

```javascript
/**
 * @param {string} deviceId
 * @param {string} notificationId
 * @param {function} callback optional
*/ 
netField.devices.notifications.delete(deviceId, notificationId, [callback])
```

### deleteallnotifications

    Delete all device notification by device id

```javascript
/**
 * @param {string} deviceId
 * @param {function} callback optional
*/ 
netField.devices.notifications.deleteAll(deviceId, [callback])
```

### getallnotifications
    
    Get list of notifications by device id

```javascript
/**
 * @param {string} deviceId
 * @param {number} page optional
 * @param {number} limit optional
 * @param {string} sortBy optional
 * @param {string} sortOrder optional
 * @param {function} callback optional
*/ 
netField.devices.notifications.getAll(deviceId, page, limit, sortBy, sortOrder [callback])
```