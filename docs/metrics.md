# Metrics

## Overview
*The resources responsible for creating and managing metrics*

## Available Resources

## Resource Usage
1. [netField.metrics.query.create(params, [options], [callback])](#createMetrics)

2. [netField.metrics.query.update(queryId, params, [options], [callback])](#updateMetrics)

3. [netField.metrics.query.execute(startDate, endDate, params, [options], [callback])](#executeQuery)

4. [netField.metrics.query.executeSaved(organisationId, queryId, startDate, endDate, [collection], [callback])](#executeSavedQuery)

5. [netField.metrics.query.get(queryId, [callback])](#getSingleQuery)

6. [netField.metrics.query.getQueries(organisationId, [page], [limit], [sortBy], [sortOrder], [callback])](#getQueries)

7. [netField.metrics.query.delete(queryId, [callback])](#deleteQuery)

8. [netField.metrics.requestdata.get(requestId, [callback])](#getrequest)

9. [netField.metrics.fields.get([callback])](#getfields)

### createMetrics

    Create metrics query

 ```javascript
/**
 * @param {{organisationId: number, name: string, filters: Array<object>, includeChildOrganisations: boolean, description: string}} params
 * @param {any} options optional
 * @param {function} callback optional
*/
netField.metrics.query.create(params, [options], [callback])
```

### updateMetrics

    Update metrics query by Id

```javascript
/**
 * @param {number} queryId
 * @param {{organisationId: number, name: string, filters: Array<object>, includeChildOrganisations: boolean, description: string}} params
 * @param {any} options optional
 * @param {function} callback optional
*/
netField.metrics.query.update(queryId, params, [options], [callback])
```

### executeQuery

    Execute metrics query

```javascript
/**
 * @param {number} organisationId
 * @param {string} startDate
 * @param {string} endDate
 * @param {{collection: string,
 * organisationId: number,
 * filters: Array<object>,
 * includeChildOrganisations: boolean}} params
 * @param {any} options optional
 * @param {function} callback optional
*/
netField.metrics.query.execute(organisationId, startDate, endDate, params, [options], [callback])
```

### executeSavedQuery

    Execute already saved metrics query

```javascript
/**
 * @param {number} organisationId
 * @param {number} queryId
 * @param {string} startDate
 * @param {string} endDate
 * @param {string} collection optional
 * @param {function} callback optional
*/
netField.metrics.query.executeSaved(organisationId, queryId, startDate, endDate, [collection], [callback])
```
### getSingleQuery

    Get single metrics query by queryId

```javascript
/**
 * @param {number} queryId
 * @param {function} callback optional
*/
netField.metrics.query.get(queryId, [callback])
```
### getQueries

    Get list of metrics queries

```javascript
/**
 * @param {number} organisationId
 * @param {number} page optional
 * @param {number} limit optional
 * @param {string} sortBy optional
 * @param {string} sortOrder optional
 * @param {function} callback optional
*/
netField.metrics.query.getAll(organisationId, page, limit, sortBy, sortOrder, [options])
```
### deleteQuery

    Delete metrics query by queryId

```javascript
/**
 * @param {number} queryId
 * @param {function} callback optional
*/
netField.metrics.query.delete(organisationId, page, limit, sortBy, sortOrder, [options])
```
### getrequest

    Get request data by request id

```javascript
/**
 * @param {string} requestId
 * @param {function} callback optional
*/
netField.metrics.requestdata.get(requestId, [callback])
```
### getfields

    Get all available metrics query fields

```javascript
/**
 * @param {function} callback optional
*/
netField.metrics.fields.get([callback])
```