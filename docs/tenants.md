# Tenants

## Overview
*The resources responsible for installing and managing tenants*

## Available Resources

## Resource Usage
1. [netField.tenants.create(params, [callback])](#createTenant)

2. [netField.tenants.update(tenantId, params, [callback])](#updateTenant)

3. [netField.tenants.get(tenantId, [callback])](#getTenant)

4. [netField.tenants.getAll([page], [limit], [sortBy], [sortOrder], [callback])](#getTenants)

5. [netField.tenants.delete(tenantId, [callback])](#deleteTenant)

### createTenant

    Create tenant's root organization

 ```javascript
/**
 * @param {name: string,
 * admin: object,
 * phoneNumber: string,
 * street: string,
 * houseNumber: string,
 * addressSupplement: string,
 * zipCode: string,
 * city: string,
 * state: string,
 * country: string,
 * notes: string,
 * persistStreamingData: boolean,
 * childOrganisationsLimit: number,
 * usersLimit: number,
 * devicesLimit: number,
 * keysLimit: number, 
 * keysRequestMonthlyLimit: number,
 * dataStorageLimit: number, 
 * wsConnectionLimit: number} params
 * @param {function} callback optional
*/
netField.tenants.create(params, [callback])
```

### updateTenant

    Update tenant by the tenant's Id

```javascript
/**
 * @param {number} tenantId
 * @param {status: string,
 * childOrganisationsLimit: number,
 * usersLimit: number,
 * devicesLimit: number,
 * keysLimit: number, 
 * keysRequestMonthlyLimit: number,
 * dataStorageLimit: number, 
 * wsConnectionLimit: number} params
 * @param {function} callback optional
*/
netField.tenants.update(tenantId, params, [callback])
```

### getTenant

    Get a tenant by tenant Id

```javascript
/**
 * @param {number} tenantId
 * @param {function} callback optional
*/
netField.tenants.get(tenantId, [callback])
```

### getTenants

    Get All tenat organizations

```javascript
/**
 * @param {number} page optional
 * @param {number} limit optional
 * @param {string} sortBy optional
 * @param {string} sortOrder optional (asc, desc)
 * @param {function} callback optional
*/
netField.tenants.getAll(page, limit, sortBy, sortOrder, [callback])
```

### deleteTenant

    Delete tenant by root tenant Id

```javascript
/**
 * @param {number} tenantId
 * @param {function} callback optional
 */
netField.tenants.delete(tenantId, [callback])
```
