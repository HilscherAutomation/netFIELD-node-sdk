 # Organisations

## Overview
*The resorces responsible for creating and managing organisations*

## Available Resources
  
1. [netField.organisation.get(organisationId, depth, [callback])](#getorganisation)

2. [netField.organisation.update(organisationId, params, [callback])](#updateorganisation)

3. [netField.organisation.create(organisationId, params, [callback])](#createorganisation)

4. [netField.organisation.delete(organisationId, [callback])](#deleteorganisation)

5. [netField.organisation.getAll([page], [limit], [sortBy], [sortOrder], [type], [callback])](#getorganisations)

6. [netField.organisation.createUpgradeRequest(organisationId, params, [callback])](#createupgraderequest)

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
 * @param {{name: string,
 * admin: string,
 * phoneNumber: string,
 * street: string,
 * houseNumber: string,
 * addressSupplement: string,
 * zipCode: string,
 * city: string,
 * state: string,
 * country: string,
 * notes: string,
 * companyName: string,
 * allowChildrenToInheritManifest: boolean,
 * inheritParentManifest: boolean,
 * childOrganisationsLimit: number,
 * usersLimit: number,
 * devicesLimit: number,
 * keysLimit: number,
 * keysRequestMonthlyLimit: number,
 * wsConnectionLimit: number,
 * dataStorageLimit: number,
 * persistStreamingData: boolean,
 * }} params
 * @param {function} callback optional
*/
netField.organisation.update(organisationId, params, [callback])
```

### createorganisation

    Create Organisation

```javascript
/**
 * @param {number} organisationId
 * @param {{name: string,
 * admin: string,
 * phoneNumber: string,
 * street: string,
 * houseNumber: string,
 * addressSupplement: string,
 * zipCode: string,
 * city: string,
 * state: string,
 * country: string,
 * notes: string,
 * allowChildrenToInheritManifest: boolean,
 * childOrganisationsLimit: number,
 * usersLimit: number,
 * devicesLimit: number,
 * keysLimit: number,
 * keysRequestMonthlyLimit: number,
 * wsConnectionLimit: number,
 * dataStorageLimit: number,
 * inheritParentManifest: boolean,
 * persistStreamingData: boolean,
 * defaultRoles: Array<{name: string, roleName: string}>,
 * }} params
 * @param {function} callback optional
*/
netField.organisation.create(organisationId, params, [callback])
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
 * @param {number} page optional
 * @param {number} limit optional
 * @param {string} sortBy optional
 * @param {string} sortOrder optional (asc, desc)
 * @param {string} type optional (tenants, organisations)
 * @param {function} callback optional
 */
netField.organisation.getAll(page, limit, sortBy, sortOrder, type, [callback])
```

### createupgraderequest

    Create organisation upgrade request

```javascript
/** 
 * @param {number} organisationId
 * @param {{ email: string, street: string, houseNumber: string, zipCode: string,
    city: string, state?: string, country: string, subscriptionPlan: string}} params
 * @param {function} callback optional
 */
netField.organisation.organisation.createUpgradeRequest(organisationId, params, [callback])
```
