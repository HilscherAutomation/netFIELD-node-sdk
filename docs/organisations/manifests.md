# Deployment manifest

## Overview
*The resources responsible for managing deployment manifests*

## Available Resources

1. [netField.organisations.manifests.create(organisationId, params, [options], [callback])](#createmanifest)

2. [netField.organisations.manifests.update(organisationId, manifestId, params, [options], [callback])](#updatemanifest)

3. [netField.organisations.manifests.delete(organisationId, manifestId, params, [callback])](#deletemanifest)

4. [netField.organisations.manifests.getAll(organisationId, [page], [limit], [sortBy], [sortOrder], [callback])](#getmanifests)

5. [netField.organisations.manifests.get(organisationId, manifestId, [callback])](#getmanifest)

6. [netField.organisations.manifests.copyManifest(organisationId, [callback])](#copymanifest)

7. [netField.organisations.manifests.applyManifest(organisationId, manifestId, deviceId, [params], [callback])](#applymanifest)

8. [netField.organisations.manifests.containers.add(organisationId manifestId, params, [options], [callback])](#createcontainer)

9. [netField.organisations.manifests.containers.update(organisationId, manifestId, containerId, params, [options], [callback])](#updatecontainer)

10. [netField.organisations.manifests.containers.delete(organisationId, manifestId, containerId, [callback])](#deletecontainer)

11. [netField.organisations.manifests.containers.getAll(organisationId, manifestId, [page], [limit], [sortBy], [sortOrder], [callback])](#getcontainers)

12. [netField.organisations.manifests.containers.get(organisationId, manifestId, containerId, [callback])](#getcontainer)

13. [netField.organisations.manifests.routes.add(organisationId, manifestId, params, [callback])](#createroute)

14. [netField.organisations.manifests.routes.update(organisationId, manifestId, routeId, params, [callback])](#updateroute)

15. [netField.organisations.manifests.routes.delete(organisationId, manifestId, routeId, [callback])](#deleteroute)

16. [netField.organisations.manifests.routes.getAll(organisationId, manifestId, [page], [limit], [sortBy], [sortOrder], [callback])](#getroutes)

17. [netField.organisations.manifests.routes.get(organisationId, manifestId, routeId, [callback])](#getroute)

## Resource Usage

### createManifest

    Create deployment manifest

```javascript
/**
 * @param {number} organisationId
 * @param {{
 *  name: string,
 *  description: string,
 *  isActive: boolean,
 *  useRemoteControl: boolean,
 *  containers: Array<{
 *    containerId: string,
 *    version: string,
 *    restartPolicy: string,
 *    desiredStatus: string,
 *    containerCreateOptions: object,
 *    containerTwinDesiredOptions: object,
 *    environmentVariables: Array<object>,
 *    startupOrder: number,
 *    useProxySettings: boolean,
 *    processorArchitecture: string
 *  }>
 *  routes: Array<{
 *    name: string, 
 *    source: string, 
 *    condition: string, 
 *    target: string 
 *  }>
 * }} params
 * @param {object} options optional
 * @param {function} callback optional
*/
netField.organisations.manifests.create(organisationId, params, [options], [callback])
```

### updateManifest

    Update deployment manifest

```javascript
/**
 * @param {number} organisationId
 * @param {string} manifestId
 * @param {{
 *  name: string,
 *  description: string,
 *  isActive: boolean,
 *  useRemoteControl: boolean,
 *  containers: Array<{
 *    containerId: string,
 *    version: string,
 *    restartPolicy: string,
 *    desiredStatus: string,
 *    containerCreateOptions: object,
 *    containerTwinDesiredOptions: object,
 *    environmentVariables: Array<object>,
 *    startupOrder: number,
 *    useProxySettings: boolean,
 *    processorArchitecture: string
 *  }>
 *  routes: Array<{
 *    name: string, 
 *    source: string, 
 *    condition: string, 
 *    target: string 
 *  }>
 * }} params
 * @param {object} options optional
 * @param {function} callback optional
*/
netField.organisations.manifests.update(organisationId, manifestId, params, [options], [callback])
```

### deleteManifest

    Delete deployment manifest

```javascript
/**
 * @param {number} organisationId 
 * @param {string} manifestId
 * @param {function} callback optional
*/
netField.organisations.manifests.delete(organisationId, manifestId, [callback])
```

### getManifests

    Get a list of all deployment manifests by organisation id

```javascript
/**
 * @param {number} organisationId
 * @param {number} page optional
 * @param {number} limit optional
 * @param {string} sortBy optional
 * @param {string} sortOrder asc, desc optional
 * @param {function} callback optional
*/
netField.organisations.manifests.getAll(organisationId, [page], [limit], [sortBy], [sortOrder], [callback])
```

### getManifest

    Get single deployment manifest by id

```javascript
/**
 * @param {number} organisationId 
 * @param {string} manifestId
 * @param {function} callback optional
*/
netField.organisations.manifests.get(organisationId, manifestId, [callback])
```

### copyManifest

    Copy parent organisation deployment manifest to the current selected organisation

```javascript
/**
 * @param {number} organisationId
 * @param {number} page optional
 * @param {number} limit optional
 * @param {string} sortBy optional
 * @param {string} sortOrder optional (asc, desc)
 * @param {function} callback optional
*/
netField.organisations.manifests.copyManifest(organisationId, [callback])
```
### applyManifest

    Apply manifest to onboarded device

```javascript
/** 
 * @param {number} organisationId
 * @param {string} manifestId
 * @param {string} deviceId
 * @param {{
 *  useRemoteControl: boolean
 * }} params optional
 * @param {function} callback optional
*/
netField.organisations.manifests.applyManifest(organisationId, manifestId, deviceId, [params], [callback])
```

### createContainer

    Adds a new container to deployment manifest

```javascript
/**
 * @param {number} organisationId
 * @param {string} manifestId
 * @param {string} containerId
 * @param {{version: string,
 * restartPolicy: string,
 * desiredStatus: string,
 * containerCreateOptions: object,
 * containerTwinDesiredOptions: object,
 * environmentVariables: Array<object>,
 * startupOrder: number,
 * useProxySettings: boolean,
 * processorArchitecture: string}} params
 * @param {object} options optional
 * @param {function} callback optional
*/
netField.organisations.manifests.containers.add(organisationId, manifestId, containerId, params, [options], [callback])
```
### updateContainer

    Updates the specified container from the deployment manifest

```javascript
/**
 * @param {number} organisationId
 * @param {string} manifestId
 * @param {string} containerId
 * @param {{version: string,
 * restartPolicy: string,
 * desiredStatus: string,
 * containerCreateOptions: object,
 * containerTwinDesiredOptions: object,
 * environmentVariables: Array<object>,
 * startupOrder: number,
 * useProxySettings: boolean,
 * processorArchitecture: string}} params
 * @param {object} options optional
 * @param {function} callback optional
*/
netField.organisations.manifests.containers.update(organisationId, manifestId, containerId, params, [options], [callback])
```

### deleteContainer

    Deletes the specified container from the deployment manifest

```javascript
/**
 * @param {number} organisationId
 * @param {string} manifestId
 * @param {string} containerId
 * @param {function} callback optional
*/
netField.organisations.manifests.containers.delete(organisationId, manifestId, containerId, [callback])
```

### getContainers

    Get list of deployment manifest containers

```javascript
/**
 * @param {number} organisationId
 * @param {string} manifestId
 * @param {any} options optional
 * @param {function} callback optional
*/
netField.organisations.manifests.containers.getAll(organisationId, manifestId, [options], [callback])
```

### getContainer

    Get the specified container from the deployment manifest

```javascript
/**
 * @param {number} organisationId
 * @param {string} manifestId
 * @param {string} containerId
 * @param {function} callback optional
*/
netField.organisations.manifests.containers.get(organisationId, manifestId, containerId, [callback])
```

### createRoute

    Adds a new route to deployment manifest

```javascript
/**
 * @param {number} organisationId
 * @param {string} manifestId
 * @param {{name: string, source: string, condition: string, target: string}} params
 * @param {function} callback optional
*/
netField.organisations.manifests.routes.add(organisationId, manifestId, params, [callback])
```

### updateRoute

    Updates the specified route from the deployment manifest

```javascript
/**
 * @param {number} organisationId
 * @param {string} manifestId
 * @param {string} routeId
 * @param {{name: string, source: string, condition: string, target: string}} params
 * @param {function} callback optional
*/
netField.organisations.manifests.routes.update(organisationId, manifestId, routeId, params, [callback])
```

### deleteRoute

    Deletes the specified route from the deployment manifest

```javascript
/**
 * @param {number} organisationId
 * @param {string} manifestId
 * @param {string} routeId
 * @param {function} callback optional
*/
netField.organisations.manifests.routes.delete(organisationId, manifestId, routeId, [callback])
```

### getRoutes

    Get list of deployment manifest routes

```javascript
/**
 * @param {number} organisationId
 * @param {string} manifestId
 * @param {function} callback optional
*/
netField.organisations.manifests.routes.getAll(organisationId, manifestId, page?, limit?, sortBy?, sortOrder?, [callback])
```

### getRoute

    Get the specified route from the deployment manifest

```javascript
/**
 * @param {number} organisationId
 * @param {string} manifestId
 * @param {string} routeId
 * @param {function} callback optional
*/
netField.organisations.manifests.routes.get(organisationId, manifestId, routeId, [callback])
```
