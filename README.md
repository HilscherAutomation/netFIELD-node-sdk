# netFIELD-node-SDK

[![license][license-shields]][LICENSE]

*netFIELD Node SDK (node.js version >=0.6.x) and Node samples for REST API.*

## Installation

> Install sdk trough 'npm' or download folder in your project

```js
npm install edgePortal-rest-sdk --save
```

> Require 'edgeportal-rest-sdk' in your file
```js
var edgePortal = require('edgePortal-rest-sdk');
```

## Configuration

> Basic configuration options
```js
edgePortal.setConfiguration({
    clientId: 'your-client-id',
    clientPassword: 'your-client-password'
});
```

> Advanced configuration options.
 ```js
edgePortal.setConfiguration({
    version: '1.0.0',
    schema: 'https', // http or https
    host: 'api.netfield.io',
    post: 443,
    headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'your-token'
    }
});
```

> Token configuration.
```js
edgePortal.setToken('your-token'); //Done authomaticly by auth
edgePortal.removeToken('your-token'); //Done authomaticly by revoke
```

> Helper functions.
```js
const token = edgePortal.getToken();
```
```js
const options = edgePortal.getConfiguration();
```

## Method Usage
> Callbacks (old way)
```js
const params = { email: 'my@email.de', password: 'my-password' };

edgePortal.auth.auth(params, function (error, data) {
    if(error){
        throw new Error(error.message);
    }

    edgePortal.setToken(data.token);
});
```

> Promices (new way)
```js
const params = { email: 'my@email.de', password: 'my-password' };

edgePortal.auth.auth(params)
    .then(data => {
        edgePortal.setToken(data.token);
    })
    .catch(error => {
        throw new Error(error.message);
    });
```

