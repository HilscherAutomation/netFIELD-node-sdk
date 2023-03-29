# Dashboards

## Overview
*The resources responsible for creating and and managing dashboards*

## Available Resources

1. [netField.dashboards.create(params, [callback])](#createDashboard)

2. [netField.dashboards.update(dashboardId, params, [callback])](#updateDashboard)

3. [netField.dashboards.get(dashboardId, [callback])](#getDashboard)

4. [netField.dashboards.getAll(organisationId, [page], [limit], [sortBy], [sortOrder], [callback])](#getAllDashboards)

5. [netField.dashboards.delete(dashboardId, [callback])](#deleteDashboard)

## Resource Usage

### createDashboard

    Create  a dashboard

```javascript
/**Create a dashboard
 * @param {{organisationId: number, name: string, description: string}} params
 * @param {function} callback optional
*/
netField.dashboards.create(params, [callback])
```

### updateDashboard

    Update a dashboard

```javascript
/**Update a dashboard
 * @param {number} organisationId
 * @param {{organisationId: number, name: string, description: string}} params
 * @param {function} callback optional
*/
netField.dashboards.update(organisationId, params, [callback])
```

### getAllDashboards

    Get list of dashboards

```javascript
/**
 * Get dashboards
 * @param {number} organisationId
 * @param {number} page optional
 * @param {number} limit optional
 * @param {string} sortBy optional
 * @param {string} sortOrder optional (asc, desc)
 * @param {function} callback optional
*/
netField.dashboards.getAll(organisationId, page, limit, sortBy, sortOrder, [callback])
```

### getDashboard

    Get a single dashboard

```javascript
/**
 * @param {string} dashboardId
 * @param {function} callback optional
*/
netField.dashboards.get(dashboardId, [callback])
```

### deleteDashboard

    delete a dashboard

```javascript
/**
 * @param {string} dashboardId
 * @param {function} callback optional
*/
netField.dashboards.delete(dashboardId, [callback])
```

