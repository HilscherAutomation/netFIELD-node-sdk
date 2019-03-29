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
var getverifyuser = require ('./resources/users/getverifyuser')
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
var updateogranization = require('./resources/organisations/updateogranisation');
var createorganisation = require('./resources/organisations/createorganisation');
var deleteorganisation = require('./resources/organisations/deleteorganisation');
/* Devices */
var createdevice = require('./resources/devices/createdevice');
var getdevice = require('./resources/devices/getdevice');
var updatedevice = require('./resources/devices/updatedevice');
var getopcua = require('./resources/devices/getopcua');
var deletedevice = require('./resources/devices/deletedevice');
var createdevicecustomfields = require('./resources/devices/createdevicecustomfields');
var getdevicecustomfields = require('./resources/devices/getdevicecustomfields');
var getdevicecustomfield = require('./resources/devices/getdevicecustomfield');
var updatedevicesutomfield = require('./resources/devices/updatedevicesutomfield');
var deletedevicecustomfield = require('./resources/devices/deletedevicecustomfield');
var getdevices = require('./resources/devices/getdevices');
var getstatuslist = require('./resources/devices/getstatuslist');
var uploadSnapshot = require('./resources/devices/snapshots/uploadSnapshot');
var getSnapshot = require('./resources/devices/snapshots/getSnapshot');
var getSnapshots = require('./resources/devices/snapshots/getSnapshots');
var deleteSnapshot = require('./resources/devices/snapshots/deletesnapshot');
var onBoard = require('./resources/devices/onBoard');
var offBoard = require('./resources/devices/offBoard');
var getTelemetry = require('./resources/devices/getdevicetelemetry');
var methods = require('./resources/devices/methods');
var getdevicenetwork = require ('./resources/devices/getdevicenetwork');
var getTopology = require ('./resources/devices/getTopology');
var createTopologyLayout = require('./resources/devices/createTopologyLayout');
var getTopologyLayouts = require('./resources/devices/getTopologyLayouts');
var getTopologyLayout = require('./resources/devices/getTopologyLayout');
var updateTopologyLayout = require('./resources/devices/updateTopologyLayout');
var deleteTopologyLayout = require('./resources/devices/deleteTopologyLayout');
var createDeviceNotification = require('./resources/devices/createdevicenotification');
var deleteAllNotifications = require('./resources/devices/deletealldevicenotifications');
var deleteNotification = require('./resources/devices/deletedevicenotification');
var getNotifications = require('./resources/devices/getNotifications');
/* Roles */
var createrole = require('./resources/roles/createrole');
var getrole = require('./resources/roles/getrole');
var updaterole = require('./resources/roles/updaterole');
var getroles = require('./resources/roles/getroles');
var deleterole = require('./resources/roles/deleterole');
var addRoleToUser = require('./resources/roles/addroletouser');
var deleteRoleFromUser = require('./resources/roles/deleterolefromuser');
var getallrolesbyuser = require('./resources/roles/getallrolesbyuser');
/* Modules */
var getmodule = require('./resources/modules/getmodule');
var getmodules = require('./resources/modules/getmodules');
var getdevicemodules = require('./resources/modules/getdevicemodules');
var createmodule = require('./resources/modules/createmodule');
var deletemodule = require('./resources/modules/deletemodule');
var deletedevicemodule = require('./resources/modules/deletedevicemodule');
var createdevicemodule = require('./resources/modules/createdevicemodule');
var getmoduleroutes = require('./resources/modules/getmoduleroutes');
var createmoduleroute = require('./resources/modules/createmoduleroute');
var updatemoduleroute = require('./resources/modules/updatemoduleroute');
var deletemoduleroute = require('./resources/modules/deletemoduleroute');
var getmoduleproperties = require('./resources/modules/getmoduleproperties');
var updatemodule = require('./resources/modules/updatemodule');
/* Permissions */
var checkDevices = require('./resources/permissions/checkDevices');
var checkModules = require('./resources/permissions/checkModules');
var checkOrganisations = require('./resources/permissions/checkOrganisations');
var checkUsers = require('./resources/permissions/checkUsers');
var checkRoles = require('./resources/permissions/checkRoles');
var checkTenants = require('./resources/permissions/checkTenants');
var checkKeys = require('./resources/permissions/checkKeys');
var checkEdgeos = require('./resources/permissions/checkEdgeos');
/* Keys */
var createkey = require('./resources/keys/createkey');
var updatekey = require('./resources/keys/updatekey');
var getkey = require('./resources/keys/getkey');
var getkeys = require('./resources/keys/getkeys');
var deletekey = require('./resources/keys/deletekey');
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
            update: updateogranization, //PUT /organisations/{organisationId}
            create: createorganisation, //POST /organisations/{organisationId}
            delete: deleteorganisation, //DELETE /organisations/{organisationId
        },
        roles: {
            create: createrole, //POST /roles
            get: getrole, //GET /roles/{roleName}
            update: updaterole, //PUT /roles
            getAll: getroles, //GET /roles
            delete: deleterole //DELETE /roles/{roleName}
        },
        devices: {
            create: createdevice, //POST /devices
            get: getdevice, //GET /devices/{deviceId}
            getAll: getdevices, //GET /devices
            getStatusList: getstatuslist, //GET /devices/status
            getOpcUa: getopcua, // GET /devices/{deviceId}/opc
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
            snapshots: {
                get: getSnapshot, //GET /devices/{deviceId}/snapshots/{snapshotId}
                getAll: getSnapshots, //GET /devices/{deviceId}/snapshots
                delete: deleteSnapshot, //DELETE /devices/{deviceId}/snapshots/{snapshotId}
                upload: uploadSnapshot //POST /devices/{deviceId}/snapshots
            },
            telemetry: {
                get: getTelemetry, // GET /devices/{deviceId}/telemetry
            },
            network: getdevicenetwork, // GET /devices/{deviceId}/network
            topology: getTopology, // GET /devices/{deviceId}/topology
            createTopologyLayout: createTopologyLayout, // POST /devices/{deviceId}/topology/layouts
            topologyLayouts: getTopologyLayouts, // GET /devices/{deviceId}/topology/layouts
            topologyLayout: getTopologyLayout, // GET /devices/{deviceId}/topology/layouts/{layoutId}
            updateTopologyLayout: updateTopologyLayout, // PUT /devices/{deviceId}/topology/layouts/{layoutId}
            deleteTopologyLayout: deleteTopologyLayout, // DELETE /devices/{deviceId}/topology/layouts/{layoutId}
            notifications: {
                create: createDeviceNotification, // POST /devices/{deviceId}/notifications
                getAll: getNotifications, // GET /devices/{deviceId}/notifications/
                deleteAll: deleteAllNotifications, // DELETE /devices/{deviceId}/notifications
                delete: deleteNotification // DELETE /devices/{deviceId}/notifications/{notificationId}
            },
        },
        modules: {
            get: getmodule, //GET /modules/{moduleId}
            getAllModules: getmodules, //GET /modules
            create: createmodule, //POST /modules
            delete: deletemodule, //DELETE /modules/{moduleId}
            deviceModules: getdevicemodules, //GET /modules
            createDeviceModule: createdevicemodule, //POST /modules
            deleteDeviceModule: deletedevicemodule, //DELETE /modules/{moduleId}
            update: updatemodule, //PUT /modules/{moduleId}
            routes: {
                get: getmoduleroutes, //GET /modules/routes
                create: createmoduleroute, //POST /modules/routes
                update: updatemoduleroute, //PUT /modules/routes/{routeId
                delete: deletemoduleroute, //DELETE /modules/routes/{routeId}
            },
            properties: getmoduleproperties, //GET /modules/{moduleId}/properties
        },
        permissions: {
            devices: checkDevices, //POST /permissions/devices
            modules: checkModules, //POST /permissions/modules
            organisations: checkOrganisations, //POST /permissions/organisations
            users: checkUsers, //POST /permissions/users
            roles: checkRoles, //POST /permissions/roles
            tenants: checkTenants, //POST /permissions/tenants
            keys: checkKeys, //POST /permissions/keys
            edgeos: checkEdgeos //POST /permissions/edgeos
        },
        keys: {
            create: createkey, //POST /keys
            update: updatekey, //PUT /keys/{keyId}
            get: getkey, //GET /keys/{keyId}
            getAll: getkeys, //GET /keys
            delete: deletekey, //DELETE /keys/{keyId}
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
        }
    };
};
