# Fleet Management

## Overview

*The resources responsible for creating and managing fleet device rollout*

## Available Resources

1. [netField.deployments.rollouts.getAll(organisationId, [page], [limit], [sortBy], [sortOrder], [jobId], [status], [callback])](#getrollouts)

2. [netField.deployments.rollouts.get(rolloutId, [callback])](#getrolloutbyId)

3. [netField.deployments.rollouts.pause(rolloutId, [callback])](#pausejobbyrolloutid)

4. [netField.deployments.rollouts.start(rolloutId, [callback])](#startjobbyrolloutid)

5. [netField.deployments.rollouts.rollback(rolloutId, [callback])](#rollbackjobbyrolloutid)

6. [netField.deployments.rollouts.getRollbacks(rolloutId, deviceId, [callback])](#getrollbacks)

7. [netField.deployments.rollouts.delete(rolloutId, [callback])](#deleterollout)

## Resource Usage

### getrollouts

    Get a list of all rollouts by organisation id

``` javascript
/**
 * @param {number} organisationId
 * @param {number} page optional
 * @param {number} limit optional
 * @param {string} sortBy optional
 * @param {string} sortOrder optional (asc, desc)
 * @param {string} jobId optional
 * @param {string} status optional
 * @param {function} callback optional
 */
netField.deployments.rollouts.getAll(organisationId, page, limit, sortBy, sortOrder, jobId, status, [callback])
```
### getrolloutbyId

    Get single rollout by id

``` javascript
/**
 * @param {string} rolloutId
 * @param {function} callback optional
 */
netField.deployments.rollouts.get(rolloutId, [callback])
```

### pausejobbyrolloutid

    Pause execution of deployment job by rolloutId

``` javascript
/**
 * @param {string} rolloutId
 * @param {function} callback optional
 */
netField.deployments.rollouts.pause(rolloutId, [callback])
```

### startjobbyrolloutid

    Start execution of deployment job by rolloutId

``` javascript
/**
 * @param {string} rolloutId
 * @param {function} callback optional
 */
netField.deployments.rollouts.start(rolloutId, [callback])
```

### rollbackjobbyrolloutid

    Rollback deployment job by rolloutId

``` javascript
/**
 * @param {string} rolloutId
 * @param {function} callback optional
 */
netField.deployments.rollouts.rollback(rolloutId, [callback])
```

### getrollbacks

    Get device rollback items by rolloutId and deviceIdd

``` javascript
/**
 * @param {string} rolloutId
 * @param {string} deviceId
 * @param {function} callback optional
 */
netField.deployments.rollouts.getRollbacks(rolloutId, deviceId, [callback])
```

### deleterollout

    Delete deployment rollout

``` javascript
/**
 * @param {string} rolloutId
 * @param {function} callback optional
 */
netField.deployments.rollouts.delete(rolloutId, [callback])
```