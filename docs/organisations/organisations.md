 # Organisations

## Overview
*The resorces responsible for creating and managing organisations*

## Available Resources
  
1. [netField.organisation.get(organisationId, depth, [callback])](#getorganisation)

2. [netField.organisation.update(organisationId, params, [callback])](#updateorganisation)

3. [netField.organisation.create(organisationId, params, [callback])](#createorganisation)

4. [netField.organisation.delete(organisationId, [callback])](#deleteorganisation)

5. [netField.organisation.getAll(page, limit, sortBy, sortOrder, type [callback])](#getorganisations)

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

### getorganisations

    Get available organisations

```javascript
/** 
 * @param {number} page (optional)
 * @param {number} limit (optional)
 * @param {string} sortBy (optional)
 * @param {string} sortOrder asc, desc (optional)
 * @param {string} type tenants, organisations (optional)
 * @param {function} callback (optional)
 */
netField.organisation.getAll(page, limit, sortBy, sortOrder, type, [callback])
```


