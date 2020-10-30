# netFIELD SDK Node

*netFIELD-SDK-Node (node.js version >=0.6.x) and Node samples for REST API.*

## Installation

> Install sdk through 'npm' or download folder in your project

```js
npm install netfield-sdk-node --save
```

> Require 'netfield-sdk-node' in your file
```js
var netField = require('netfield-sdk-node');
```

## Configuration

> Basic configuration options
```js
netField.setConfiguration({
    clientId: 'your-client-id',
    clientPassword: 'your-client-password'
});
```

> Advanced configuration options.
 ```js
netField.setConfiguration({
    version: '1.0.0',
    schema: 'http', // http or https
    host: 'api.netfield.io',
    post: 80,
    headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'your-token'
    }
});
```

> Token configuration.
```js
netField.setToken('your-token'); //Done automatically by auth
netField.removeToken('your-token'); //Done automatically by revoke
```

> Helper functions.
```js
const token = netField.getToken();
```
```js
const options = netField.getConfiguration();
```

## Method Usage
> Callbacks (old way)
```js
const params = { email: 'my@email.de', password: 'my-password' };

netField.auth.auth(params, function (error, data) {
    if(error){
        throw new Error(error.message);
    }

    netField.setToken(data.token);
});
```

> Promises (new way)
```js
const params = { email: 'my@email.de', password: 'my-password' };

netField.auth.auth(params)
    .then(data => {
        netField.setToken(data.token);
    })
    .catch(error => {
        throw new Error(error.message);
    });
```

## Resources

1. [Auth](./docs/auth)

2. Device
    * [Main](./docs/devices/devices)
    * [Containers](./docs/devices/containers)
    * [Containers Routes](./docs/devices/routes)
    * [Notifications](./docs/devices/notifications)
    * [Remote](./docs/devices/remote)

3. [Containers](./docs/containers)

4. Organisation
    * [Main](./docs/organisations/organisations)
    * [Manifest](./docs/organisations/manifests)

5. [Tenants](./docs/tenants)

6. [Users](./docs/users)

7. [Permissions](./docs/permissions)

8. [Roles](./docs/roles)

9. [EdgeOs](./docs/edgeos)

10. [Keys](./docs/keys)

11. [Webhooks](./docs/webhooks)


## Tests
> Setup your testing environment to localmachine and change configuration through method
```js
netField.setConfiguration({
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
> Error responses are structured in following object
```js
let error = {
    error: "Not Found" // Status message,
    message: "OrganisationId not found." // Description message
}
```

## License
> See LICENSE file in project.
