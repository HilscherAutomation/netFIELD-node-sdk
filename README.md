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

> Advanced configuration options.
 ```js
netField.setConfiguration({
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
    * [Main](./docs/devices/devices.md)
    * [Containers](./docs/devices/containers.md)
    * [Containers Routes](./docs/devices/routes.md)
    * [Notifications](./docs/devices/notifications.md)
    * [Remote](./docs/devices/remote.md)

3. Containers
    * [Main](./docs/containers/containers.md)
    * [Versions](./docs/containers/versions.md)

4. Organisation
    * [Main](./docs/organisations/organisations.md)
    * [Manifest](./docs/organisations/manifests.md)

5. [Tenants](./docs/tenants.md)

6. [Users](./docs/users.md)

7. [Permissions](./docs/permissions.md)

8. [Roles](./docs/roles.md)

9. [EdgeOs](./docs/edgeos.md)

10. [Keys](./docs/keys.md)

11. [Webhooks](./docs/webhooks.md)

12. Deployments
    * [Filters](./docs/deployments/filters.md)
    * [Jobs](./docs/deployments/jobs.md)
    * [Rollout](./docs/deployments/rollouts.md)


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
