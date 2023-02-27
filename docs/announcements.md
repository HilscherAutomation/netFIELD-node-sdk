# Announcements

## Overview
*The resources responsible for managing Announcements*

## Available Resources

1. [netField.announcements.getAll(type, sortBy, sortOrder, [callback])](#getall)

2. [netField.announcements.markAsRead(announcementId, [callback])](#mark)



## Resource Usage

### getall

    Get current announcements  

```javascript
/**
 * @param {string} type optional
 * @param {string} sortBy optional
 * @param {string} sortOrder optional
 * @param {function} callback optional
*/
netField.announcements.getAll(type, sortBy, sortOrder, [callback])
```

### mark

     Mark announcement as read

```javascript
/**
 * @param {string} announcementId
 * @param {function} callback optional
*/
netField.announcements.markAsRead(announcementId, [callback])
```
