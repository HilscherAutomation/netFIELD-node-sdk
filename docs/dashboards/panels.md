# Dashboard panels

## Overview
*The resources responsible for creating and and managing dashboard panels*

## Available Resources


1. [netField.dashboards.panels.create(dashboardId, formData, [options], [callback])](#createDashboardPanel)

2. [netField.dashboards.panels.update(dashboardId, panelId, formData, [options], [callback])](#updateDashboardPanel)

3. [netField.dashboards.panels.get(dashboardId, panelId, [callback])](#getDashboardPanel)

4. [netField.dashboards.panels.getAll(dashboardId, [callback])](#getAllDashboardPanels)

5. [netField.dashboards.panels.delete(dashboardId, panelId, [callback])](#deleteDashboardPanel)

## Resource Usage

### createDashboardPanel

    Create  a dashboard panel

```javascript
/**Create a dashboard
 * @param {string} dashboardId 
 * @param {{title: string, 
 *  layouts: {
 *    lg: {
 *       layoutPosX: number,
 *       layoutPosY: number,
 *       layoutWidth: number,
 *       layoutHeight: number
 *     },
 *    md: {
 *       layoutPosX: number,
 *       layoutPosY: number,
 *       layoutWidth: number,
 *       layoutHeight: number
 *     },
 *    sm: {
 *       layoutPosX: number,
 *       layoutPosY: number,
 *       layoutWidth: number,
 *       layoutHeight: number
 *     },
 *    xs: {
 *       layoutPosX: number,
 *       layoutPosY: number,
 *       layoutWidth: number,
 *       layoutHeight: number
 *     },
 *    xxs: {
 *       layoutPosX: number,
 *       layoutPosY: number,
 *       layoutWidth: number,
 *       layoutHeight: number
 *     }
 *  },
 * types: string,
 * visualisation: {},
 * image: file
 * }} params
 * @param {object} options optional
 * @param {function} callback optional
*/
netField.dashboards.panels.create(dashboardId, params, [options], [callback])
```

### updateDashboardPanel

    Update a dashboard panel

```javascript
/**Update a dashboard
 * @param {string} dashboardId 
 * @param {string} panelId 
 * @param {{title: string, 
 *  layouts: {
 *    lg: {
 *       layoutPosX: number,
 *       layoutPosY: number,
 *       layoutWidth: number,
 *       layoutHeight: number
 *     },
 *    md: {
 *       layoutPosX: number,
 *       layoutPosY: number,
 *       layoutWidth: number,
 *       layoutHeight: number
 *     },
 *    sm: {
 *       layoutPosX: number,
 *       layoutPosY: number,
 *       layoutWidth: number,
 *       layoutHeight: number
 *     },
 *    xs: {
 *       layoutPosX: number,
 *       layoutPosY: number,
 *       layoutWidth: number,
 *       layoutHeight: number
 *     },
 *    xxs: {
 *       layoutPosX: number,
 *       layoutPosY: number,
 *       layoutWidth: number,
 *       layoutHeight: number
 *     }
 *  },
 * types: string,
 * visualisation: {},
 * image: file
 * }} params
 * @param {object} options optional
 * @param {function} callback optional
*/
netField.dashboards.panels.update(dashboardId, panelId, params, [options], [callback])
```
### getDashboardPanel

    Get a single dashboard panel

```javascript
/**
 * @param {string} dashboardId
 * @param {string} panelId
 * @param {function} callback optional
*/
netField.dashboards.panels.get(dashboardId, panelId, [callback])
```

### getAllDashboardPanels

    Get list of dashboard panels

```javascript
/**
 * Get list of dashboard panels
 * @param {string} dashboardId
 * @param {function} callback optional
*/
netField.dashboards.panels.getAll(dashboardId, [callback])
```

### deleteDashboardPanel

    delete a dashboard panel

```javascript
/**
 * @param {string} dashboardId
 * @param {string} panelId
 * @param {function} callback optional
*/
netField.dashboards.panels.delete(dashboardId, panelId [callback])
```

