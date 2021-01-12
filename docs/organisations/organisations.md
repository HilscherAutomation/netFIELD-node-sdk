 # Organisations

## Overview
*The resorces responsible for creating and managing organisations*

## Available Resources
  
1. [netField.organisation.get(organisationId, depth, [callback])](#getorganisation)

2. [netField.organisation.update(organisationId, params, [callback])](#updateorganisation)

3. [netField.organisation.create(organisationId, params, [callback])](#createorganisation)

4. [netField.organisation.delete(organisationId, [callback])](#deleteorganisation)


## Resource Usage

### getorganisation

    Get organisation by organisationId 

```javascript
/**
 * @param {number} organisationId
 * @param {number} depth
 * @param {function} callback optional
*/
netField.organisation.get(organisationId, depth, [callback])
```

### updateorganisation

    Update organisation by organisationId

```javascript
/**
 * @param {number} organisationId
 * @param {object} params
 * @param {function} callback optional
*/
netField.organisation.update(organisationId, params, [callback])
```

### createorganisation

    Create Organisation

```javascript
/**
 * @param {number} parentOrganisationId
 * @param {object} params
 * @param {function} callback optional
*/
netField.organisation.create(parentOrganisationId, params, [callback])
```

### deleteorganisation

    Delete organisation by organisationId

```javascript
/**
 * @param {number} organisationId
 * @param {function} callback optional
*/
netField.organisation.delete(organisationId, [callback])
```

### getorganisationdevices

    Get devices per organisationId and child organisations

```javascript
/**
 * @param {number} organisationId
 * @param {number} page
 * @param {string} attribute
 * @param {string} sort
 * @param {string} depth
 * @param {function} callback optional
*/
netField.organisation.devices.get(organisationId, page, attribute, sort, depth, [callback])
```