## Methods

  1. [edgePortal.auth.resetPassword(email, [callback])](#resetPassword)

  1. [edgePortal.auth.setPassword(params, [callback])](#reset)

  1. [edgePortal.users.create(params, [callback])](#createuser)

  1. [edgePortal.users.createselfuser(params, [callback])](#createselfuser)

  1. [edgePortal.users.getAll(organisationId, page, [callback])](#getusers)

  1. [edgePortal.users.get(userId, [callback])](#getuser)

  1. [edgePortal.users.getverifyuser(email, [callback])](#getverifyuser)

  1. [edgePortal.users.suggest(params, [callback])](#suggestuser)

  1. [edgePortal.users.update(userId, params, [callback])](#updateuser)

  1. [edgePortal.users.verifyuser(params, [callback])](#verifyuser)

  1. [edgePortal.users.delete(userId, [callback])](#deleteuser)

  1. [edgePortal.users.profile.get([callback])](#getprofile)

  1. [edgePortal.users.profile.update(params, [callback])](#updateprofile)

  1. [edgePortal.organisation.get(organisationId, depth, [callback])](#getorganisation)

  1. [edgePortal.organisation.update(organisationId, params, [callback])](#updateogranization)

  1. [edgePortal.organisation.create(organisationId, params, [callback])](#createorganisation)

  1. [edgePortal.organisation.delete(organisationId, [callback])](#deleteorganisation)

  1. [edgePortal.devices.create(params, [callback])](#createdevice)

  1. [edgePortal.devices.get(deviceId, [callback])](#getdevice)

  1. [edgePortal.devices.getAll(organisationId, page, deviceId, [callback])](#getdevices)

  1. [edgePortal.devices.update(deviceId, params, [callback])](#updatedevice)

  1. [edgePortal.devices.delete(deviceId, [callback])](#deletedevice)

  1. [edgePortal.devices.onBoard(deviceId, [callback])](#onboard)

  1. [edgePortal.devices.offBoard(deviceId, [callback])](#offboard)

  1. [edgePortal.devices.customFields.create(deviceId, params, [callback])](#createdevicecustomfields)

  1. [edgePortal.devices.customFields.getAll(deviceId, [callback])](#getdevicecustomfields)

  1. [edgePortal.devices.customFields.get(deviceId, fieldId, [callback])](#getdevicecustomfield)

  1. [edgePortal.devices.customFields.update(deviceId, fieldId, params, [callback])](#updatedevicesutomfield)

  1. [edgePortal.devices.customFields.delete(deviceId, fieldId, [callback])](#deletedevicecustomfields)

  1. [edgePortal.devices.snapshots.get(deviceId, snapshotId, [callback])](#getsnapshot)

  1. [edgePortal.device.snapshots.getAll(deviceId, page, [callback])](#getsnapshots)

  1. [edgePortal.device.snapshots.delete(deviceId, page, [callback])](#deletesnapshots)

  1. [edgePortal.device.snapshots.upload(deviceId, page, [callback])](#uploadsnapshots)

  1. [edgePortal.device.telemetry.get(deviceId, limit, [callback])](#gettelemetry)

  1. [edgePortal.device.createDeviceNotification(deviceId, params, [callback])](#createNotification)

  1. [edgePortal.device.deleteNotification(deviceId, notificationid, [callback])](#deletenotification)

  1. [edgePortal.device.deleteAllNotifications(deviceId, [callback])](#deleteallnotification)

  1. [edgePortal.device.getTopology(deviceId, [callback])](#gettopology)

  1. [edgePortal.device.getTopologyLayout(deviceId, layoutId [callback])](#gettopologylayout)

  1. [edgePortal.device.getTopologyLayouts(deviceId, page, limit, sortBy, sortOrder [callback])](#gettopologylayouts)

  1. [edgePortal.device.createTopologyLayout(deviceId, params [callback])](#createtopology)

  1. [edgePortal.device.deleteTopologyLayout(deviceId, layoutId [callback])](#deletetopology)

  1. [edgePortal.device.updateTopologyLayout(deviceId, layoutId, params [callback])](#updatelayout)

  1. [edgePortal.roles.create(organisationId, params, [callback])](#createrole)

  1. [edgePortal.roles.get(organisationId, roleName, [callback])](#getrole)

  1. [edgePortal.roles.update(organisationId, params, [callback])](#updaterole)

  1. [edgePortal.roles.getAll(organisationId, page, [callback])](#getroles)

  1. [edgePortal.roles.delete(organisationId, roleName, [callback])](#deleterole)

  1. [edgePortal.modules.get(moduleId, [callback])](#getmodule)

  1. [edgePortal.modules.getAllModules([callback])](#getmodules)

  1. [edgePortal.modules.create(params, [callback])](#createmodules)

  1. [edgePortal.modules.delete(moduleId, [callback])](#deletemodules)

  1. [edgePortal.modules.deviceModules(deviceId, [callback])](#deletemodules)

  1. [edgePortal.modules.createDeviceModules(moduleId, deviceId, params [callback])](#createdevicemodules)

  1. [edgePortal.modules.deleteDeviceModules(moduleId, deviceId, [callback])](#createdevicemodules)

  1. [edgePortal.modules.update(moduleId, deviceId, params [callback])](#updatemodule)

  1. [edgePortal.modules.routes.get(deviceId, [callback])](#getmoduleroutes)

  1. [edgePortal.modules.routes.create(deviceId, params [callback])](#createmoduleroutes)

  1. [edgePortal.modules.routes.update(routeId, deviceId, params [callback])](#updatemoduleroutes)

  1. [edgePortal.modules.routes.delete(routeId, deviceId, [callback])](#deletemoduleroutes)

  1. [edgePortal.modules.getModuleProperties(deviceId, moduleId, [callback])](#getmoduleproperties)

  1. [edgePortal.permissions.devices(deviceIds, [callback])](#devicepermissions)

  1. [edgePortal.permissions.modules(moduleIds, [callback])](#modulepermissions)

  1. [edgePortal.permissions.organisations(organisationIds, [callback])](#organisationpermissions)

  1. [edgePortal.permissions.users(userIds, [callback])](#userpermissions)

  1. [edgePortal.permissions.roles(roles, [callback])](#rolepermissions)

  1. [edgePortal.permissions.tenants(tenantIds, [callback])](#tenantspermissions)

  1. [edgePortal.permissions.edgeos(edgeosIds, [callback])](#edgeospermissions)

  1. [edgePortal.keys.create([callback])](#createkey)

  1. [edgePortal.keys.delete(organisationId, [callback])](#deletekey)

  1. [edgePortal.keys.getkey(organisationId, [callback])](#getkey)

  1. [edgePortal.keys.getkeys(keyId, [callback])](#getkeys)

  1. [edgePortal.edgeos.getEdgeos(page, limit, sortBy, sortOrder, [callback])](#getEdgeos)

  1. [edgePortal.edgeos.get(edgeosId, [callback])](#getSingleEdgeos)

  1. [edgePortal.edgeos.deletegetEdgeos(edgeosId, [callback])](#deleteEdgeos)

  1. [edgePortal.edgeos.creategetEdgeos(formData, [callback])](#createEdgeos)

  1. [edgePortal.edgeos.updategetEdgeos(edgeosId, formData, [callback])](#updateEdgeos)

  1. [edgePortal.tenants.create(params, [callback])](#createTenant)

  1. [edgePortal.tenants.update(tenantId, params, [callback])](#updateTenant)

  1. [edgePortal.tenants.get(tenantId, [callback])](#getTenant)

  1. [edgePortal.tenants.getAll(page, limit, sortBy, sortOrder, [callback])](#getTenants)

  1. [edgePortal.tenants.delete(organisationId, [callback])](#deleteTenant)

### auth

    Gets user authentication token.

    * @param {object} params
    * @param {function} callback optional

```javascript
const params = {
    grantType: "password",
    email: 'my@email.de',
    password: 'my-password'
};

edgePortal.auth.auth(params, [callback]);

//Or refresh token

const params = {
    grantType: "refreshToken",
    refreshToken: '{my-refresh-token}'
};

edgePortal.auth.auth(params, [callback]);
```

### verify

    Verify token if it's valid

    * @param {function} callback optional

```javascript
edgePortal.auth.verify([callback])
```

### revoke

    Revoke token (logout)

    * @param {function} callback optional

```javascript
edgePortal.auth.revoke([callback])
```

### resetPassword

    Send email with password reset token.

    * @param {string} email
    * @param {function} callback optional

```javascript
const email = 'my@email.de';
edgePortal.auth.resetPassword(email, [callback])
```

### reset

    Set new user password.

    * @param {object} params
    * @param {function} callback optional

```javascript
const params = {
    "email": "my@email.de",
    "password": "new-password",
    "code": "reset-token"
};

edgePortal.auth.setPassword(params, [callback])

```

### createuser

    Create new user.

    * @param {object} params
    * @param {function} callback optional

```javascript
const params = {
    "organisationId": 1,
    "password": "secret",
    "locked": true,
    "firstName": "Alen",
    "lastName": "Turing",
    "email": "alen@mail.uk",
    "jobTitle": "PC God",
    "department": "M6",
    "mobilePhone": "0879654321",
    "telephone": "655113",
    "street": "unknown",
    "houseNumber": "13",
    "addressSuplement": "Bletchley Park",
    "zipCode": "6598",
    "city": "London",
    "country": "Great Britan"
}
edgePortal.users.create(params, [callback])
```

### createselfuser

    Self registration for user (uses public token).

    * @param {object} params
    * @param {function} callback optional

```javascript
const params = {
    "organisationId": 1,
    "password": "secret",
    "locked": true,
    "firstName": "Alen",
    "lastName": "Turing",
    "email": "alen@mail.uk",
    "jobTitle": "PC God",
    "department": "M6",
    "mobilePhone": "0879654321",
    "telephone": "655113",
    "street": "unknown",
    "houseNumber": "13",
    "addressSuplement": "Bletchley Park",
    "zipCode": "6598",
    "city": "London",
    "country": "Great Britan"
}
edgePortal.users.createselfusers(params, [callback])
```

### getusers

    Get users by organisationId.

    * @param {number} organisationId
    * @param {number} page (optional)
    * @param {number} limit (optional)
    * @param {string} sortBy (optional)
    * @param {string} sortOrder (optional)
    * @param {function} callback (optional)

```javascript
const organisationId = 1;
const page = 1;
edgePortal.users.getAll(organisationId, page?, limit?, sortBy?, sortOrder?, [callback])
```

### getuser

    Get user by userId.

    * @param {number} userId
    * @param {function} callback optional

```javascript
const userId = 1;
edgePortal.users.get(userId, [callback])
```

### suggestuser

    Suggest user.

    * @param {object} params 
    * @param {function} callback optional

```javascript
const params = {
    organisationId: 1, // OPTIONAL (gets user's organisation by default)
    search: "test"
}
        
edgeSDK.users.suggest( params, [callback] );
```

### getverifyuser

    Resend user verification code to email

    * @param {string} email
    * @param {function} callback optional

```javascript
const email = 'yolo@mail.de';
edgePortal.users.getverifyuser(email, [callback])
```

### updateuser

    Update user.

    * @param {number} userId
    * @param {object} params
    * @param {function} callback optional

```javascript
const userId = 1;
const params = {
    jobTitle: "Admin",
}
edgePortal.users.update(userId, params, [callback])
```

### verifyuser

    Verify user by code send trough email.

    * @param {object} params
    * @param {function} callback optional

```javascript
const params = {
  "email": "test@mail.de",
  "code": 642157
}
edgePortal.users.verifyuser(params, [callback])
```

### deleteuser

    Delete user by userId.

    * @param {number} userId
    * @param {function} callback optional

```javascript
const userId = 1;

edgePortal.users.delete(userId, [callback])
```

### getprofile

    Get user profile.

    * @param {function} callback optional

```javascript
edgePortal.users.profile.get([callback])
```

### updateprofile

    Update user profile

    * @param {object} params
    * @param {function} callback optional

```javascript
const params = {
    "mobilePhone": "0895661233",
}
edgePortal.users.profile.update(params, [callback])
```

### getorganisation

   Get organisation by organisationId.

    * @param {number} organisationId
    * @param {number} depth
    * @param {function} callback optional

```javascript
const organisationId = 1;
const depth = 1;
edgePortal.organisation.get(organisationId, depth, [callback])
```

### updateogranization

   Update organisation by organisationId.

    * @param {number} organisationId
    * @param {object} params
    * @param {function} callback optional

```javascript
const organisationId = 1;
const params = {
    phoneNumber: '098563256'
};
edgePortal.organisation.update(organisationId, params, [callback])
```

### createorganisation

   Create Organisation.

    * @param {number} parentOrganisationId
    * @param {object} params
    * @param {function} callback optional

```javascript
const parentOrganisationId = 1;
const params = {
    "name": "Test organisation",
    "phoneNumber": "0879654321",
    "street": "Test str.",
    "houseNumber": "2569863",
    "addressSupplement": "Test str.",
    "zipCode": "9000",
    "city": "Varna",
    "country": "Bulgaria",
    "notes": "This is organisation for test"
}
edgePortal.organisation.create(parentOrganisationId, params, [callback])
```

### deleteorganisation

   Delete organisation by organisationId.

    * @param {number} organisationId
    * @param {function} callback optional

```javascript
const organisationId = 1;
edgePortal.organisation.delete(organisationId, [callback])
```

### getorganisationdevices

   Get devices per organisationId and child organisations.

    * @param {number} organisationId
    * @param {number} page
    * @param {string} attribute
    * @param {string} sort
    * @param {string} depth
    * @param {function} callback optional

```javascript
const organisationId = 1;
const page = 1;
const attribute = 'name, organisationId';
const sort = 'asc';
const depth = 'one';
edgePortal.organisation.devices.get(organisationId, page, attribute, sort, depth, [callback])
```

### createdevice

   Create Device.

    * @param {object} params
    * @param {function} callback optional

```javascript
const params = {
    organisationId: 1,
    serialNumber: "195365884"
};
edgePortal.devices.create(params, [callback])
```

### getdevice

   Get device by deviceId.

    * @param {string} deviceId
    * @param {function} callback optional

```javascript
const deviceId = '5b332f43f9373638f8e46c4f';
edgePortal.devices.get(deviceId, [callback])
```

### getdevices

    Get devices by organisationId

    * @param {number} organisationId
    * @param {number} page
    * @param {number} limit
    * @param {string} sortBy
    * @param {string} sortOrder
    * @param {function} callback

```javascript
const deviceId = '5b332f43f9373638f8e46c4f';
edgePortal.devices.getAll(organisationId, page, limit, sortBy, sortOrder, [callback])
```

### updatedevice

   Update device by deviceId.

    * @param {string} deviceId
    * @param {object} params
    * @param {function} callback optional

```javascript
const deviceId = '5b332f43f9373638f8e46c4f';
const params = {
    name: 'Test Device Name',
};
edgePortal.devices.update(deviceId, params, [callback])
```

### deletedevice

   Delete device by deviceId.

    * @param {string} deviceId
    * @param {function} callback optional

```javascript
const deviceId = '5b332f43f9373638f8e46c4f';
edgePortal.devices.delete(deviceId, [callback])
```

### onBoard

   Onboard a device.

    * @param {object}

```javascript
const params = {
  "activationCode": "string",
  "serialNumber": "string"
}
edgePortal.device.onBoard(params, [callback])
```

### offBoard

   Offboard a device.

    * @param {object}

```javascript
const params = {
  "serialNumber": "string"
}
edgePortal.device.offBoard(params, [callback])
```

### createdevicecustomfields

   Create device custom fields.

    * @param {string} deviceId
    * @param {object} params
    * @param {function} callback optional

```javascript
const deviceId = '5b332f43f9373638f8e46c4f';
const params = {
    fieldId: 'vieldValue'
}
edgePortal.devices.customFields.create(deviceId, params, [callback])
```

### getdevicecustomfields

   Get device custom fields.

    * @param {string} deviceId
    * @param {function} callback optional

```javascript
const deviceId = '5b332f43f9373638f8e46c4f';
edgePortal.devices.customFields.getAll(deviceId, [callback])
```

### getdevicecustomfield

   Get device custom field.

    * @param {string} deviceId
    * @param {string} fieldId
    * @param {function} callback optional

```javascript
const deviceId = '5b332f43f9373638f8e46c4f';
const fieldId = 'fieldId';
edgePortal.devices.customFields.get(deviceId, fieldId, [callback])
```

### updatedevicesutomfield

   Update device custom field.

    * @param {string} deviceId
    * @param {string} fieldId
    * @param {object} params
    * @param {function} callback optional

```javascript
const deviceId = '5b332f43f9373638f8e46c4f';
const fieldId = 'fieldId';
const params = {
    fieldValue: 'newFieldValue'
}
edgePortal.devices.customFields.update(deviceId, fieldId, params, [callback])
```

### deletedevicecustomfields

   Delete device custom field.

    * @param {string} deviceId
    * @param {string} fieldId
    * @param {function} callback optional

```javascript
const deviceId = '5b332f43f9373638f8e46c4f';
const fieldId = 'fieldId';
edgePortal.devices.customFields.delete(deviceId, fieldId, [callback])
```

### getsnapshot

   Get snapshot.

    * @param {string} deviceId
    * @param {string} snapshotId

```javascript
const deviceId = '5b332f43f9373638f8e46c4f';
const snapshotId = 'string';
edgePortal.devices.snapshots.get(deviceId, snapshotId, [callback])
```

### getsnapshots

   Get snapshots.

    * @param {string} deviceId
    * @param {number} page
    * @param {number} limit
    * @param {string} sortBy
    * @param {string} sortOrder

```javascript
const deviceId = '5b332f43f9373638f8e46c4f';
const snapshotId = 'string';
edgePortal.devices.snapshots.getAll(deviceId, page, limit, sortBy, sortOder [callback])
```

### deletesnapshots

   Delete snapshots.

    * @param {string} deviceId
    * @param {string} snapshotId

```javascript
const deviceId = '5b332f43f9373638f8e46c4f';
const snapshotId = 'string';
edgePortal.devices.snapshots.delete(deviceId, snapshotId [callback])
```

### uploadsnapshots

   Upload snapshots.

    * @param {string} deviceId
    * @param {any} formData

```javascript
const deviceId = '5b332f43f9373638f8e46c4f';
const formData = { data: 'anyData' };
edgePortal.devices.snapshots.upload(deviceId, formData [callback])
```

### gettelemetry

Get device telemetry.

    * @param {string} deviceId
    * @param {number} limit

```javascript
const deviceId = '5b332f43f9373638f8e46c4f';
const limit = 1;
edgePortal.devices.telemetry.get(deviceId, limit [callback])
```

### createNotification

Create device notification.

    * @param {string} deviceId
    * @param {object} params

```javascript
const deviceId = '5b332f43f9373638f8e46c4f';
const params = {
    "serialNumber": "123456789",
    "level": "Information",
    "message": "Test Notification"
 }
edgePortal.devices.createNotification(deviceId, params [callback])
```

### deletenotification

Delete only one device notification.

    * @param {string} deviceId
    * @param {string} notificationId

```javascript
const deviceId = '5b332f43f9373638f8e46c4f';
const notificationId = '4a222f43f1354638f8e46b5d';
edgePortal.devices.deleteNotification(deviceId, notificationId, [callback])
```

### deleteallnotification

Delete all device notification by device id.

    * @param {string} deviceId

```javascript
const deviceId = '5b332f43f9373638f8e46c4f';
edgePortal.devices.deleteAllNotifications(deviceId, [callback])
```

### gettopology

Get the network topology of a specific device.

    * @param {string} deviceId

```javascript
const deviceId = '5b332f43f9373638f8e46c4f';
edgePortal.devices.getTopology(deviceId, [callback])
```

### gettopologylayout

Get a specific topology layout of a desired device

    * @param {string} deviceId
    * @param {string} layoutId

```javascript
const deviceId = '5b332f43f9373638f8e46c4f';
const layoutId = '5b111f43f5465438f7a46c2c';
edgePortal.devices.getTopologyLayout(deviceId, layoutId, [callback])
```

### gettopologylayouts

Get a list of all topology layouts for this device

    * @param {string} deviceId
    * @param {number} page 
    * @param {number} limit 
    * @param {string} sortBy 
    * @param {string} sortOrder 
    * @param {function} callback 

```javascript
const deviceId = '5b332f43f9373638f8e46c4f';
const layoutId = '5b111f43f5465438f7a46c2c';
edgePortal.devices.getTopologyLayouts(deviceId, page, limit, sortBy, sortOrder, [callback])
```

### createtopology

Create a new layout definition for displaying topologies

    * @param {string} deviceId
    * @param {object} params

```javascript
const deviceId = '5b332f43f9373638f8e46c4f';
const params = {
  "schemaVersion": 1,
  "name": "string",
  "location": {
    "nodes": [
      {
        "key": "string",
        "loc": "string"
      }
    ]
  }
};
edgePortal.devices.createTopologyLayout(deviceId, params, [callback])
```

### deletetopology

Delete topology layout

    * @param {string} deviceId
    * @param {string} layoutId

```javascript
const deviceId = '5b332f43f9373638f8e46c4f';
const layoutId = '5b111f43f5465438f7a46c2c';
edgePortal.devices.deleteTopologyLayout(deviceId, layoutId, [callback])
```

### updatelayout

Update a topology layout

    * @param {string} deviceId
    * @param {string} layoutId
    * @param {number} page 
    * @param {number} limit 
    * @param {string} sortBy 
    * @param {string} sortOrder 
    * @param {function} callback 

```javascript
const deviceId = '5b332f43f9373638f8e46c4f';
const layoutId = '5b111f43f5465438f7a46c2c';
const params = {
  "schemaVersion": 1,
  "name": "string",
  "location": {
    "nodes": [
      {
        "key": "string",
        "loc": "string"
      }
    ]
  }
};
edgePortal.devices.updateTopologyLayout(deviceId, layoutId, params, [callback])
```

### createrole

   Create role.

    * @param {number} organisationId
    * @param {object} params
    * @param {function} callback optional

```javascript
const organisationId = 1;
const params = {
    "role": "Jedi-Master",
    "resources": [
        {
            "resource": "users",
            "permissions": [
                "create"
            ]
        }
    ]
}
edgePortal.roles.create(organisationId, params, [callback])
```

### getrole

   Get role by organisationId and rolename.

    * @param {number} organisationId
    * @param {string} rolename
    * @param {function} callback optional

```javascript
const organisationId = 1;
const roleName = 'Jedi-Master';
edgePortal.roles.get(organisationId, roleName, [callback])
```

### updaterole

   Update role.

    * @param {number} organisationId
    * @param {object} params
    * @param {function} callback optional

```javascript
const organisationId = 1;
const params = {
    "role": "Jedi-Master",
    "resources": [
        {
            "resource": "users",
            "permissions": [
                "create"
            ]
        }
    ]
}
edgePortal.roles.update(organisationId, params, [callback])
```

### getroles

   Get roles by organisationId.

    * @param {number} organisationId
    * @param {number} page
    * @param {function} callback optional

```javascript
const organisationId = 1;
const page = 1;
edgePortal.roles.getAll(organisationId, page, [callback])
```

### deleterole

   Delete role.

    * @param {number} organisationId
    * @param {string} roleName
    * @param {function} callback optional

```javascript
const organisationId = 1;
const roleName = "Jedi-Master";
edgePortal.roles.delete(organisationId, roleName, [callback])
```

### getmodule

   Get module.

    * @param {string} moduleId
    * @param {function} callback optional

```javascript
const moduleId = "d8223c46-e779-4eec-aaed-2722976dd0ae";
edgePortal.modules.get(moduleId, [callback])
```

### getmodules

   Get all modules.

    * @callback {function}

```javascript
edgePortal.modules.get([callback])
```

### createmodules

   Create modules.

    * @params {any} params

```javascript
const params = {
  "displayName": "string",
  "moduleName": "string",
  "type": "string",
  "version": "string",
  "restartPolicy": "string",
  "desiredStatus": "string",
  "imageUri": "string",
  "moduleTwinDesiredOptions": {},
  "environmentVariables": [
    {
      "key": "string",
      "value": "string"
    }
  ],
  "registryType": "string"
}
edgePortal.modules.create(params, [callback])
```

### deletemodules
 Delete modules.

    * @moduleId {string} moduleId

```javascript
const moduleId = "d8223c46-e779-4eec-aaed-2722976dd0ae"
edgePortal.modules.delete(moduleId, [callback])
```

### devicemodules
 Get device modules.

    * @moduleId {string} moduleId

```javascript
const deviceId = "5bbded649671f321dc944f5b"
edgePortal.modules.deviceModules(deviceId, [callback])
```

### createdevicemodules
 Create device for a given module.

    * @moduleId {string} moduleId
    * @deviceId {string} deviceId
    * @params {any} params

```javascript
const moduleId = "d8223c46-e779-4eec-aaed-2722976dd0ae"
const deviceId = "5bbded649671f321dc944f5b"
const params = {
  "displayName": "string",
  "moduleName": "string",
  "type": "string",
  "version": "string",
  "restartPolicy": "string",
  "desiredStatus": "string",
  "imageUri": "string",
  "moduleTwinDesiredOptions": {},
  "environmentVariables": [
    {
      "key": "string",
      "value": "string"
    }
  ],
  "registryType": "string"
}
edgePortal.modules.createDeviceModule(moduleId, deviceId, params, [callback])
```

### deletedevicemodule

 Delete device from modules.
    * @moduleId {string} moduleId
    * @deviceId {string} deviceId

```javascript
const moduleId = "d8223c46-e779-4eec-aaed-2722976dd0ae";
const deviceId = "5bbded649671f321dc944f5b";
edgePortal.modules.deleteDeviceModule(moduleId ,deviceId, [callback])
```

### updatemodule

 Update module.

    * @moduleId {string} moduleId
    * @deviceId {string} deviceId
    * @params {any} params

```javascript
const moduleId = "d8223c46-e779-4eec-aaed-2722976dd0ae";
const deviceId = "5bbded649671f321dc944f5b";
const params = {
  "displayName": "string",
  "moduleName": "string",
  "type": "string",
  "version": "string",
  "restartPolicy": "string",
  "desiredStatus": "string",
  "imageUri": "string",
  "moduleTwinDesiredOptions": {},
  "environmentVariables": [
    {
      "key": "string",
      "value": "string"
    }
  ],
  "registryType": "string"
}
edgePortal.modules.update(moduleId ,deviceId, params, [callback])
```

### getmoduleroutes

 Get module routes.

    * @deviceId {string} deviceId

```javascript
const deviceId = "5bbded649671f321dc944f5b";
edgePortal.modules.routes.get(deviceId, [callback])
```

### createmoduleroutes

 Create module routes.

    * @deviceId {string} deviceId
    * @params {any} params

```javascript
const deviceId = "5bbded649671f321dc944f5b";
const params = {
  "name": "string",
  "source": "string",
  "condition": "string",
  "target": "string"
}
edgePortal.modules.routes.create(deviceId, params [callback])
```

### updatemoduleroutes

 Update module routes.

    * @routeId {string} routeId
    * @deviceId {string} deviceId
    * @params {any} params

```javascript
const routeId = "5bbc99d0cd9e1d35180338b4";
const deviceId = "5bbded649671f321dc944f5b";
const params = {
  "name": "string",
  "source": "string",
  "condition": "string",
  "target": "string"
}
edgePortal.modules.routes.update(routeId, deviceId, params [callback])
```

### deletemoduleroutes

 Delete module routes.

    * @routeId {string} routeId
    * @deviceId {string} deviceId

```javascript
const routeId = "5bbc99d0cd9e1d35180338b4";
const deviceId = "5bbded649671f321dc944f5b";

edgePortal.modules.routes.delete(routeId, deviceId, [callback])
```

### getmoduleproperties

 Get module properties.

    * @deviceId {string} deviceId
    * @moduleId {string} moduleId

```javascript
const deviceId = "5bbded649671f321dc944f5b";
const moduleId = "d8223c46-e779-4eec-aaed-2722976dd0ae";

edgePortal.modules.getmoduleproperties(deviceId, moduleId, [callback])
```

### devicepermissions

 Check device permissions.

    * @deviceId {string[]} deviceId

```javascript
const deviceIds = ["5bbded649671f321dc944f5b"];

edgePortal.permissions.device(deviceIds, [callback])
```

### modulepermissions

 Check device permissions.

    * @moduleIds {string[]} moduleIds

```javascript
const moduleIds = ["d8223c46-e779-4eec-aaed-2722976dd0ae"];

edgePortal.permissions.module(moduleIds, [callback])
```

### organisationpermissions

 Check organisations permissions.

    * @organisationId {number[]} organisationId

```javascript
const organisationId = ["d8223c46-e779-4eec-aaed-2722976dd0ae"];

edgePortal.permissions.organisations(organisationId, [callback])
```

### userpermissions

 Check users permissions.

    * @userIds {number[]} userIds

```javascript
const userIds = [1];

edgePortal.permissions.users(userIds, [callback])
```

### rolepermissions

 Check roles permissions.

    * @roles {any} roles

```javascript
const roles = {
  "roles": {
    "1": [
      "admin"
    ]
  }
};

edgePortal.permissions.roles(roles, [callback])
```

### tenantspermissions

 Check tenants permissions.

    * @tenantIds {number[]} tenantIds

```javascript
const tenantIds = [1];


edgePortal.permissions.tenants(tenantIds, [callback])
```

### edgeospermissions

 Check EdgeOS permissions.

    * @edgeosIds {string[]} edgeosId

```javascript
const edgeosIds = ["5bbded649671f321dc944f5b"];

edgePortal.permissions.edgeos(edgeosIds, [callback])
```

### createkey

 Create key.

    * @param {function} optional

```javascript
edgePortal.keys.create([callback])
```

### deletekey

 Delete key by organisationId.

     * @param {organisationId} number
     * @param {function} callback optional

```javascript

const organisationId = 1;

edgePortal.keys.delete(organisationId, [callback])
```

### getkey

 Get key by organisationId.

     * @param {organisationId} number
     * @param {function} callback optional

```javascript

const organisationId = 1;

edgePortal.keys.getkey(organisationId, [callback])
```

### getkeys

 Get key by keyId.

     * @param {keyId} string
     * @param {function} callback optional

```javascript

const keyId = "5bd17d7442dffe35c8e5915a";

edgePortal.keys.getkey(keyId, [callback])
```

### getEdgeos

 Get all EdgeOS.

     * @param {number} page
     * @param {string} attribute name, organisationId, id
     * @param {string} sort asc, desc
     * @param {string} depth one, all
     * @param {function} callback optional

```javascript
edgePortal.edgeos.getAll([callback])
```

### getSingleEdgeos

 Get single EdgeOS.

     * @param {string} edgeosId
     * @param {function} callback optional

```javascript
edgePortal.edgeos.get(edgeosId, [callback])
```

### deleteEdgeos

 Delete a EdgeOS by Id

     * @param {string} edgeosId
     * @param {function} callback optional

```javascript

const edgeosId = "5c62d4be51d00e1e58ad1aff";

edgePortal.edgeos.delete(edgeosId, [callback])
```

### createEdgeos

 Create a EdgeOS.

     * @param {object} formData
     * @param {function} callback optional

```javascript

const formData = new FormData();
formData.append("version", '0.0.1');
formData.append("name", 'Test-EdgeOS');
formData.append("platform", 'NETFIELD');
formData.append("type", 'update');
formData.append('file', fs.createReadStream('test.json'));

edgePortal.edgeos.create(formData, [callback])

```

### updateEdgeos

 Update a EdgeOS

     * @param {keyId} string
     * @param {function} callback optional

```javascript

const edgeosId = "5c62d4be51d00e1e58ad1aff";

const newFormData = new FormData();
newFormData.append("version", '0.0.1');
newFormData.append("name", 'Test-EdgeOS');
newFormData.append("platform", 'NETFIELD');
newFormData.append("type", 'update');
newFormData.append('file', fs.createReadStream('test.json'));

edgePortal.edgeos.update(edgeosId, newFormData, [callback]);
```

### createTenant

 Create tenant's root organization.

     * @param {object} params
     * @param {function} callback optional

```javascript

const creationParams = {
    "name": "string",
    "admin": {
        "email": "asdf@mail.de",
        "firstName": "string",
        "lastName": "string",
        "jobTitle": "string",
        "department": "string",
        "mobilePhone": "string",
        "telephone": "string",
        "street": "string",
        "houseNumber": "string",
        "addressSuplement": "string",
        "zipCode": "string",
        "city": "string",
        "country": "string"
    },
    "phoneNumber": "number",
    "street": "string",
    "houseNumber": "string",
    "addresSupplement": "string",
    "zipCode": "string",
    "city": "string",
    "country": "string",
    "notes": "string",
    "childOrganisationsLimit": "number",
    "usersLimit": "number",
    "devicesLimit": "number",
    "keysLimit": "number"
};

edgePortal.tenants.create(creationParams, [callback]);
```

### updateTenant

 Update tenant by the tenant's Id.

     * @param {number} tenantId
     * @param {object} params
     * @param {function} callback optional

```javascript
let tenantId = 10;

let updateParams = {
    "childOrganisationsLimit": 10,
    "usersLimit": 10,
    "devicesLimit": 10,
    "keysLimit": 10
}

edgePortal.tenants.update(tenantId, updateParams, [callback])
```

### getTenant

 Get a tenant by tenant Id
     * @param {number} tenantId
     * @param {function} callback optional

```javascript

let tenantId = 10;

edgePortal.tenants.get(id, [callback]);
```

### getTenants

 Get All tenat organizations.


     * @param {number} page
     * @param {number} limit
     * @param {number} sortBy optional
     * @param {number} sortOrder optional
     * @param {function} callback optional

```javascript
edgeSDK.tenants.getAll(1, 10,"name", "asc"  [callback]);
```

### deleteTenant

 Delete tenant by root organisation Id.

     * @param {number} organisationId
     * @param {function} callback optional

```javascript
const tenantId = 10;

edgePortal.tenants.delete(tenantId, [callback])
```


## Tests
> Setup your testing enviorment to localmachine and change configuration troug method
```js
edgePortal.setConfiguration({
    version: '1.0.0',
    schema: 'http', // http or https
    host: '127.0.0.1',
    post: 5000,
    headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json'
    }
});
```

> Edit setings in configure file and chaneg enviorment.js to be development
```js
const enviorment = exports.enviorment = {
    enviorment: 'development'
}
```

> Run tests
```js
npm run test
```

## Error response
> Error responses are structured in fallowing object
```js
let error = {
    error: "Not Found" // Status message,
    message: "OrganisationId not found." // Description message
}
```

## License
> See LICENSE file in project.

[LICENSE]: ./LICENSE
[license-shields]: https://img.shields.io/github/license/HilscherAutomation/netFIELD-node-SDK.svg
