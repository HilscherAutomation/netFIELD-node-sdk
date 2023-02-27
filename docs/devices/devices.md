 # Devices

## Overview
*The resources responsible for creating and managing devices*

## Available Resources

1. [netField.devices.create(params, [callback])](#createdevice)

2. [netField.devices.get(deviceId, [callback])](#getdevice)

3. [netField.devices.getWithKey(deviceId, [callback])](#getdevicewithkey)

4. [netField.devices.getChildren(deviceId, [callback])](#getdevicechildren)

5. [netField.devices.getAll(organisationId, [page], [limit], [sortBy], [sortOrder], [deviceType], [firmwareVersion], [statusColor], [callback])](#getdevices)

6. [netField.devices.update(deviceId, params, [callback])](#updatedevice)

7. [netField.devices.delete(deviceId, [callback])](#deletedevice)

8. [netField.devices.onBoard(params, [callback])](#onboard)

9. [netField.devices.onBoardWithKey(params, [callback])](#onBoardWithKey)

10. [netField.devices.offBoard(params, [callback])](#offboard)

11. [netField.devices.customFields.create(deviceId, params, [callback])](#createdevicecustomfields)

12. [netField.devices.customFields.getAll(deviceId, [callback])](#getdevicecustomfields)

13. [netField.devices.customFields.get(deviceId, fieldId, [callback])](#getdevicecustomfield)

14. [netField.devices.customFields.update(deviceId, fieldId, params, [callback])](#updatedevicescustomfield)

15. [netField.devices.customFields.delete(deviceId, fieldId, [callback])](#deletedevicecustomfields)

16. [netField.devices.enableDisable(deviceId, enabled, params, [callback])](#enabledisabledevice)

17. [netField.devices.offBoardConfirm(params, language, [callback])](#offBoardConfirm)

18. [netField.devices.onboardSensorEdge(params, [callback])](#onboardSensorEdge)

19. [netField.devices.getWithGeolocation(organisationId, [deviceType], [sortBy], [sortOrder], [callback])](#getdeviceswithgeolocation)

20. [netField.devices.getStatusList(deviceIds, [callback])](#getStatuses)

21. [netField.devices.methods(deviceId, params, [callback])](#callMethods)

22. [netField.devices.filter(params, [callback])](#filterdevices)


## Resource Usage

### createdevice

    Create Device

```javascript
/**
 * @param {{onboardingType: string,
 * organisationId: string,
 * deviceType: string,
 * serialNumber: string,
 * name: string,
 * firmwareVersion: string,
 * modelName: string,
 * geolocation: {
 *  longitude: string,
 *  latitude: string,
 * },
 * timeToLiveSecs: number,
 * proxySettings: { 
 * useHttpsProxySettings: boolean,
 * noProxy: string,
 *   httpsProxy: {
 *     uri: string,
 *     username": string,
 *     password": string
 *   },
 * useHttpProxySettings: boolean,
 *   httpProxy: {
 *    uri: string,
 *    username: string,
 *    password: string
 *   }
 * },
 * remoteSettings: {
 *    host: string,
 *    httpPort: number,
 *    services: Array<{service: string, edgePort: number, localPort: number, forward: boolean, destinationIp: string, destinationPort: number}>
 *  },
 * description: string,
 * tags: string,
 * properties: Array<{name: string, value: string}>,
 * equipmentId: string,
 * hardwareInfo: object,
 * upstreamProtocol: string,
 * operationTimeInDays: number,
 * monitorOperationTime: boolean,
 * autoProlog: boolean,
 * processorArchitecture: string
 * }} params
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

### getdevicewithkey

    (temporary) Get device by deviceId with API key

```javascript
/**
 * @param {string} deviceId
 * @param {function} callback optional
*/
netField.devices.getWithKey(deviceId, [callback])
```

### getdevicechildren

    Get device children by deviceId

```javascript
/**
 * @param {string} deviceId parent device Id
 * @param {function} callback optional
*/
netField.devices.getChildren(deviceId, [callback])
```

### getdevices

    Get devices by organisationId

```javascript
/**
 * @param {number} organisationId
 * @param {number} page optional
 * @param {number} limit optional
 * @param {string} sortBy optional
 * @param {string} sortOrder optional
 * @param {string} deviceType optional
 * @param {Array<string>} firmwareVersion optional
 * @param {Array<string>} statusColor optional
 * @param {Array<string>} nestedStatus optional
 * @param {function} callback optional
*/
netField.devices.getAll(organisationId, page, limit, sortBy, sortOrder, deviceType, firmwareVersion, statusColor, nestedStatus, [callback])
```

### updatedevice

    Update device by deviceId

```javascript
/**
 * @param {string} deviceId
 * @param {{organisationId: string,
 * name: string,
 * firmwareVersion: string,
 * modelName: string,
 * geolocation: {
 *  longitude: string,
 *  latitude: string,
 * },
 * timeToLiveSecs: number,
 * proxySettings: { 
 * useHttpsProxySettings: boolean,
 * noProxy: string,
 *   httpsProxy: {
 *     uri: string,
 *     username": string,
 *     password": string
 *   },
 * useHttpProxySettings: boolean,
 *   httpProxy: {
 *    uri: string,
 *    username: string,
 *    password: string
 *   }
 * },
 * remoteSettings: {
 *    host: string,
 *    httpPort: number,
 *    services: Array<{service: string, edgePort: number, localPort: number, forward: boolean, destinationIp: string, destinationPort: number}>
 *  },
 * description: string,
 * tags: string,
 * properties: Array<{name: string, value: string}>,
 * desiredProperties: object,
 * upstreamProtocol: string,
 * }} params
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
 * @param {{
 *   activationCode: string, 
 *   serialNumber: string, 
 *   firmwareVersion: string, 
 *   modelName: string, 
 *   containerJWT: string, 
 *   useManifest: boolean,
 *   useRemoteControl: boolean,
 * }} params
 * @param {function} callback optional
*/
netField.device.onBoard(params, [callback])
```

### onBoardWithKey

    (temporary) Onboard a device with API key

```javascript
/**
 * @param {{
 *   activationCode: string, 
 *   serialNumber: string, 
 *   firmwareVersion: string, 
 *   modelName: string, 
 *   containerJWT: string, 
 *   useManifest: boolean,
 *   useRemoteControl: boolean,
 * }} params
 * @param {function} callback optional
*/
netField.device.onBoardWithKey(params, [callback])
```

### offBoard

    Offboard a device

```javascript
/**
 * @param {{deviceId: string}} params
 * @param {function} callback optional
*/
netField.device.offBoard(params, [callback])
```

### createdevicecustomfields

    Create device custom fields

```javascript
/**
 * @param {string} deviceId
 * @param {{fieldId: string, fieldValue: boolean}} params
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
 * @param {{fieldValue: string}} params
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
 * @param {function} callback optional
*/
netField.devices.enableDisable(deviceId, enabled, params, [callback])
```

### offBoardConfirm

    Confirm offboarding of your sensorEDGE device with equipmentId and offboardConfirmationCode in params 

```javascript
/**
 * @param {{equipmentId: string, offboardConfirmationCode: string}} params
 * @param {string} language
 * @param {function} callback optional
*/
netField.devices.customFields.offBoardConfirm(params, language, [callback])
```

### onboardSensorEdge

    Onboard a device to sensor edge user organisation

```javascript
/**
 * @param {{equipmentIds: Array<string>}} params
 * @param {function} callback optional
*/
netField.device.onboardSensorEdge(params, [callback])
```

### getdeviceswithgeolocation

    Get devices with geolocation by organisationId

```javascript
/**
 * @param {number} organisationId
 * @param {string} deviceType optional
 * @param {string} sortBy optional
 * @param {string} sortOrder optional
 * @param {function} callback optional
*/
netField.devices.getWithGeolocation(organisationId, deviceType, sortBy, sortOrder, [callback])
```

### getStatuses

    Get list of status by deviceIDs

```javascript
/**
 * @param {Array<string>} deviceIds
 * @param {function} callback optional
*/
netField.devices.getStatusList(deviceIds, [callback])
```

### callMethods

    Call method on a device container

```javascript
/**
 * @param {string} deviceId
 * @param {{containerName: string, methodName: string, methodPayload: object}} params
 * @param {function} callback optional
*/
netField.devices.methods(deviceId, params, [callback])
```

### filterdevices

    Filter devices by filter condition

```javascript
/**
 @param {{
 *   page: number,
 *   limit: number, 
 *   sortBy: string, 
 *   sortOrder: string, 
 *   conditions: Array<object>
 * }} params
 * @param {function} callback optional
*/
netField.devices.filter(params, [callback])
```