# Tenants

## Overview
*The resources responsible for installing and managing tenants*

## Available Resources

## Resource Usage
1. [netField.tenants.create(params, [callback])](#createTenant)

2. [netField.tenants.update(tenantId, params, [callback])](#updateTenant)

3. [netField.tenants.get(tenantId, [callback])](#getTenant)

4. [netField.tenants.getAll(page, limit, sortBy, sortOrder, [callback])](#getTenants)

5. [netField.tenants.delete(tenantId, [callback])](#deleteTenant)

### createTenant

    Create tenant's root organization

 ```javascript
/**
 * @param {object} params
 * @param {function} callback optional
*/
netField.tenants.create(params, [callback])
```

### updateTenant

    Update tenant by the tenant's Id

```javascript
/**
 * @param {number} tenantId
 * @param {object} params
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
 * @param {any} options optional
 * @param {function} callback optional
*/
netField.tenants.getAll([options], [callback])
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
