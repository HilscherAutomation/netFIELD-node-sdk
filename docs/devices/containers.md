# Device Containers

## Overview
*The resources responsible for installing and managing device containers*

## Available Resources

1. [netField.devices.containers.delete(containerId, deviceId, [callback])](#delete)

2. [netField.devices.containers.create(containerId, deviceId, params, [options], [callback])](#create)

3. [netField.devices.containers.update(containerId, deviceId, params, [options], [callback])](#update)

4. [netField.devices.containers.properties(containerId, deviceId, [callback])](#properties)

5. [netField.devices.containers.getInstalled(deviceId, [page], [limit], [sortBy], [sortOrder], [settingsPageId], [category], [status], [callback])](#getInstalled)

6. [netField.devices.containers.get(deviceId, containerId, [callback])](#getDeviceContainer)

7. [netField.devices.containers.getDeployable(deviceId, [page], [limit], [sortBy], [sortOrder], [includeDisabled], [category], [organisationName], [purchased], [callback])](#getDeployable)

8. [netField.devices.containers.deleteAll(deviceId, [callback])](#deleteAll)

9. [netField.devices.containers.getDeployableVersions(deviceId, containerId, [callback])](#getDeployableVersions)

10. [netField.devices.containers.createList(deviceId, params, [options], [callback])](#createList)

11. [netField.devices.containers.updateList(deviceId, params, [options], [callback])](#updateList)

12. [netField.devices.containers.getSystemInstalled(deviceId, [page], [limit], [sortBy], [sortOrder], [callback])](#getSystemInstalled)

13. [netField.devices.containers.getSystem(deviceId, containerName, [callback])](#getDeviceSystemContainer)

14. [netField.devices.containers.getDevicesPlatforms(deviceIds, [callback])](#getDevicesPlatforms)

15. [netField.devices.containers.deleteDeviceContainers(deviceId, containerIds, [callback])](#deleteContainers)

16. [netField.devices.containers.getSystemEnvs([callback])](#getdevicesystemcontainersenv)


## Resource Usage

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
 * @param {{version: string,
 * restartPolicy: string, 
 * desiredStatus: string,
 * containerCreateOptions: object,
 * containerTwinDesiredOptions: object,
 * environmentVariables: Array<object>,
 * startupOrder: number,
 * useProxySettings: boolean
 *  }} params
 * @param {any} options optional
 * @param {function} callback optional
*/
netField.devices.containers.create(containerId, deviceId, params, [options], [callback])
```

### update

    Update device container

```javascript
/**
 * @param {string} containerId
 * @param {string} deviceId
 * @param {{version: string,
 * restartPolicy: string, 
 * desiredStatus: string,
 * useProxySettings: boolean
 * containerCreateOptions: object,
 * containerTwinDesiredOptions: object,
 * environmentVariables: Array<object>,
 * startupOrder: number,
 *  }} params
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
 * @param {number} page optional
 * @param {number} number optional
 * @param {string} sortBy optional
 * @param {string} sortOrder optional
 * @param {string} settingsPageId optional
 * @param {Array<string>} category optional
 * @param {Array<string>} status optional
 * @param {function} callback optional
*/
netField.devices.containers.getInstalled(deviceId,  page, number, sortBy, sortOrder, settingsPageId, category, status, [callback])
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
 * @param {number} page optional
 * @param {number} number optional
 * @param {string} sortBy optional
 * @param {string} sortOrder optional
 * @param {boolean} includeDisabled optional
 * @param {Array<string>} category optional
 * @param {Array<string>} organisationName optional
 * @param {boolean} purchased optional
 * @param {function} callback optional
*/
netField.devices.containers.getDeployable(deviceId, page, number, sortBy, sortOrder, includeDisabled, category, organisationName, purchased, [callback])
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

### getDeployableVersions

    Get a list of all deployable container versions for a specific device

```javascript
/**
 * @param {string} deviceId
 * @param {string} containerId
 * @param {function} callback optional
*/
netField.devices.containers.getDeployableVersions(deviceId, containerId, [callback])
```

### createList

    Install list of device containers

```javascript
/**
 * @param {string} deviceId
 * @param {{containers: Array<{containerId: string,
 * version: string,
 * restartPolicy: string, 
 * desiredStatus: string,
 * containerCreateOptions: object,
 * containerTwinDesiredOptions: object,
 * environmentVariables: Array<object>,
 * startupOrder: number,
 * useProxySettings: boolean}>}} params
 * @param {object} options
 * @param {function} callback optional
*/
netField.devices.containers.createList(deviceId, params, [options], [callback])
```

### updateList

    Update list of device containers

```javascript
/**
 * @param {string} deviceId
 * @param {{containers: Array<{containerId: string,
 * version: string,
 * restartPolicy: string, 
 * desiredStatus: string,
 * containerCreateOptions: object,
 * containerTwinDesiredOptions: object,
 * environmentVariables: Array<object>,
 * startupOrder: number,
 * useProxySettings: boolean}>}} params
 * @param {object} options
 * @param {function} callback optional
*/
netField.devices.containers.updateList(deviceId, params, [options], [callback])
```

### getSystemInstalled

    Get list of system installed containers to device

```javascript
/**
 * @param {string} deviceId
 * @param {number} page optional
 * @param {number} number optional
 * @param {string} sortBy optional
 * @param {string} sortOrder optional
 * @param {function} callback optional
*/
netField.devices.containers.getInstalled(deviceId,  page, number, sortBy, sortOrder, [callback])
```

### getDeviceSystemContainer

    Get a single system installed container to a device

```javascript
/**
 * @param {string} deviceId
 * @param {string} containerId
 * @param {function} callback optional
*/
netField.devices.containers.getSystem(deviceId, containerId, [callback])
```

### getDevicesPlatforms

    Get list of installed platform containers on devices

```javascript
/**
 * @param {Array<string> | string} deviceIds
 * @param {function} callback optional
*/
netField.devices.containers.getDevicesPlatforms(deviceIds, [callback])
```

### deleteContainers

    Bulk delete device containers

```javascript
/**
 * @param {string} deviceId
 * @param {Array<string> | string} containerIds
 * @param {function} callback optional
*/
netField.devices.containers.deleteDeviceContainers(deviceId, containerIds, [callback])
```

### getdevicesystemcontainersenv

    Get allowed system containers environment variables

```javascript
/** 
 * @param {function} callback optional
*/
netField.devices.containers.getSystemEnvs([callback])
```