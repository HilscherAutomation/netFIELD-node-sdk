# Keys

## Overview
*The resources responsible for managing device messages*

## Available Resources

1. [netField.devices.messages.getAll(deviceId, [from], [to], [topic], [nextPage], [limit], [callback])](#getDeviceMessages)

2. [netField.devices.topics.getAll(deviceId, [from], [to])](#getDeviceTopics)

## Resource Usage

### getDeviceMessages

    Get all device messages by deviceId

```javascript
/**
 * @param {string} deviceId
 * @param {Date} from
 * @param {Date} to
 * @param {string} topic optional
 * @param {string} nextPage optional
 * @param {number} limit optional
 * @param {function} callback optional
*/
netField.devices.messages.getAll(deviceId, from, to, topic, nextPage, limit, [callback])
```

### getDeviceTopics

    Get all device topics by deviceId

```javascript
/**
 * @param {string} deviceId
 * @param {Date} from
 * @param {Date} to
 * @param {function} callback optional
*/
netField.devices.topics.getAll(deviceId, from, to, [callback])
```
