 # Device Notifications

## Overview
*The resources responsible for creating and managing device notifications*

## Available Resources

1. [netField.device.createDeviceNotification(deviceId, params, [callback])](#createNotification)

2. [netField.device.deleteNotification(deviceId, notificationid, [callback])](#deletenotification)

3. [netField.device.deleteAllNotifications(deviceId, [callback])](#deleteallnotification)

4. [netField.device.getNotifications(deviceId, page, limit, sortBy, sortOrder [callback])](#getallnotifications)

## Resource Usage

### createNotification

    Create device notifications

```javascript
/**
 * @param {string} deviceId
 * @param {object} params
 * @param {function} callback optional
*/
netField.devices.createNotification(deviceId, params [callback])
```

### deletenotification

    Delete only one device notifications

```javascript
/**
 * @param {string} deviceId
 * @param {string} notificationId
 * @param {function} callback optional
*/ 
netField.devices.deleteNotification(deviceId, notificationId, [callback])
```

### deleteallnotifications

    Delete all device notification by device id

```javascript
/**
 * @param {string} deviceId
 * @param {function} callback optional
*/ 
netField.devices.deleteAllNotifications(deviceId, [callback])
```

### getallnotifications
    
    Get list of notifications by device id

```javascript
/**
 * @param {string} deviceId
 * @param {number} page
 * @param {number} limit
 * @param {string} sortBy
 * @param {string} sortOrder
 * @param {function} callback optional
*/ 
netField.devices.getNotifications(deviceId, page, limit, sortBy, sortOrder [callback])
```