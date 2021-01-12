# Device Deployment Manifest

## Overview
*The resources responsible for deploying and checking sensorEDGE device containers*

## Available Resources

1. [netField.devices.deploymentManifests.check(deviceId, [callback])](#check)

2. [netField.devices.deploymentManifests.deploy(deviceId, [callback])](#deploy)


## Resource Usage

### check

    Checks the actuality of sensor edge device containers

```javascript
/**
 * @param {string} deviceId 
 * @param {function} callback optional
*/
netField.devices.deploymentManifests.check(deviceId, [callback])
```

### deploy

    Update and redeploy sensor edge device containers

```javascript
/** 
 * @param {string} deviceId
 * @param {function} callback optional
*/
netField.devices.deploymentManifests.deploy(deviceId, [callback])
```
