# Search

## Overview
*The resource responsible for searching for users, organisations, devices, containers, deployment-filters, deployment-jobs, deployment-rollouts, tenant and keys*

## Available Resources

1. [netField.search.devices([searchText], [filter], [searchType], [page], [limit], [sortBy], [sortOrder], [callback])](#searchdevices)

2. [netField.search.containers([searchText], [filter], [searchType], [page], [limit], [sortBy], [sortOrder], [includeDisabled], 
[deployableFor], [callback])](#searchcontainers)

3. [netField.search.organisations([searchText], [filter], [searchType], [page], [limit], [sortBy], [sortOrder], [callback])](#searchorganisations)

4. [netField.search.users([searchText], [filter], [searchType], [page], [limit], [sortBy], [sortOrder], [callback])](#searchusers)

5. [netField.search.deployment-filters([searchText], [filter], [searchType], [page], [limit], [sortBy], [sortOrder], [callback])](#searchdeployment-filters)

6. [netField.search.deployment-jobs([searchText], [filter], [searchType], [page], [limit], [sortBy], [sortOrder], [callback])](#searchdeployment-jobs)

7. [netField.search.deployment-rollouts([searchText], [filter], [searchType], [page], [limit], [sortBy], [sortOrder], [callback])](#searchdeployment-rollouts)

9. [netField.search.tenants([searchText], [filter], [searchType], [page], [limit], [sortBy], [sortOrder], [callback])](#searchtenants)

10. [netField.search.keys([searchText], [filter], [searchType], [page], [limit], [sortBy], [sortOrder], [callback])](#searchkeys)

3. [netField.search.groups([searchText], [filter], [searchType], [page], [limit], [sortBy], [sortOrder], [groupType], [callback])](#searchgroups)


## Resource Usage

### searchdevices

    Search for devices

```javascript
/**
 * @param {string} searchText optional
 * @param {Array<string>} filter optional
 * @param {string} searchType optional
 * @param {integer} page optional
 * @param {integer} limit optional
 * @param {string} sortBy optional
 * @param {string} sortOrder optional
 * @param {function} callback optional
 */
netField.search.devices([searchText], [filter], [searchType], [page], [limit], [sortBy], [sortOrder], [callback])
```

### searchcontainers

    Search for containers

```javascript
/**
 * @param {string} searchText optional
 * @param {Array<string>} filter optional
 * @param {string} searchType optional
 * @param {integer} page optional
 * @param {integer} limit optional
 * @param {string} sortBy optional
 * @param {string} sortOrder optional 
 * @param {boolean} includeDisabled optional
 * @param {string} deployableFor optional 
 * @param {function} callback optional
 */
netField.search.containers([searchText], [filter], [searchType], [page], [limit], [sortBy], [sortOrder], [includeDisabled], [deployableFor], [callback])
```

### searchorganisations

    Search for organisations

```javascript
/**
 * @param {string} searchText optional
 * @param {Array<string>} filter optional
 * @param {string} searchType optional
 * @param {integer} page optional
 * @param {integer} limit optional
 * @param {string} sortBy optional
 * @param {string} sortOrder optional
 * @param {function} callback optional
 */
netField.search.organisations([searchText], [filter], [searchType], [page], [limit], [sortBy], [sortOrder], [callback])
```

### searchtenants

    Search for tenant organisations

```javascript
/**
 * @param {string} searchText optional
 * @param {Array<string>} filter optional
 * @param {string} searchType optional
 * @param {integer} page optional
 * @param {integer} limit optional
 * @param {string} sortBy optional
 * @param {string} sortOrder optional
 * @param {function} callback optional
 */
netField.search.tenants([searchText], [filter], [searchType], [page], [limit], [sortBy], [sortOrder], [callback])
```

### searchusers

    Search for users

```javascript
/**
 * @param {string} searchText optional
 * @param {Array<string>} filter optional
 * @param {string} searchType optional
 * @param {integer} page optional
 * @param {integer} limit optional
 * @param {string} sortBy optional
 * @param {string} sortOrder optional
 * @param {function} callback optional
 */
netField.search.users([searchText], [filter], [searchType], [page], [limit], [sortBy], [sortOrder], [callback])
```

### #searchdeployment-filters

    Search for deployment filters

```javascript
/**
 * @param {string} searchText optional
 * @param {Array<string>} filter optional
 * @param {string} searchType optional
 * @param {integer} page optional
 * @param {integer} limit optional
 * @param {string} sortBy optional
 * @param {string} sortOrder optional
 * @param {function} callback optional
 */
netField.search.deployment-filters([searchText], [filter], [searchType], [page], [limit], [sortBy], [sortOrder], [callback])
```

### #searchdeployment-jobs

    Search for deployment jobs

```javascript
/**
 * @param {string} searchText optional
 * @param {Array<string>} filter optional
 * @param {string} searchType optional
 * @param {integer} page optional
 * @param {integer} limit optional
 * @param {string} sortBy optional
 * @param {string} sortOrder optional
 * @param {function} callback optional
 */
netField.search.deployment-jobs([searchText], [filter], [searchType], [page], [limit], [sortBy], [sortOrder], [callback])
```

### #searchdeployment-rollouts

    Search for deployment rollouts

```javascript
/**
 * @param {string} searchText optional
 * @param {Array<string>} filter optional
 * @param {string} searchType optional
 * @param {integer} page optional
 * @param {integer} limit optional
 * @param {string} sortBy optional
 * @param {string} sortOrder optional
 * @param {function} callback optional
 */
netField.search.deployment-rollouts([searchText], [filter], [searchType], [page], [limit], [sortBy], [sortOrder], [callback])
```
### searchkeys

    Search for keys

```javascript
/**
 * @param {string} searchText optional
 * @param {Array<string>} filter optional
 * @param {string} searchType optional
 * @param {integer} page optional
 * @param {integer} limit optional
 * @param {string} sortBy optional
 * @param {string} sortOrder optional
 * @param {function} callback optional
 */
netField.search.keys([searchText], [filter], [searchType], [page], [limit], [sortBy], [sortOrder], [callback])
```
### searchgroupsns

    Search for groups

```javascript
/**
 * @param {string} searchText optional
 * @param {Array<string>} filter optional
 * @param {string} searchType optional
 * @param {integer} page optional
 * @param {integer} limit optional
 * @param {string} sortBy optional
 * @param {string} sortOrder optional
 * @param {string} groupType
 * @param {function} callback optional
 */
netField.search.groups([searchText], [filter], [searchType], [page], [limit], [sortBy], [sortOrder], [groupType], [callback])
```