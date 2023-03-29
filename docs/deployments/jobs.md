# Fleet Management

## Overview

*The resources responsible for creating and managing fleet device deployment*

## Available Resources

1. [netField.deployments.jobs.create(params, [callback])](#createJob)

2. [netField.deployments.jobs.containers.add(jobId, containerId, params, [callback])](#addContainerToJob)

3. [netField.deployments.jobs.containers.update(jobId, containerId, params, [callback])](#updateContainerInJob)

4. [netField.deployments.jobs.containers.delete(jobId, containerId, [callback])](#deleteContainerInJob)

5. [netField.deployments.jobs.containers.getAll(jobId, [page], [limit], [sortBy], [sortOrder], [callback])](#getAllContainersInJob)

6. [netField.deployments.jobs.containers.get(jobId, containerId, [callback])](#getSingleContainerInJob)

7. [netField.deployments.jobs.update(jobId, params, [callback])](#updateJob)

8. [netField.deployments.jobs.delete(jobId, [callback])](#deleteJob)

9. [netField.deployments.jobs.get(jobId, [callback])](#getSingleJob)

10. [netField.deployments.jobs.getAll(organisationId, [page], [limit], [sortBy], [sortOrder], [callback])](#getAllJobs)

11. [netField.deployments.jobs.routes.add(jobId, params, [callback])](#addRouteToJob)

12. [netField.deployments.jobs.routes.update(jobId, routeId, params, [callback])](#updateRouteInJob)

13. [netField.deployments.jobs.routes.delete(jobId, routeId, [callback])](#deleteRouteInJob)

14. [netField.deployments.jobs.routes.getAll(jobId, [page], [limit], [sortBy], [sortOrder], [callback])](#getAllRoutesInJob)

15. [netField.deployments.jobs.routes.get(jobId, routeId, [callback])](#getSingleRouteInJob)

16. [netField.deployments.jobs.execute(jobId, filterId, params, [callback])](#executeJob)

17. [netField.deployments.jobs.containers.methods.add(jobId, containerId, params, [callback])](#addMethodToJobContainer)

18. [netField.deployments.jobs.containers.methods.update(jobId, containerId, methodId, params, [callback])](#updateMethodInJobContainer)

19. [netField.deployments.jobs.containers.methods.delete(jobId, containerId, methodId, [callback])](#deleteMethodInJobContainer)

20. [netField.deployments.jobs.containers.methods.getAll(jobId, containerId, [page], [limit], [sortBy], [sortOrder], [callback])](#getAllMethodsInJobContainer)

21. [netField.deployments.jobs.containers.methods.get(jobId, containerId,  methodId, [callback])](#getSingleMethodInJobContainer)

22. [netField.deployments.jobs.os.add(jobId, params, [callback])](#addostojob)

23. [netField.deployments.jobs.os.delete(jobId, platform, [callback])](#deleteosinjob)

24. [netField.deployments.jobs.os.getAll(jobId, [page], [limit], [sortBy], [sortOrder], [callback])](#getallosinjob)

25. [netField.deployments.jobs.os.get(jobId, platform, [callback])](#getsingleosinjob)

26. [netField.deployments.jobs.executeByGroup(jobId, groupId, params, [callback])](#executeJobByGroup)

27. [netField.deployments.jobs.executeCustomSelect(jobId, params, [callback])](#executeJobCustomSelect)

28. [netField.deployments.jobs.schedules.create(params, [callback])](#createJobSchedule)

29. [netField.deployments.jobs.schedules.update(scheduleId, params, [callback])](#updateJobSchedule)

30. [netField.deployments.jobs.schedules.delete(scheduleId, [callback])](#deleteJobSchedule)

31. [netField.deployments.jobs.schedules.get(scheduleId, [callback])](#getJobSchedule)

32. [netField.deployments.jobs.schedules.getAll(organisationId, [page], [limit], [sortBy], [sortOrder], [callback])](#getAllJobSchedules)

## Resource Usage

### createJob

    Create deployment job

``` javascript
/** 
 * @param {{organisationId: string,
 * name: string,
 * containers: Array<{containerId: string, processorArchitecture: string, directMethods: Array<object>}>
 * os: object,
 * routes: Array<{name: string, source: string, condition: string, target: string}>
 * type: string}} params
 * @param {function} callback optional
 */
netField.deployments.jobs.create(params, [callback])
```

### updateJob

    Update deployment job

``` javascript
/** 
 * @param {string} jobId
 * @param {{name: string,
 * containers: Array<{containerId: string, processorArchitecture: string, directMethods: Array<object>}>
 * routes: Array<{name: string, source: string, condition: string, target: string}>
 * os: object }} params
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
 * @param {number} page optional
 * @param {number} limit optional
 * @param {string} sortBy optional
 * @param {string} sortOrder optional
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
 * @param {{version: string,
 * restartPolicy: string,
 * desiredStatus: string,
 * containerCreateOptions: object,
 * containerTwinDesiredOptions: object,
 * environmentVariables: Array<object>
 * startupOrder: number, 
 * useProxySettings: boolean,
 * processorArchitecture: string,
 * directMethods: Array<object>}} params
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
 * @param {{version: string,
 * restartPolicy: string,
 * desiredStatus: string,
 * containerCreateOptions: object,
 * containerTwinDesiredOptions: object,
 * environmentVariables: Array<object>
 * startupOrder: number, 
 * useProxySettings: boolean,
 * processorArchitecture: string,
 * directMethods: Array<object>}} params
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
 * @param {number} page optional
 * @param {number} limit optional
 * @param {string} sortBy optional
 * @param {string} sortOrder optional
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
 * @param {{name: string, source: string, condition: string, target: string}} params 
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
 * @param {{name: string, source: string, condition: string, target: string}} params 
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
 * @param {number} page optional
 * @param {number} limit optional
 * @param {string} sortBy optional
 * @param {string} sortOrder optional
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
 * @param {{excludedDevices: Array<string>}} params
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
* @param {{methodName: string, methodPayload: object}} params 
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
* @param {{methodName: string, methodPayload: object}} params 
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
 * @param {number} page optional
 * @param {number} limit optional
 * @param {string} sortBy optional
 * @param {string} sortOrder optional
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

### addOsToJob

    Add (update if exist) single os to a deployment job

``` javascript
/**
 * @param {string} jobId 
 * @param {{platform: string, edgeosId: string}} params
 * @param {function} callback optional
 */
netField.deployments.jobs.os.add(jobId, params, [callback])
```

### deleteOsInJob

    Delete single os in a deployment job by platform

``` javascript
/**
 * @param {string} jobId
 * @param {string} platform
 * @param {function} callback optional
 */
netField.deployments.jobs.os.delete(jobId, platform, [callback])
```

### getAllOsInJob

    Get a list of all os in a deployment job

``` javascript
/**
 * @param {string} jobId
 * @param {number} page optional
 * @param {number} limit optional
 * @param {string} sortBy optional
 * @param {string} sortOrder optional
 * @param {function} callback optional
 */
netField.deployments.jobs.os.getAll(jobId, page, limit, sortBy, sortOrder, [callback])
```

### getSingleOsInJob

    Get single route in a deployment job by platform

``` javascript
/**
 * @param {string} jobId
 * @param {string} platform
 * @param {function} callback optional
 */
netField.deployments.jobs.routes.get(jobId, platform, [callback])
```

### executeJobByGroup

    Execute deployment job by device group

``` javascript
/**
 * @param {string} jobId
 * @param {number} groupId 
 * @param {{excludedDevices: Array<string>}} params
 * @param {function} callback optional
 */
netField.deployments.jobs.executeByGroup(jobId, groupId, params, [callback])
```

### executeJobCustomSelect

    Execute deployment job with custom selection of devices

``` javascript
/**
 * @param {string} jobId
 * @param {{deviceIds: Array<string>}} params
 * @param {function} callback optional
 */
netField.deployments.jobs.executeCustomSelect(jobId, params, [callback])
```

### createJobSchedule

    Create a schedule of deployment job execution

``` javascript
/** 
 * @param {{organisationId: number,
 * jobId: string,
 * targetType: string,
 * targetId: string | number,
 * deviceIds: Array<string>,
 * excludedDevices: Array<string>,
 * scheduleType: string, 
 * startTime: Date,
 * title: string,
 * description: string}} params
 * @param {function} callback optional
 */
netField.deployments.jobs.schedules.create(params, [callback])
```

### updateJobSchedule

    Update a schedule of deployment job execution

``` javascript
/** 
 * @param {string} scheduleId
 * @param {{organisationId: number,
 * jobId: string,
 * targetType: string,
 * targetId: string | number,
 * deviceIds: Array<string>,
 * excludedDevices: Array<string>,
 * scheduleType: string, 
 * startTime: Date,
 * title: string,
 * description: string}} params
 * @param {function} callback optional
 */
netField.deployments.jobs.schedules.update(scheduleId, params, [callback])
```

### deleteJobSchedule

    Delete a schedule of deployment job execution

``` javascript
/** 
 * @param {string} scheduleId
 * @param {function} callback optional
 */
netField.deployments.jobs.schedules.delete(scheduleId, [callback])
```

### getJobSchedule

    Get a schedule of deployment job execution by id

``` javascript
/** 
 * @param {string} scheduleId
 * @param {function} callback optional
 */
netField.deployments.jobs.schedules.get(scheduleId, [callback])
```

### getAllJobSchedules

    Get a list of all deployment job schedules

``` javascript
/** 
 * @param {number} organisationId
 * @param {number} page optional
 * @param {number} limit optional
 * @param {string} sortBy optional
 * @param {string} sortOrder optional
 * @param {function} callback optional
 */
netField.deployments.jobs.schedules.getAll(organisationId, page, limit, sortBy, sortOrder, [callback])
```