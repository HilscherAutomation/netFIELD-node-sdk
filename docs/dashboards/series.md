# Dashboard panel series

## Overview
*The resources responsible for creating and and managing dashboard panel series*

## Available Resources


1. [netField.dashboards.series.create(dashboardId, panelId, params, [callback])](#createDashboardPanelSeries)

2. [netField.dashboards.series.update(dashboardId, panelId, seriesId, params, [callback])](#updateDashboardPanelSeries)

3. [netField.dashboards.series.get(dashboardId, panelId, seriesId, [callback])](#getDashboardPanelSeries)

4. [netField.dashboards.series.getAll(dashboardId, panelId, [callback])](#getAllDashboardPanelSeries)

5. [netField.dashboards.series.delete(dashboardId, panelId, seriesId, [callback])](#deleteDashboardPanelSeries)

## Resource Usage

### createDashboardPanelSeries

    Create  a dashboard panel series

```javascript
/**Create a dashboard panel series
 * @param {string} dashboardId 
 * @param {string} panelId 
 * @param {{deviceId: string,
 * topic: string,
 * columns: string,
 * rows: string,
 * visualisation: object,
 * customDataStructures: Array<{resource: string, resourcePathExpression: string, type: string}>,
 * containerName: string
 * }} params
 * @param {function} callback optional
*/
netField.dashboards.series.create(dashboardId, panelId, params, [callback])
```

### updateDashboardPanelSeries

    Update a dashboard panel series

```javascript
/**Update a dashboard panel series
 * @param {string} dashboardId 
 * @param {string} panelId 
 * @param {string} seriesId 
 * @param {{deviceId: string,
 * topic: string,
 * columns: string,
 * rows: string,
 * visualisation: object,
 * customDataStructures: Array<{resource: string, resourcePathExpression: string, type: string}>,
 * containerName: string
 * }} params
 * @param {function} callback optional
*/
netField.dashboards.series.update(dashboardId, panelId, seriesId, params, [callback])
```
### getDashboardPanelSeries

    Get a single dashboard panel series

```javascript
/**Get a dashboard panel series
 * @param {string} dashboardId
 * @param {string} panelId
 * @param {string} seriesId
 * @param {function} callback optional
*/
netField.dashboards.series.get(dashboardId, panelId, seriesId, [callback])
```

### getAllDashboardPanelSeries

    Get list of dashboard panel series

```javascript
/**
 * Get list of dashboard panel series
 * @param {string} dashboardId
 * @param {string} panelId
 * @param {function} callback optional
*/
netField.dashboards.series.getAll(dashboardId, panelId, [callback])
```

### deleteDashboardPanelSeries

    delete a dashboard panel series

```javascript
/**
 * @param {string} dashboardId
 * @param {string} panelId
 * @param {string} seriesId
 * @param {function} callback optional
*/
netField.dashboards.series.delete(dashboardId, panelId, seriesId, [callback])
```

