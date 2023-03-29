# netFIELD SDK Node

*netFIELD-SDK-Node (node.js version >=0.6.x) and Node samples for REST API.*

## Installation

> Install sdk through 'npm' or download folder in your project

```js
npm install netfield-node-sdk --save
```

> Require 'netfield-node-sdk' in your file
```js
var netField = require('netfield-node-sdk');
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

netField.generateUserToken(params, function (error, data) {
    if(error){
        throw new Error(error.message);
    }

});
```

> Promises (new way)
```js
const params = { email: 'my@email.de', password: 'my-password' };

netField.generateUserToken(params)
    .then(data => {
        // do something
    })
    .catch(error => {
        throw new Error(error.message);
    });
```

## Resources

1. [Auth](./docs/auth.md)

2. Device
    * [Main](./docs/devices/devices.md)
    * [Containers](./docs/devices/containers.md)
    * [Containers Routes](./docs/devices/routes.md)
    * [Notifications](./docs/devices/notifications.md)
    * [Remote](./docs/devices/remote.md)

3. Containers
    * [Main](./docs/containers/containers.md)
    * [Versions](./docs/containers/versions.md)
    * [Sharings](./docs/containers/sharings.md)

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
    * [Rollouts](./docs/deployments/rollouts.md)

13. AppStore
    * [Orders](./docs/softwaremodules/appStore.md)
    * [Artifacts](./docs/softwaremodules/artifacts.md)
    * [Modules](./docs/softwaremodules/modules.md)

14. [Metrics](./docs/metrics.md)

15. [RolesManagement](./docs/rolesManagement.md)

16. [BugReports](./docs/bugreports)

17. [Announcements](./docs/announcements.md)

18. [Resources](./docs/resources.md)


## Tests
> Setup your testing environment to localmachine and change configuration through method
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
