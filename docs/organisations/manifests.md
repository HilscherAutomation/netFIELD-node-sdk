# Deployment manifest

## Overview
*The resources responsible for managing deployment manifests*

## Available Resources

1. [netField.organisations.manifests.getContainers(organisationId, [page, limit, sortBy, sortOrder, callback])](#getcontainers)

2. [netField.organisations.manifests.getRoutes(organisationId, [page, limit, sortBy, sortOrder, callback])](#getroutes)

3. [netField.organisations.manifests.createContainer(organisationId, params, [options, callback])](#createcontainer)

4. [netField.organisations.manifests.createRoutes(organisationId, params, [options, callback])](#createroute)

5. [netField.organisations.manifests.deleteContainer(organisationId, containerId, [options, callback])](#deletecontainer)

6. [netField.organisations.manifests.deleteRoute(organisationId, routeId, [options, callback])](#deleteroute)

7. [netField.organisations.manifests.updateContainer(organisationId, containerId, params, [options, callback])](#updatecontainer)

8. [netField.organisations.manifests.updateRoute(organisationId, routeId, params, [options, callback])](#updateroute)

9. [netField.organisations.manifests.getContainer(organisationId, containerId, [options, callback])](#getcontainer)

10. [netField.organisations.manifests.getRoute(organisationId, routeId, [options, callback])](#getRoute)

## Resource Usage

### getContainers

    Get list of deployment manifest containers

```javascript
/**
 * @param {number} organisationId
 * @param {any} options optional
 * @param {function} callback optional
*/
netField.organisations.manifests.getContainers(organisationId, [options], [callback])
```

### getRoutes

    Get list of deployment manifest routes

```javascript
/**
 * @param {number} organisationId
 * @param {function} callback optional
*/
netField.organisations.manifests.getRoutes(organisationId, page?, limit?, sortBy?, sortOrder?, [callback])
```

### createContainer

    Adds a new container to deployment manifest

```javascript
/**
 * @param {number} organisationId
 * @param {string} containerId
 * @param {any} options optional
 * @param {function} callback optional
*/
netField.organisations.manifests.createContainer(organisationId, containerId, [options], [callback])
```

### createRoute

    Adds a new route to deployment manifest

```javascript
/**
 * @param {number} organisationId
 * @param {any} params
 * @param {any} options optional
 * @param {function} callback optional
*/
netField.organisations.manifests.createRoute(organisationId, params, [options], [callback])
```

### deleteContainer

    Deletes the specified container from the deployment manifest

```javascript
/**
 * @param {number} organisationId
 * @param {string} containerId
 * @param {function} callback optional
*/
netField.organisations.manifests.deleteContainer(organisationId, containerId, [callback])
```

### deleteRoute

    Deletes the specified route from the deployment manifest

```javascript
/**
 * @param {number} organisationId
 * @param {string} routeId
 * @param {function} callback optional
*/
netField.organisations.manifests.deleteRoute(organisationId, routeId, [callback])
```

### updateContainer

    Updates the specified container from the deployment manifest

```javascript
/**
 * @param {formData} params
 * @param {object} options optional
 * @param {function} callback optional
*/
netField.organisations.manifests.updateContainer(organisationId, containerId, params, [options, callback])
```

### updateRoute

    Updates the specified route from the deployment manifest

```javascript
/**
 * @param {number} organisationId
 * @param {string} routeId
 * @param {function} callback optional
*/
netField.organisations.manifests.updateRoute(organisationId, routeId, params, [options, callback])
```

### getContainer

    Get the specified container from the deployment manifest

```javascript
/**
 * @param {number} organisationId
 * @param {string} containerId
 * @param {function} callback optional
*/
netField.organisations.manifests.getContainer(organisationId, containerId, [callback])
```

### getRoute

    Get the specified route from the deployment manifest

```javascript
/**
 * @param {number} organisationId
 * @param {string} routeId
 * @param {function} callback optional
*/
netField.organisations.manifests.getRoute(organisationId, routeId, [callback])
```
