 # Devices

## Overview
*The resources responsible for creating and managing devices*

## Available Resources

1. [netField.devices.create(params, [callback])](#createdevice)

2. [netField.devices.get(deviceId, [callback])](#getdevice)

3. [netField.devices.getAll(organisationId, page, deviceId, [callback])](#getdevices)

4. [netField.devices.update(deviceId, params, [callback])](#updatedevice)

5. [netField.devices.delete(deviceId, [callback])](#deletedevice)

6. [netField.devices.onBoard(deviceId, [callback])](#onboard)

7. [netField.devices.offBoard(deviceId, [callback])](#offboard)

8. [netField.devices.customFields.create(deviceId, params, [callback])](#createdevicecustomfields)

9. [netField.devices.customFields.getAll(deviceId, [callback])](#getdevicecustomfields)

10. [netField.devices.customFields.get(deviceId, fieldId, [callback])](#getdevicecustomfield)

11. [netField.devices.customFields.update(deviceId, fieldId, params, [callback])](#updatedevicescustomfield)

12. [netField.devices.customFields.delete(deviceId, fieldId, [callback])](#deletedevicecustomfields)

13. [netField.devices.enableDisable(deviceId, enabled, params, [callback])](#enabledisabledevice)

14. [netField.devices.offBoardConfirm(params, [callback])](#offboardConfirm)



## Resource Usage

### createdevice

    Create Device

```javascript
/**
 * @param {object} params
 * @param {function} callback optional
*/
netField.devices.create(params, [callback])
```

### getdevice

    Get device by deviceId

```javascript
/**
 * @param {string} deviceId
 * @param {function} callback optional
*/
netField.devices.get(deviceId, [callback])
```

### getdevices

    Get devices by organisationId

```javascript
/**
 * @param {number} organisationId
 * @param {number} page
 * @param {number} limit
 * @param {string} sortBy
 * @param {string} sortOrder
 * @param {function} callback optional
*/
netField.devices.getAll(organisationId, page, limit, sortBy, sortOrder, [callback])
```

### updatedevice

    Update device by deviceId

```javascript
/**
 * @param {string} deviceId
 * @param {object} params
 * @param {function} callback optional
*/
netField.devices.update(deviceId, params, [callback])
```

### deletedevice

    Delete device by deviceId

```javascript
/**
 * @param {string} deviceId
 * @param {function} callback optional
 */
netField.devices.delete(deviceId, [callback])
```

### onBoard

    Onboard a device

```javascript
/**
 * @param {object}
 * @param {function} callback optional
*/
netField.device.onBoard(params, [callback])
```

### offBoard

    Offboard a device

```javascript
/**
 * @param {object}
 * @param {function} callback optional
*/
netField.device.offBoard(params, [callback])
```

### createdevicecustomfields

    Create device custom fields

```javascript
/**
 * @param {string} deviceId
 * @param {object} params
 * @param {function} callback optional
*/
netField.devices.customFields.create(deviceId, params, [callback])
```

### getdevicecustomfields

    Get device custom fields

```javascript
/**
 * @param {string} deviceId
 * @param {function} callback optional
*/
netField.devices.customFields.getAll(deviceId, [callback])
```

### getdevicecustomfield

    Get device custom field

```javascript
/**
 * @param {string} deviceId
 * @param {string} fieldId
 * @param {function} callback optional
*/
netField.devices.customFields.get(deviceId, fieldId, [callback])
```

### updatedevicescustomfield

    Update device custom field

```javascript
/**
 * @param {string} deviceId
 * @param {string} fieldId
 * @param {object} params
 * @param {function} callback optional
*/
netField.devices.customFields.update(deviceId, fieldId, params, [callback])
```

### deletedevicecustomfields

    Delete device custom field

```javascript
/**
 * @param {string} deviceId
 * @param {string} fieldId
 * @param {function} callback optional
*/
netField.devices.customFields.delete(deviceId, fieldId, [callback])
```

### enabledisabledevice

    Switch device state between enabled and disabled

```javascript
/**
 * @param {string} deviceId
 * @param {boolean} enabled
 * @param {object} params
 * @param {function} callback optional
*/
netField.devices.enableDisable(deviceId, enabled, params, [callback])
```

### offBoardConfirm

    Confirm offboarding of your sensorEDGE device with equipmentId and offboardConfirmationCode in params 

```javascript
/**
 * @param {object} params containing equipmentId and offboardConfirmationCode properties
 * @param {function} callback optional
*/
netField.devices.customFields.offBoardConfirm(params, [callback])
```