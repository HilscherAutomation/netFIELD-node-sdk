 # Software Module Orders

## Overview

*The resources responsible for creating and managing software module orders*

## Available Resources

1. [netField.softwaremodules.appStore.get(orderId, [callback])](#getsoftwaremoduleorder)

2. [netField.softwaremodules.appStore.getAll(organisationId, page, limit, sortBy, sortOrder, [callback])](#getAll)

## Resource Usage

### getsoftwaremoduleorder

     Get a single software module of type order

``` javascript
/**
 * @param {number} orderId
 * @param {function} callback optional
 */
[netField.softwaremodules.appStore.get(softwareModuleId, [callback])
```

### getAll

    Get all software modules of type order for given organisation 

``` javascript
/**
 * @param {organisationId} number
 * @param {number} page
 * @param {number} limit
 * @param {string} sortBy
 * @param {string} sortOrder
 * @param {function} callback optional
*/
netField.softwaremodules.artifacts.getAll(([page, limit, sortBy, sortOrder, callback])
```
