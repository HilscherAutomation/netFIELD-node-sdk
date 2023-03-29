# Fleet Management

## Overview

*The resources responsible for creating and managing fleet device filter*

## Available Resources

1. [netField.deployments.filters.create(params, [callback])](#createfilter)

2. [netField.deployments.filters.getAll(organisationId, [page], [limit], [sortBy], [sortOrder], [callback])](#getfilters)

3. [netField.deployments.filters.update(filterId, params, [callback])](#updatefilter)

4. [netField.deployments.filters.delete(filterId, [callback])](#deletefilter)

5. [netField.deployments.filters.get(filterId, [callback])](#getfilterbyId)

6. [netField.deployments.filters.execute(params, [page], [limit], [sortBy], [sortOrder], [searchValue], [callback])](#execute)

## Resource Usage

### createfilter

    Create deployment filter

``` javascript
/** 
 * @param {{organisationId: number, name: string, description: string, filterCondition: object}} params
 * @param {function} callback optional
 */
netField.deployments.filters.create(params, [callback])
```

### getfilters

    Get a list of all filters

``` javascript
/**
 * @param {number} organisationId
 * @param {number} page optional
 * @param {number} limit optional
 * @param {string} sortBy optional
 * @param {string} sortOrder optional
 * @param {function} callback optional
 */
netField.deployments.filters.getAll(organisationId, page, limit, sortBy, sortOrder, [callback])
```

### updatefilter

    Update filter by id

``` javascript
/**
 * @param {string} filterId
 * @param {{ name: string, description: string, filterCondition: object}} params
 * @param {function} callback optional
 */
netField.deployments.filters.update(filterId, params, [callback])
```

### deletefilter

    Delete filter by id

``` javascript
/**
 * @param {string} filterId
 * @param {function} callback optional
 */
netField.deployments.filters.delete(filterId, [callback])
```

### getfilterbyId

    Get single filter by id

``` javascript
/**
 * @param {string} filterId
 * @param {function} callback optional
 */
netField.deployments.filters.get(filterId, [callback])
```

### execute
   
    Execute deployment filter by filterId or filter condition 

``` javascript
/**
 * @param {{type: string, filterId: string, filterCondition: object}} params
 * @param {number} page optional
 * @param {number} limit optional
 * @param {string} sortBy optional
 * @param {string} sortOrder optional
 * @param {string} searchValue optional
 * @param {function} callback optional
 */
netField.deployments.filters.execute(params, page, limit, sortBy, sortOrder, searchValue, callback)
```
