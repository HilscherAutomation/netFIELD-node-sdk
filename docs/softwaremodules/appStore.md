 # Software Module Orders

## Overview

*The resources responsible for creating and managing software module orders*

## Available Resources

1. [netField.softwaremodules.orders.get(orderId, [callback])](#getsoftwaremoduleorder)

2. [netField.softwaremodules.orders.getAll(organisationId, [page], [limit], [sortBy], [sortOrder], [callback])](#getAll)

## Resource Usage

### getsoftwaremoduleorder

     Get a single software module of type order

``` javascript
/**
 * @param {number} orderId
 * @param {function} callback optional
 */
[netField.softwaremodules.orders.get(softwareModuleId, [callback])
```

### getAll

    Get all software modules of type order for given organisation 

``` javascript
/**
 * @param {organisationId} number
 * @param {number} page optional
 * @param {number} limit optional
 * @param {string} sortBy optional
 * @param {string} sortOrder optional
 * @param {function} callback optional
*/
netField.softwaremodules.orders.getAll(organisationId, page, limit, sortBy, sortOrder, [callback])
```
