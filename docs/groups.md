 # Groups

## Overview
*The resorces responsible for creating and managing groups for devices/containers*

## Available Resources
  
1. [netField.groups.get(groupId, depth, [callback])](#getgroup)

2. [netField.groups.update(groupId, params, [callback])](#updategroup)

3. [netField.groups.create(groupId, params, [callback])](#creategroup)

4. [netField.groups.delete(groupId, [callback])](#deletegroup)

5. [netField.groups.getGroupItems(groupId, page, limit, sortBy, sortOrded, [callback])](#getgroupitems)

6. [netField.groups.addDevice(groupId, deviceId, [callback])](#adddevicetogroup)

7. [netField.groups.removeDevice(groupId, deviceId, [callback])](#removedevicefromgroup)
8. [netField.groups.addContainer(groupId, containerId, [callback])](#addcontainertogroup)
9. [netField.groups.removeContainer(groupId, containerId, [callback])](#removecontainerfromgroup)


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

### getgroupitems

    Get group items by groupId

```javascript
/**
 * @param {number} groupId
 * @param {number} page
 * @param {number} limit
 * @param {String} sortBy attribute from user object
 * @param {String} sortOrder asc, desc
 * @param {function} callback optional
 */
netfield.groups.getGroupItems(groupId, page, limit, sortBy, sortOrder, callback)
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

### addcontainertogroup

    Add a container to a group

```javascript
/**
 * @param {number} groupId
 * @param {string} containerId
 * @param {function} callback optional
*/
netField.groups.addContainer(groupId, containerId, [callback])
```

### removecontainerfromgroup

    Remove a container from group

```javascript
/**
 * @param {number} groupId
 * @param {string} containerId
 * @param {function} callback optional
*/
netField.groups.removeContainer(groupId, containerId, [callback])
```
