/**********************************************************************
 * Copyright (c) 2019 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
"use strict";

/* API */
var api = require('./api');
/* Users */
var createuser = require('./resources/users/createuser');
var createselfuser = require('./resources/users/createselfuser');
var getusers = require('./resources/users/getusers');
var getuser = require('./resources/users/getuser');
var getverifyuser = require('./resources/users/getverifyuser')
var getprofile = require('./resources/users/getprofile');
var updateuser = require('./resources/users/updateuser');
var updateprofile = require('./resources/users/updateprofile');
var verifyusers = require('./resources/users/verifyuser');
var deleteuser = require('./resources/users/deleteuser');
var passwordreset = require('./resources/users/passwordreset');
var reset = require('./resources/users/reset');
var getSuggestions = require('./resources/users/getsuggestions')
/* Organisations */
var getorganisation = require('./resources/organisations/getorganisation');
var updateorganisation = require('./resources/organisations/updateogranisation');
var createorganisation = require('./resources/organisations/createorganisation');
var deleteorganisation = require('./resources/organisations/deleteorganisation');
var getorganisations = require('./resources/organisations/getorganisations');
/* Organisation Manifests*/
var createmanifestcontainer = require('./resources/organisations/manifests/createcontainer');
var createmanifestroute = require('./resources/organisations/manifests/createroute');
var getmanifestcontainers = require('./resources/organisations/manifests/getcontainers');
var getmanifestroutes = require('./resources/organisations/manifests/getroutes');
var deletemanifestcontainer = require('./resources/organisations/manifests/deletecontainer');
var deletemanifestroute = require('./resources/organisations/manifests/deleteroute');
var getmanifestroute = require('./resources/organisations/manifests/getroute');
var getmanifestcontainer = require('./resources/organisations/manifests/getcontainer');
var updatemanifestcontainer = require('./resources/organisations/manifests/updatecontainer');
var updatemanifestroute = require('./resources/organisations/manifests/updateroute');
/* Devices */
var createdevice = require('./resources/devices/createdevice');
var getdevice = require('./resources/devices/getdevice');
var updatedevice = require('./resources/devices/updatedevice');
var deletedevice = require('./resources/devices/deletedevice');
var createdevicecustomfields = require('./resources/devices/createdevicecustomfields');
var getdevicecustomfields = require('./resources/devices/getdevicecustomfields');
var getdevicecustomfield = require('./resources/devices/getdevicecustomfield');
var updatedevicesutomfield = require('./resources/devices/updatedevicesutomfield');
var deletedevicecustomfield = require('./resources/devices/deletedevicecustomfield');
var getdevices = require('./resources/devices/getdevices');
var getstatuslist = require('./resources/devices/getstatuslist');
var onBoard = require('./resources/devices/onBoard');
var offBoard = require('./resources/devices/offBoard');
var methods = require('./resources/devices/methods');
var createDeviceNotification = require('./resources/devices/createdevicenotification');
var deleteAllNotifications = require('./resources/devices/deletealldevicenotifications');
var deleteNotification = require('./resources/devices/deletedevicenotification');
var getNotifications = require('./resources/devices/getNotifications');
/* Devices Remote */
var createremotedevice = require('./resources/devices/remote/createremote');
var getremotedevicestatus = require('./resources/devices/remote/getstatus');
var getremotedevicecredentials = require ('./resources/devices/remote/getcredentials');
/* Device Container routes */
var getcontainerroutes = require('./resources/devices/containers/getcontainerroutes');
var createcontainerroute = require('./resources/devices/containers/createcontainerroute');
var updatecontainerroute = require('./resources/devices/containers/updatecontainerroute');
var deletecontainerroute = require('./resources/devices/containers/deletecontainerroute');
/* Device Containers */
var getdevicecontainers = require('./resources/devices/containers/getdevicecontainers');
var deletedevicecontainer = require('./resources/devices/containers/deletedevicecontainer');
var createdevicecontainer = require('./resources/devices/containers/createdevicecontainer');
var updatedevicecontainer = require('./resources/devices/containers/updatedevicecontainer');
var getcontainerproperties = require('./resources/devices/containers/getcontainerproperties');
var getinstalledcontainers = require('./resources/devices/containers/getinstalledcontainers');
var getdevicecontainer = require('./resources/devices/containers/getdevicecontainer');
var getdeployablecontainers = require('./resources/devices/containers/getdeployablecontainers');
/* Roles */
var createrole = require('./resources/roles/createrole');
var getrole = require('./resources/roles/getrole');
var updaterole = require('./resources/roles/updaterole');
var getroles = require('./resources/roles/getroles');
var deleterole = require('./resources/roles/deleterole');
var addRoleToUser = require('./resources/roles/addroletouser');
var deleteRoleFromUser = require('./resources/roles/deleterolefromuser');
var getallrolesbyuser = require('./resources/roles/getallrolesbyuser');
/* Search */
var searchdevices = require('./resources/search/searchdevices');
var searchcontainers = require('./resources/search/searchcontainers');
var searchorganisations = require('./resources/search/searchorganisations');
var searchusers = require('./resources/search/searchusers');
/* Containers */
var getcontainers = require('./resources/containers/getcontainers');
var createcontainer = require('./resources/containers/createcontainer');
var deletecontainer = require('./resources/containers/deletecontainer');
var updatecontainer = require('./resources/containers/updatecontainer');
var getcontainer = require('./resources/containers/getcontainer');
var sharecontainer = require('./resources/containers/sharecontainer');
var unsharecontainer = require('./resources/containers/unsharecontainer');
/* Permissions */
var checkDevices = require('./resources/permissions/checkDevices');
var checkContainers = require('./resources/permissions/checkContainers');
var checkOrganisations = require('./resources/permissions/checkOrganisations');
var checkUsers = require('./resources/permissions/checkUsers');
var checkRoles = require('./resources/permissions/checkRoles');
var checkTenants = require('./resources/permissions/checkTenants');
var checkKeys = require('./resources/permissions/checkKeys');
var checkEdgeos = require('./resources/permissions/checkEdgeos');
var checkPermissions = require('./resources/permissions/checkPermissions');
var checkWebhooks = require('./resources/permissions/checkWebhooks');
var checkGroups = require('./resources/permissions/checkGroups');
/* Keys */
var createkey = require('./resources/keys/createkey');
var updatekey = require('./resources/keys/updatekey');
var getkey = require('./resources/keys/getkey');
var getkeys = require('./resources/keys/getkeys');
var deletekey = require('./resources/keys/deletekey');
var getkeypermissions = require('./resources/keys/getkeypermissions');
/* Tenants */
var createTenant = require('./resources/tenants/createtenant');
var deleteTenant = require('./resources/tenants/deletetenant');
var getTenants = require('./resources/tenants/gettenants');
var updateTenant = require('./resources/tenants/updatetenant');
var getTenant = require('./resources/tenants/gettenant');
/* EdgeOS */
var createEdgeos = require('./resources/edgeos/createEdgeos');
var updateEdgeos = require('./resources/edgeos/updateEdgeos');
var getEdgeos = require('./resources/edgeos/getEdgeos');
var getSingleEdgeos = require('./resources/edgeos/getSingleEdgeos');
var deleteEdgeos = require('./resources/edgeos/deleteEdgeos');
/* Webhooks */
var createwebhook = require('./resources/webhooks/createwebhook');
var deletewebhook = require('./resources/webhooks/deletewebhook');
var getwebhook = require('./resources/webhooks/getwebhook');
var getwebhooks = require('./resources/webhooks/getwebhooks');
var updatewebhook = require('./resources/webhooks/updatewebhook');
/* Groups */
var creategroup = require('./resources/groups/creategroup');
var getgroup = require('./resources/groups/getgroup');
var updategroup = require('./resources/groups/updategroup');
var deletegroup = require('./resources/groups/deletegroup');
var adddevicetogroup = require('./resources/groups/adddevicetogroup');
var removedevicefromgroup = require('./resources/groups/removedevicefromgroup');

