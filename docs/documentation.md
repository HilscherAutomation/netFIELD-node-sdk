# Documentation

## Overview
*The resources responsible for getting API documentation*

## Available Resources

1. [netField.documentation.getAll([page], [limit], [sortBy], [sortOrder], [language], [callback])](#getAll)

2. [netField.documentation.get(articleId, [language], [callback])](#get)

3. [netField.documentation.versions.get(articleId, versionId, [language], [callback])](#getVersion)

## Resource Usage

### getAll

    Get list of all documentation articles

```javascript
/**
 * @param {number} page optional
 * @param {number} limit optional
 * @param {string} sortBy optional
 * @param {string} sortOrder optional
 * @param {string} language optional
 * @param {function} callback optional
*/
netField.documentation.getAll(page, limit, sortBy, sortOrder, language, [callback])
```

### get

    Get documentation article by id

```javascript
/**
 * @param {string} articleId
 * @param {string} language optional
 * @param {function} callback optional
*/
netField.documentation.get(articleId, language, [callback])
```

### getVersion

    Get article version by id

```javascript
/**
 * @param {string} articleId
 * @param {string} versionId
 * @param {string} language optional
 * @param {function} callback optional
*/
netField.documentation.versions.get(articleId, versionId, language,  [callback])
```