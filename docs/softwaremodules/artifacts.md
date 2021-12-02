 # Software Module Artifacts

## Overview

*The resources responsible for creating and managing software module artifacts*

## Available Resources

1. [netField.softwaremodules.artifacts.create(params, softwareModuleId, [callback])](#createsoftwaremoduleartifact)

2. [netField.softwaremodules.artifacts.getartifact(softwareModuleId, artifactId, [callback])](#getsoftwaremoduleartifact)

## Resource Usage

### createsoftwaremoduleartifact

    Create software module artifact

``` javascript
/**
 * @param {Array<object>} params
 * @param {number} softwareModuleId
 * @param {function} callback optional
 */
netField.softwaremodules.artifacts.create(params, softwareModuleId, [callback])
```

### getsoftwaremoduleartifact

    Get a single software module artifact

``` javascript
/**
 * @param {number} softwareModuleId
 * @param {number} artifactId
 * @param {function} callback optional
 */
netField.softwaremodules.artifacts.getartifact(softwareModuleId, artifactId[callback])
```
