# Fleet Management

## Overview

*The resources responsible for creating and managing fleet device deployment*

## Available Resources

1. [netField.deployments.jobs.create(params, [callback])](#createJob)

2. [netField.deployments.jobs.containers.add(jobId, containerId, params, [callback])](#addContainerToJob)

3. [netField.deployments.jobs.containers.update(jobId, containerId, params, [callback])](#updateContainerInJob)

4. [netField.deployments.jobs.containers.delete(jobId, containerId, [callback])](#deleteContainerInJob)

5. [netField.deployments.jobs.containers.getAll(jobId, page, limit, sortBy, sortOrder, [callback])](#getAllContainersInJob)

6. [netField.deployments.jobs.containers.get(jobId, containerId, [callback])](#getSingleContainerInJob)

7. [netField.deployments.jobs.update(jobId, params, [callback])](#updateJob)

8. [netField.deployments.jobs.delete(jobId, [callback])](#deleteJob)

9. [netField.deployments.jobs.get(jobId, [callback])](#getSingleJob)

10. [netField.deployments.jobs.getAll(organisationId, page, limit, sortBy, sortOrder, [callback])](#getAllJobs)

11. [netField.deployments.jobs.routes.add(jobId, params, [callback])](#addRouteToJob)

12. [netField.deployments.jobs.routes.update(jobId, routeId, params, [callback])](#updateRouteInJob)

13. [netField.deployments.jobs.routes.delete(jobId, routeId, [callback])](#deleteRouteInJob)

14. [netField.deployments.jobs.routes.getAll(jobId, page, limit, sortBy, sortOrder, [callback])](#getAllRoutesInJob)

15. [netField.deployments.jobs.routes.get(jobId, routeId, [callback])](#getSingleRouteInJob)

16. [netField.deployments.jobs.execute(jobId, filterId, params, [callback])](#executeJob)

17. [netField.deployments.jobs.containers.methods.add(jobId, containerId, params, [callback])](#addMethodToJobContainer)

18. [netField.deployments.jobs.containers.methods.update(jobId, containerId, methodId, params, [callback])](#updateMethodInJobContainer)

19. [netField.deployments.jobs.containers.methods.delete(jobId, containerId, methodId, [callback])](#deleteMethodInJobContainer)

20. [netField.deployments.jobs.containers.methods.getAll(jobId, containerId, page, limit, sortBy, sortOrder, [callback])](#getAllMethodsInJobContainer)

21. [netField.deployments.jobs.containers.methods.get(jobId, containerId,  methodId, [callback])](#getSingleMethodInJobContainer)


## Resource Usage

### createJob

    Create deployment job

``` javascript
/** 
 * @param {object} params
 * @param {function} callback optional
 */
netField.deployments.jobs.create(params, [callback])
```

### updateJob

    Update deployment job

``` javascript
/** 
 * @param {string} jobId
 * @param {object} params
 * @param {function} callback optional
 */
netField.deployments.jobs.update(jobId, params, [callback])
```

### deleteJob

    Delete deployment job

``` javascript
/** 
 * @param {string} jobId
 * @param {function} callback optional
 */
netField.deployments.jobs.delete(jobId, [callback])
```

### getSingleJob

    Get single deployment job by id

``` javascript
/** 
 * @param {string} jobId
 * @param {function} callback optional
 */
netField.deployments.jobs.get(jobId, [callback])
```

### getAllJobs

    Get a list of all deployment jobs

``` javascript
/** 
 * @param {number} organisationId
 * @param {number} page
 * @param {number} limit
 * @param {string} sortBy
 * @param {string} sortOrder
 * @param {function} callback optional
 */
netField.deployments.jobs.getAll(organisationId, page, limit, sortBy, sortOrder, [callback])
```

### addContainerToJob

    Add single container to a deployment job

``` javascript
/**
 * @param {string} jobId
 * @param {string} containerId
 * @param {object} params
 * @param {function} callback optional
 */
netField.deployments.jobs.containers.add(jobId, containerId, params, [callback])
```

### updateContainerInJob

    Update single container in a deployment job

``` javascript
/**
 * @param {string} jobId
 * @param {string} containerId
 * @param {object} params
 * @param {function} callback optional
 */
netField.deployments.jobs.containers.update(jobId, containerId, params, [callback])
```

### deleteContainerInJob

    Delete single container in a deployment job

``` javascript
/**
 * @param {string} jobId
 * @param {string} containerId
 * @param {function} callback optional
 */
netField.deployments.jobs.containers.delete(jobId, containerId, [callback])
```

### getAllContainersInJob

    Get a list of all containers in a deployment job

``` javascript
/**
 * @param {string} jobId
 * @param {number} page
 * @param {number} limit
 * @param {string} sortBy
 * @param {string} sortOrder
 * @param {function} callback optional
 */
netField.deployments.jobs.containers.getAll(jobId, page, limit, sortBy, sortOrder, [callback])
```

### getSingleContainerInJob

    Get single container in a deployment job by id

``` javascript
/**
 * @param {string} jobId
 * @param {string} containerId
 * @param {function} callback optional
 */
netField.deployments.jobs.containers.get(jobId, containerId, [callback])
```

### addRouteToJob

    Add single route to a deployment job

``` javascript
/**
 * @param {string} jobId
 * @param {string} routeId
 * @param {object} params
 * @param {function} callback optional
 */
netField.deployments.jobs.routes.add(jobId, params, [callback])
```

### updateRouteInJob

    Update single route in a deployment job

``` javascript
/**
 * @param {string} jobId
 * @param {string} routeId
 * @param {object} params
 * @param {function} callback optional
 */
netField.deployments.jobs.routes.update(jobId, routeId, params, [callback])
```

### deleteRouteInJob

    Delete single route in a deployment job

``` javascript
/**
 * @param {string} jobId
 * @param {string} routeId
 * @param {function} callback optional
 */
netField.deployments.jobs.routes.delete(jobId, routeId, [callback])
```

### getAllRoutesInJob

    Get a list of all routes in a deployment job

``` javascript
/**
 * @param {string} jobId
 * @param {number} page
 * @param {number} limit
 * @param {string} sortBy
 * @param {string} sortOrder
 * @param {function} callback optional
 */
netField.deployments.jobs.routes.getAll(jobId, page, limit, sortBy, sortOrder, [callback])
```

### getSingleRouteInJob

    Get single route in a deployment job by id

``` javascript
/**
 * @param {string} jobId
 * @param {string} routeId
 * @param {function} callback optional
 */
netField.deployments.jobs.routes.get(jobId, routeId, [callback])
```

### executeJob

    Execute deployment job by filter condition

``` javascript
/**
 * @param {string} jobId
 * @param {string} filterId 
 * @param {object} params
 * @param {function} callback optional
 */
netField.deployments.jobs.execute(jobId, filterId, params, [callback])
```



### addMethodToJobContainer

    Add direct method to container into deployment job

``` javascript
/**
 * @param {string} jobId
 * @param {string} containerId
 * @param {object} params
 * @param {function} callback optional
 */
netField.deployments.jobs.containers.methods.add(jobId, containerId, params, [callback])
```

### updateMethodInJobContainer

    Update container direct method into deployment job

``` javascript
/**
 * @param {string} jobId
 * @param {string} containerId
 * @param {string} methodId
 * @param {object} params
 * @param {function} callback optional
 */
netField.deployments.jobs.containers.methods.update(jobId, containerId, methodId, params, [callback])
```

### deleteMethodInJobContainer

    Delete direct method from container into deployment job document

``` javascript
/**
 * @param {string} jobId
 * @param {string} containerId
 * @param {string} methodId
 * @param {function} callback optional
 */
netField.deployments.jobs.containers.methods.delete(jobId, containerId, methodId, [callback])
```

### getAllMethodsInJobContainer

    Get lis of all direct methods from deployment job container by container id

``` javascript
/**
 * @param {string} jobId
 * @param {string} containerId
 * @param {number} page
 * @param {number} limit
 * @param {string} sortBy
 * @param {string} sortOrder
 * @param {function} callback optional
 */
netField.deployments.jobs.containers.methods.getAll(jobId, containerId, page, limit, sortBy, sortOrder, [callback])
```

### getSingleMethodInJobContainer

    Get single direct method from deployment job container by method id

``` javascript
/**
 * @param {string} jobId
 * @param {string} containerId
 * @param {string} methodId
 * @param {function} callback optional
 */
netField.deployments.jobs.containers.methods.get(jobId, containerId, methodId, [callback])
```