module.exports = function () {
    return {
        setConfiguration: api.setConfiguration,
        getConfiguration: api.getConfiguration,
        generateUserToken: api.generateUserToken, //POST /auth
        verifyUserToken: api.verifyUserToken, //GET /auth/verify
        revokeUserToken: api.revokeUserToken, //POST /auth/revoke
        setUserToken: api.setUserToken,
        setKeyToken: api.setKeyToken,
        setUserRefreshToken: api.setUserRefreshToken,
        isAuthenticated: api.isAuthenticated,
        auth: {
            resetPassword: passwordreset,
            setPassword: reset
        },
        users: {
            create: createuser, //POST /users
            createself: createselfuser, // POST /users (using public token)
            getAll: getusers, //GET /users
            get: getuser, //GET /users/{userId}
            getverify: getverifyuser, // GET /users/verify
            suggest: getSuggestions,
            update: updateuser, //PUT /users/{userId}
            verifyusers: verifyusers, // PUT /users/verify
            delete: deleteuser, //DELETE /users/{userId}
            profile: {
                get: getprofile, //GET /users/profile
                update: updateprofile //PUT /users/profile
            },
            roles: {
                add: addRoleToUser, //PUT /users/{userId}/roles/{roleName}
                delete: deleteRoleFromUser, //DELETE /users/{userId}/roles/{roleName}
                getAll: getallrolesbyuser //GET /users/{userId}/roles
            }
        },
        organisation: {
            get: getorganisation, //GET /organisations/{organisationId}
            getAll: getorganisations, //GET /organisations
            update: updateorganisation, //PUT /organisations/{organisationId}
            create: createorganisation, //POST /organisations/{organisationId}
            delete: deleteorganisation, //DELETE /organisations/{organisationId
            manifest: {
                createContainer: createmanifestcontainer, //POST /organisations/{organisationId}/deployment-manifests/containers
                createRoute: createmanifestroute, //POST /organisations/{organisationId}/deployment-manifests/routes
                getContainers: getmanifestcontainers, //GET /organisations/{organisationId}/deployment-manifests/containers
                getRoutes: getmanifestroutes, //GET /organisations/{organisationId}/deployment-manifests/routes
                deleteContainer: deletemanifestcontainer, // DELETE /organisations/{organisationId}/deployment-manifests/containers/{containerId}
                deleteRoute: deletemanifestroute, // DELETE /organisations/{organisationId}/deployment-manifests/containers/{routeId}
                updateContainer: updatemanifestcontainer, // PUT /organisations/{organisationId}/deployment-manifests/containers/{containerId}
                updateRoute: updatemanifestroute, // PUT /organisations/{organisationId}/deployment-manifests/containers/{routeId}
                getContainer: getmanifestcontainer, //GET /organisations/{organisationId}/deployment-manifests/containers/{containerId}
                getRoute: getmanifestroute, // GET /organisations/{organisationId}/deployment-manifests/route/{routeId}
            }
        },
        roles: {
            create: createrole, //POST /roles
            get: getrole, //GET /roles/{roleName}
            update: updaterole, //PUT /roles
            getAll: getroles, //GET /roles
            delete: deleterole //DELETE /roles/{roleName}
        },
        search: {
            devices: searchdevices, // GET /search/devices
            containers: searchcontainers, // GET /search/containers
            organisations: searchorganisations, // GET /search/organisations
            users: searchusers, // GET /search/users
        },
        devices: {
            create: createdevice, //POST /devices
            get: getdevice, //GET /devices/{deviceId}
            getAll: getdevices, //GET /devices
            getStatusList: getstatuslist, //GET /devices/status
            methods: methods, // POST /devices/{deviceId}/methods
            update: updatedevice, //PUT /devices/{deviceId
            delete: deletedevice, //DELETE /devices/{deviceId}
            onBoard: onBoard, //POST /devices/sas/onboard
            offBoard: offBoard, //PUT /devices/offboard
            customFields: {
                create: createdevicecustomfields, //POST /devices/{deviceId}/custom-fields
                getAll: getdevicecustomfields, //GET /devices/{deviceId}/custom-fields
                get: getdevicecustomfield, //GET /devices/{deviceId}/custom-fields/{fieldId}
                update: updatedevicesutomfield, //PUT /devices/{deviceId}/custom-fields/{fieldId}
                delete: deletedevicecustomfield //DELETE /devices/{deviceId}/custom-fields/{fieldId}
            },
            notifications: {
                create: createDeviceNotification, // POST /devices/{deviceId}/notifications
                getAll: getNotifications, // GET /devices/{deviceId}/notifications/
                deleteAll: deleteAllNotifications, // DELETE /devices/{deviceId}/notifications
                delete: deleteNotification // DELETE /devices/{deviceId}/notifications/{notificationId}
            },
            containers: {
                getInstalled: getinstalledcontainers, //GET /devices/{deviceId}/containers/installed
                get: getdevicecontainer, // GET /devices/{deviceId}/containers/{containerId}
                getDeployable: getdeployablecontainers, //GET /devices/{deviceId}/containers/deployable
                getAll: getdevicecontainers, //GET /devices/{deviceId}/containers
                delete: deletedevicecontainer, //DELETE /devices/{deviceId}/containers/{containerId}
                create: createdevicecontainer, //POST /devices/{deviceId}/containers/{containerId}
                update: updatedevicecontainer, //PUT /devices/{deviceId}/containers/{containerId}
                properties: getcontainerproperties, //GET /devices/{deviceId}/containers/{containerId}/properties
                routes: {
                    getAll: getcontainerroutes, //GET /devices/{deviceId}/containers/routes
                    create: createcontainerroute, //POST /devices/{deviceId}/containers/routes
                    update: updatecontainerroute, //PUT /devices/{deviceId}/containers/routes/{routeId}
                    delete: deletecontainerroute, //DELETE /devices/{deviceId}/containers/routes/{routeId}
                }
            },
            remote: {
                create: createremotedevice, //POST /devices/{deviceId}/remote
                status: getremotedevicestatus, //GET /devices/{deviceId}/remote
                credentials: getremotedevicecredentials //GET /devices/{deviceId}/remote/credentials
            }
        },
        containers: {
            getAll: getcontainers, //GET /containers
            create: createcontainer, //POST /containers
            delete: deletecontainer, //DELETE /containers/{containerId}
            get: getcontainer, //GET /containers/{containerId}
            update: updatecontainer, //PUT /containers/{containerId}
            share: sharecontainer, //PUT /containers/{containerId}/share
            unshare: unsharecontainer, //DELETE /containers/{containerId}/share/{organisationId}
        },
        permissions: {
            permissions: checkPermissions, // GET /permissions/
            devices: checkDevices, //POST /permissions/devices
            containers: checkContainers, //POST /permissions/containers
            organisations: checkOrganisations, //POST /permissions/organisations
            users: checkUsers, //POST /permissions/users
            roles: checkRoles, //POST /permissions/roles
            tenants: checkTenants, //POST /permissions/tenants
            keys: checkKeys, //POST /permissions/keys
            edgeos: checkEdgeos, //POST /permissions/edgeos,
            webhooks: checkWebhooks, //POST /permissions/webhooks,
            groups: checkGroups //POST /permissions/groups,
        },
        keys: {
            create: createkey, //POST /keys
            update: updatekey, //PUT /keys/{keyId}
            get: getkey, //GET /keys/{keyId}
            getAll: getkeys, //GET /keys
            delete: deletekey, //DELETE /keys/{keyId}
            getpermissions: getkeypermissions, //GET /keys/permissions
        },
        edgeos: {
            get: getSingleEdgeos, //GET /edgeos/{edgeosId}
            getAll: getEdgeos, //GET /edgeos
            delete: deleteEdgeos, //DELETE /edgeos/{edgeosId}
            create: createEdgeos, //POST /edgeos/{edgeosId}
            update: updateEdgeos //PUT /edgeos/{edgeosId}
        },
        tenants: {
            create: createTenant, //POST /tenants/organisations
            update: updateTenant, //PUT /tenants/organisations/{tenantId}
            get: getTenant, //GET /tenants/organisations/{tenantId}
            getAll: getTenants, //GET /tenants/organisations
            delete: deleteTenant //DELETE /tenants/organisations/{tenantId}
        },
        webhooks: {
            create: createwebhook, //POST /webhooks
            update: updatewebhook, //PUT /webhooks/{webhookId}
            get: getwebhook, //GET /webhooks/{webhookId}
            getAll: getwebhooks, //GET /webhooks/
            delete: deletewebhook //DELETE /webhooks/{webhookId}
        },
        groups: {
            create: creategroup, // POST /groups/{groupId}
            update: updategroup, // PUT /groups/{groupId}
            get: getgroup, // GET /groups/{groupId}
            delete: deletegroup, // DELETE /groups/{groupId}
            addDevice: adddevicetogroup, // PUT /groups/{groupId}/devices/{deviceId}
            removeDevice: removedevicefromgroup // DELETE /groups/{groupId}/devices/{deviceId}
        }
    };
};
