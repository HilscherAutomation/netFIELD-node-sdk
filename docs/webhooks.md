# Webhooks

## Overview
*The resources responsible for managing Webhooks*

## Available Resources

1. [netField.webhooks.getAll(organisationId, [page], [limit], [sortBy], [sortOrder], [callback])](#getAll)

2. [netField.webhooks.get(webhookId, [callback])](#get)

3. [netField.webhooks.create(params, [callback])](#create)

4. [netField.webhooks.update(webhookId, params, [callback])](#update)

5. [netField.webhooks.delete(webhookId, [callback])](#delete)

6. [netField.webhooks.test(params, [callback])](#test)

## Resource Usage

### getAll

    Get list of webhooks

```javascript
/**
 * @param {number} organisationId
* @param {number} page optional
 * @param {number} limit optional
 * @param {string} sortBy optional
 * @param {string} sortOrder optional (asc, desc)
 * @param {function} callback optional
*/
netField.webhooks.getAll(organisationId, page, limit, sortBy, sortOrder, [callback])
```

### get

    Get a webhook

```javascript
/**
 * @param {string} webhookId
 * @param {function} callback optional
*/
netField.webhooks.get(webhookId, [callback])
```

### create

    Adds a new webhook

```javascript
/**
 * @param {{ organisationId: number,
 * url: string,
 * description: string,
 * requestType: string,
 * actionType: string,
 * headers: Array<{name: string, value: string}>,
 * queries: Array<{name: string, value: string}>,
 * payload: string}} params
 * @param {function} callback optional
*/
netField.webhooks.create(params, [callback])
```

### update

    Updates a webhook

```javascript
/**
 * @param {string} webhookId
 * @param {{url: string,
 * description: string,
 * requestType: string,
 * actionType: string,
 * headers: Array<{name: string, value: string}>,
 * queries: Array<{name: string, value: string}>,
 * payload: string}} params
 * @param {function} callback optional
*/
netField.webhooks.update(webhookId, params, [callback])
```

### delete

    Delete a webhook

```javascript
/**
 * @param {string} webhookId
 * @param {function} callback optional
*/
netField.webhooks.delete(webhookId, [callback])
```

### test

    Trigger a single webhook for testing purposes 

```javascript
/**
 * @param {{organisationId: number,
 * url: string,
 * description: string,
 * requestType: string,
 * actionType: string,
 * headers: Array<{name: string, value: string}>,
 * queries: Array<{name: string, value: string}>,
 * payload: string}} params
 * @param {function} callback optional
*/
netField.webhooks.test(params, [callback])
```
