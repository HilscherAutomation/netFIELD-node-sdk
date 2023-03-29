 # Software Modules

## Overview

*The resources responsible for creating and managing software modules*

## Available Resources

1. [netField.softwaremodules.modules.create(params, [callback])](#createsoftwaremodule)

2. [netField.softwaremodules.modules.getmodule(softwareModuleId, [callback])](#getsoftwaremodule)

3. [netField.softwaremodules.modules.delete(softwareModuleId, [callback])](#deletesoftwaremodule)

## Resource Usage

### createsoftwaremodule

    Create software module(s)

``` javascript
/**
 * @param {Array<{vendor: string, name: string, description: string, type: string, version: string}>} params
 * @param {function} callback optional
 */
netField.softwaremodules.modules.create(params, [callback])
```

### getsoftwaremodule

    Get a single software module

``` javascript
/**
 * @param {number} softwareModuleId
 * @param {function} callback optional
 */
netField.softwaremodules.modules.getmodule(softwareModuleId, [callback])
```
### deletesoftwaremodule

    Delete a single software module by id

``` javascript
/**
 * @param {number} softwareModuleId
 * @param {function} callback optional
 */
netField.softwaremodules.modules.delete(softwareModuleId, [callback])
```