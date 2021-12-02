# Device Deployment Manifest

## Overview
*The resources responsible for deploying and checking sensorEDGE device containers*

## Available Resources

1. [netField.devices.deploymentManifests.check(deviceId, [callback])](#check)

2. [netField.devices.deploymentManifests.deploy(deviceId, [callback])](#deploy)


## Resource Usage

### check

    Checks the actuality of sensorEDGE OS and containers

```javascript
/**
 * @param {string} deviceId 
 * @param {function} callback optional
*/
netField.devices.deploymentManifests.check(deviceId, [callback])
```

### deploy

    Update sensorEDGE OS and redeploy device containers

```javascript
/** 
 * @param {string} deviceId
 * @param {function} callback optional
*/
netField.devices.deploymentManifests.deploy(deviceId, [callback])
```
