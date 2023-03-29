# Sessions

## Overview
*The resources responsible for managing user sessions*

## Available Resources

1. [netField.sessions.update(sessionId, [callback])](#updatesession)

2. [netField.sessions.get(sessionId, [callback])](#getsession)

3. [netField.sessions.getAll([page], [limit], [sortBy], [sortOrder], [callback])](#getsessions)

4. [netField.sessions.updateAll([callback])](#updatesessions)

5. [netField.sessions.getConnectionInfo([callback])](#getSessionConnectionInfo)

6. [netField.sessions.getConnectionDevices([page], [limit], [sortBy], [sortOrder], [deviceIds], [callback])](#getSessionConnectionDevices)

## Resource Usage

### updatesession

    Destroy user session

```javascript
/**
 * @param {string} sessionId
 * @param {function} callback optional
*/
netField.sessions.update(sessionId, [callback])
```

### getsession

    Get user session by id

```javascript
/**
 * @param {string} sessionId
 * @param {function} callback optional
*/
netField.sessions.get(sessionId, [callback])
```

### getsessions

    Get all user sessions

```javascript
/**
 * @param {number} page optional
 * @param {number} limit optional
 * @param {string} sortBy optional
 * @param {string} sortOrder optional
 * @param {function} callback optional
*/
netField.sessions.getAll(page, limit, sortBy, sortOrder, [callback])
```
### updatesessions

    Destroy all user's session

```javascript
/**
 * @param {function} callback optional
*/
netField.sessions.updateAll([callback])
```

### getSessionConnectionInfo

    Get connection information for Data Service using access/session token.

```javascript
/**
 * @param {function} callback optional
*/
netField.keys.getConnectionInfo([callback])
```

### getSessionConnectionDevices

    Get devices in Data Service that are accessible using access/session token.

```javascript
/**
 * @param {number} page optional
 * @param {number} limit optional
 * @param {string} sortBy optional
 * @param {string} sortOrder optional
 * @param {Array<string>} deviceIds optional
 * @param {function} callback optional
*/
netField.keys.getConnectionDevices([page], [limit], [sortBy], [sortOrder], [deviceIds], [callback])
```
