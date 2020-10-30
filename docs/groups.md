 # Groups

## Overview
*The resorces responsible for creating and managing groups for devices/containers*

## Available Resources
  
1. [netField.groups.get(groupId, depth, [callback])](#getgroup)

2. [netField.groups.update(groupId, params, [callback])](#updategroup)

3. [netField.groups.create(groupId, params, [callback])](#creategroup)

4. [netField.groups.delete(groupId, [callback])](#deletegroup)

3. [netField.groups.addDevice(groupId, deviceId, [callback])](#adddevicetogroup)

4. [netField.groups.removeDevice(groupId, deviceId, [callback])](#removedevicefromgroup)

## Resource Usage

### getgroup

    Get group by groupId and depth

```javascript
/**
 * @param {number} groupId
 * @param {number} depth
 * @param {function} callback optional
*/
netField.groups.get(groupId, depth, [callback])
```

### updategroup

    Update group by groupId

```javascript
/**
 * @param {number} groupId
 * @param {object} params
 * @param {function} callback optional
*/
netField.groups.update(groupId, params, [callback])
```

### creategroup

    Create group

```javascript
/**
 * @param {number} groupId
 * @param {object} params
 * @param {function} callback optional
*/
netField.groups.create(groupId, params, [callback])
```

### deletegroup

    Delete group by groupId

```javascript
/**
 * @param {number} groupId
 * @param {function} callback optional
*/
netField.groups.delete(groupId, [callback])
```

### adddevicetogroup

    Add a device to a group

```javascript
/**
 * @param {number} groupId
 * @param {string} deviceId
 * @param {function} callback optional
*/
netField.groups.addDevice(groupId, deviceId, [callback])
```

### removedevicefromgroup

    Remove a device from a group

```javascript
/**
 * @param {number} groupId
 * @param {string} deviceId
 * @param {function} callback optional
*/
netField.groups.removeDevice(groupId, deviceId, [callback])
```
