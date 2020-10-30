# Webhooks

## Overview
*The resources responsible for managing Webhooks*

## Available Resources

1. [netField.webhooks.getAll(organisationId, [page, limit, sortBy, sortOrder, callback])](#getAll)

2. [netField.webhooks.get(webhookId, [callback])](#get)

3. [netField.webhooks.create(params, [options], [callback])](#create)

4. [netField.webhooks.update(webhookId, params, [options], [callback])](#update)

5. [netField.webhooks.delete(webhookId, [callback])](#delete)

## Resource Usage

### getAll

    Get list of webhooks

```javascript
/**
 * @param {number} organisationId
 * @param {any} options optional
 * @param {function} callback optional
*/
netField.webhooks.getAll(organisationId, [options], [callback])
```

### get

    Get a webhook

```javascript
/**
 * @param {string} webhookId
 * @param {any} options optional
 * @param {function} callback optional
*/
netField.webhooks.get(webhookId, [options], [callback])
```

### create

    Adds a new webhook

```javascript
/**
 * @param {any} params
 * @param {function} callback optional
*/
netField.webhooks.create(params, [options], [callback])
```

### update

    Updates a webhook

```javascript
/**
 * @param {string} webhookId
 * @param {any} params
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
