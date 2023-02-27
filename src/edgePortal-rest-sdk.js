/**********************************************************************
 * Copyright (c) 2022 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
 **********************************************************************/
"use strict";

/* API */
var api = require('./api');
/* Auth */
var authsso = require('./resources/ssoAuth/auth');
/* Users */
var createuser = require('./resources/users/createuser');
var createselfuser = require('./resources/users/createselfuser');
var createsensoredgeuser = require('./resources/users/createsensoredgeuser');
var getusers = require('./resources/users/getusers');
var getuser = require('./resources/users/getuser');
var getverifyuser = require('./resources/users/getverifyuser')
var getprofile = require('./resources/users/getprofile');
var updateuser = require('./resources/users/updateuser');
var completesensoredgeregistration = require('./resources/users/completesensoredgeregistration');
var updateprofile = require('./resources/users/updateprofile');
var verifyusers = require('./resources/users/verifyuser');
var verifysensoredgeuser = require('./resources/users/verifysensoredgeuser');
var deleteuser = require('./resources/users/deleteuser');
var passwordreset = require('./resources/users/passwordreset');
var reset = require('./resources/users/reset');
var getSuggestions = require('./resources/users/getsuggestions')
var getVerifySensorEdgeUser = require('./resources/users/getverifysensoredgeuser');
var addNotificationEmail = require('./resources/users/addnotificationemail');
var getNotificationEmails = require('./resources/users/getnotificationemails');
var deleteNotificationEmail = require('./resources/users/deletenotificationemail');
var inviteUser = require('./resources/users/inviteuser');
var changeInvitationEmailStatus = require('./resources/users/changeUserInvitationStatus');
var getUsersInvitations = require('./resources/users/getusersinvitations');
var deleteUserInvitation = require('./resources/users/deleteuserinvitations');
var revokeUserInvitation = require('./resources/users/revokeuserinvitations');
var getWorkspaceUsers = require('./resources/users/getworkspaceusers');
var deleteWorkspaceUser = require('./resources/users/deleteworkspaceusers');
var getUserPreferences = require('./resources/users/getpreferences');
var updateUserPreferences = require('./resources/users/updatepreferences');
var deleteUserPreferences = require('./resources/users/deletepreferences');
/* Organisations */
var getorganisation = require('./resources/organisations/getorganisation');
var updateorganisation = require('./resources/organisations/updateogranisation');
var createorganisation = require('./resources/organisations/createorganisation');
var deleteorganisation = require('./resources/organisations/deleteorganisation');
var getorganisations = require('./resources/organisations/getorganisations');
var createupgraderequest = require('./resources/organisations/createupgraderequest');
/* Organisation Manifests */
var createmanifest = require('./resources/organisations/manifests/createmanifest');
var updatemanifest = require('./resources/organisations/manifests/updatemanifest');
var deletemanifest = require('./resources/organisations/manifests/deletemanifest');
var getsinglemanifest = require('./resources/organisations/manifests/getsinglemanifest');
var getmanifests = require('./resources/organisations/manifests/getmanifests');
var copymanifest = require('./resources/organisations/manifests/copymanifest');
var applymanifesttoonboardeddevice = require('./resources/organisations/manifests/applymanifest');
/* Organisation Manifests containers */
var createmanifestcontainer = require('./resources/organisations/manifests/containers/createcontainer');
var deletemanifestcontainer = require('./resources/organisations/manifests/containers/deletecontainer');
var getmanifestcontainers = require('./resources/organisations/manifests/containers/getcontainers');
var getmanifestcontainer = require('./resources/organisations/manifests/containers/getcontainer');
var updatemanifestcontainer = require('./resources/organisations/manifests/containers/updatecontainer');
/* Organisation Manifests routes */
var createmanifestroute = require('./resources/organisations/manifests/routes/createroute');
var getmanifestroutes = require('./resources/organisations/manifests/routes/getroutes');
var deletemanifestroute = require('./resources/organisations/manifests/routes/deleteroute');
var getmanifestroute = require('./resources/organisations/manifests/routes/getroute');
var updatemanifestroute = require('./resources/organisations/manifests/routes/updateroute');

/* Devices */
var createdevice = require('./resources/devices/createdevice');
var getdevice = require('./resources/devices/getdevice');
var getdevicewithkey = require('./resources/devices/getdeviceWithKey');
var getdevicechildren = require('./resources/devices/getdevicechildren');
var updatedevice = require('./resources/devices/updatedevice');
var deletedevice = require('./resources/devices/deletedevice');
var createdevicecustomfields = require('./resources/devices/createdevicecustomfields');
var getdevicecustomfields = require('./resources/devices/getdevicecustomfields');
var getdevicecustomfield = require('./resources/devices/getdevicecustomfield');
var updatedevicesutomfield = require('./resources/devices/updatedevicesutomfield');
var deletedevicecustomfield = require('./resources/devices/deletedevicecustomfield');
var getdevices = require('./resources/devices/getdevices');
var getdeviceswithgeolocation = require('./resources/devices/getdeviceswithgeolocation');
var getstatuslist = require('./resources/devices/getstatuslist');
var onBoard = require('./resources/devices/onBoard');
var onBoardWithKey = require('./resources/devices/onBoardWithKey');
var offBoard = require('./resources/devices/offBoard');
var onBoardSensorEdge = require('./resources/devices/onBoardSensorEdge');
var methods = require('./resources/devices/methods');
var createDeviceNotification = require('./resources/devices/createdevicenotification');
var deleteAllNotifications = require('./resources/devices/deletealldevicenotifications');
var deleteNotification = require('./resources/devices/deletedevicenotification');
var getNotifications = require('./resources/devices/getNotifications');
var enableDisableDevice = require('./resources/devices/enable');
var filterdevices = require('./resources/devices/filterdevices');
/* Devices Remote */
var createremotedevice = require('./resources/devices/remote/createremote');
var getremotedevicestatus = require('./resources/devices/remote/getstatus');
var getremotedevicecredentials = require('./resources/devices/remote/getcredentials');
/* Device Container routes */
var getcontainerroutes = require('./resources/devices/containers/getcontainerroutes');
var createcontainerroute = require('./resources/devices/containers/createcontainerroute');
var updatecontainerroute = require('./resources/devices/containers/updatecontainerroute');
var deletecontainerroute = require('./resources/devices/containers/deletecontainerroute');
/* Device Containers */
var deletedevicecontainer = require('./resources/devices/containers/deletedevicecontainer');
var createdevicecontainer = require('./resources/devices/containers/createdevicecontainer');
var updatedevicecontainer = require('./resources/devices/containers/updatedevicecontainer');
var getcontainerproperties = require('./resources/devices/containers/getcontainerproperties');
var getinstalledcontainers = require('./resources/devices/containers/getinstalledcontainers');
var getdevicecontainer = require('./resources/devices/containers/getdevicecontainer');
var getdeployablecontainers = require('./resources/devices/containers/getdeployablecontainers');
var deletealldevicecontainers = require('./resources/devices/containers/deletealldevicecontainers');
var getdeployablecontainerversions = require('./resources/devices/containers/getdeployablecontainerversions');
var createdevicecontainerlist = require('./resources/devices/containers/createdevicecontainerlist');
var updatedevicecontainerlist = require('./resources/devices/containers/updatedevicecontainerlist');
var getdevicesystemcontainer = require('./resources/devices/containers/getdevicesystemcontainer');
var getinstalledsystemcontainers = require('./resources/devices/containers/getinstalledsystemcontainers');
var getdevicesystemcontainersenv = require('./resources/devices/containers/getdevicesystemcontainersenv');
var getdevicesplatforms = require('./resources/devices/containers/getdevicesplatforms');
var bulkdeletedevicecontainers = require('./resources/devices/containers/deletedevicecontainers');
/* Device Deployment manifests */
var checkdevicedeploymentmanifest = require('./resources/devices/deploymentManifests/check');
var deploydevicedeploymentmanifest = require('./resources/devices/deploymentManifests/deploy');
/* Device Messages */
var getdevicemessages = require('./resources/devices/messages/getdevicemessages');
var getdevicetopics = require('./resources/devices/messages/getdevicetopics');
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
var searchdeploymentFilters = require('./resources/search/searchdeploymentFilters');
var searchdeploymentJobs = require('./resources/search/searchdeploymentJobs');
var searchdeploymentRollouts = require('./resources/search/searchdeploymentRollouts');
var searchtenants = require('./resources/search/searchtenants');
var searchkeys = require('./resources/search/searchkeys');
var searchgroups = require('./resources/search/searchgroups');
/* Containers */
var getcontainers = require('./resources/containers/getcontainers');
var createcontainer = require('./resources/containers/createcontainer');
var deletecontainer = require('./resources/containers/deletecontainer');
var updatecontainer = require('./resources/containers/updatecontainer');
var getcontainer = require('./resources/containers/getcontainer');
var disablecontainer = require('./resources/containers/disablecontainer');
var getEnvVariables = require('./resources/containers/getenvvariables');
/* Container Versions */
var createcontainerversion = require('./resources/containers/versions/createversion');
var deletecontainerversion = require('./resources/containers/versions/deleteversion');
var getcontainerversion = require('./resources/containers/versions/getversion');
var getallcontainerversion = require('./resources/containers/versions/getversions');
var updatecontainerversion = require('./resources/containers/versions/updateversion');
/* Container sharing */
var sharecontainer = require('./resources/containers/sharecontainer');
var unsharecontainer = require('./resources/containers/unsharecontainer');
var getsharing = require('./resources/containers/getsharing');
var getsharings = require('./resources/containers/getsharings');
var updatesharing = require('./resources/containers/updatesharing');
var unshareversion = require('./resources/containers/usharecontainerversion');
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
var createsensoredgekey = require('./resources/keys/createsensoredgekey');
var getKeyConnectionInfo = require('./resources/keys/getkeyconnectioninfo');
var getKeyConnectionDevices = require('./resources/keys/getkeyconnectiondevices');
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
var getEdgeosPlatforms = require('./resources/edgeos/getEdgeosPlatforms');
var deleteEdgeos = require('./resources/edgeos/deleteEdgeos');
/* Webhooks */
var createwebhook = require('./resources/webhooks/createwebhook');
var testwebhook = require('./resources/webhooks/testwebhook');
var deletewebhook = require('./resources/webhooks/deletewebhook');
var getwebhook = require('./resources/webhooks/getwebhook');
var getwebhooks = require('./resources/webhooks/getwebhooks');
var updatewebhook = require('./resources/webhooks/updatewebhook');
/* Groups */
var creategroup = require('./resources/groups/creategroup');
var getgroup = require('./resources/groups/getgroup');
var updategroup = require('./resources/groups/updategroup');
var deletegroup = require('./resources/groups/deletegroup');
var getgroupitemsforgroup = require('./resources/groups/getgroupitemsforgroup');
var adddevicetogroup = require('./resources/groups/adddevicetogroup');
var removedevicefromgroup = require('./resources/groups/removedevicefromgroup');
var addcontainertogroup = require('./resources/groups/addcontainertogroup');
var removecontainerfromgroup = require('./resources/groups/removecontainerfromgroup');
var getallgroups = require('./resources/groups/getgroupsfororganisation');
/* Dashboards */
var createdashboard = require('./resources/dashboards/createdashboard');
var createdashboardpanel = require('./resources/dashboards/createdashboardpanel');
var createdashboardseries = require('./resources/dashboards/createdashboardseries');
var deletedashboard = require('./resources/dashboards/deletedashboard');
var deletedashboardpanel = require('./resources/dashboards/deletedashboardpanel');
var deletedashboardseries = require('./resources/dashboards/deletedashboardseries');
var updatedashboard = require('./resources/dashboards/updatedashboard');
var updatedashboardpanel = require('./resources/dashboards/updatedashboardpanel');
var updatedashboardseries = require('./resources/dashboards/updatedashboardpanelseries');
var getdashboards = require('./resources/dashboards/getdashboards');
var getdashboard = require('./resources/dashboards/getdashboard');
var getdashboardpanels = require('./resources/dashboards/getdashboardpanels');
var getdashboardpanel = require('./resources/dashboards/getdashboardpanel');
var getallpanelseries = require('./resources/dashboards/getallpanelseries');
var getpanelseries = require('./resources/dashboards/getpanelseries');
var getsinglecontainerroute = require('./resources/devices/containers/getsinglecontainerroute');
/* Deployments */
// filters
var createFilter = require('./resources/deployments/filters/createfilter');
var getAllFilters = require('./resources/deployments/filters/getfilters');
var updateFilters = require('./resources/deployments/filters/updatefilters');
var deleteFilter = require('./resources/deployments/filters/deletefilter');
var getFilterById = require('./resources/deployments/filters/getfilterbyId');
var execute = require('./resources/deployments/filters/execute');
// jobs
var createJob = require('./resources/deployments/jobs/createjob');
var updateJob = require('./resources/deployments/jobs/updatejob');
var deleteJob = require('./resources/deployments/jobs/deletejob');
var executeJob = require('./resources/deployments/jobs/executeJob');
var getJobById = require('./resources/deployments/jobs/getsinglejob');
var getAllJobs = require('./resources/deployments/jobs/getjobs');
var executeJobByGroup = require('./resources/deployments/jobs/executejobdevicegroup');
var executeJobCustomSelect = require('./resources/deployments/jobs/executejobcustomselect');
// jobContainers
var addContainer = require('./resources/deployments/jobs/containers/addcontainer');
var updateContainer = require('./resources/deployments/jobs/containers/updatecontainer');
var deleteContainer = require('./resources/deployments/jobs/containers/deletecontainer');
var getAllContainers = require('./resources/deployments/jobs/containers/getallcontainers');
var getContainerById = require('./resources/deployments/jobs/containers/getcontainerbyid');
// jobContainerMethods
var addMethod = require('./resources/deployments/jobs/containers/methods/addmethod');
var updateMethod = require('./resources/deployments/jobs/containers/methods/updatemethod');
var deleteMethod = require('./resources/deployments/jobs/containers/methods/deletemethod');
var getAllMethods = require('./resources/deployments/jobs/containers/methods/getallmethods');
var getMethodById = require('./resources/deployments/jobs/containers/methods/getmethodbyid');
// jobRoutes
var addRoute = require('./resources/deployments/jobs/routes/addroute');
var updateRoute = require('./resources/deployments/jobs/routes/updateroute');
var deleteRoute = require('./resources/deployments/jobs/routes/deleteroutes');
var getAllRoutes = require('./resources/deployments/jobs/routes/getallroutes');
var getRouteById = require('./resources/deployments/jobs/routes/getroutebyid');
// jobOs
var addOs = require('./resources/deployments/jobs/os/addos');
var deleteOs = require('./resources/deployments/jobs/os/deleteos');
var getAllOs = require('./resources/deployments/jobs/os/getallos');
var getOsByPlatform = require('./resources/deployments/jobs/os/getosbyplatform');
// rollouts
var getAllRolloutsByOrganisationId = require('./resources/deployments/rollouts/getrollouts');
var getRolloutById = require('./resources/deployments/rollouts/getrolloutbyId');
var pauseJob = require('./resources/deployments/rollouts/pausejob');
var startJob = require('./resources/deployments/rollouts/startjob');
var rollbackJob = require('./resources/deployments/rollouts/rollbackjob');
var getRollbacks = require('./resources/deployments/rollouts/getrollbacks');
var deleteRollout = require('./resources/deployments/rollouts/deleterollout');
// jobSchedules
var createJobSchedule = require('./resources/deployments/jobs/schedules/createjobschedule');
var updateJobSchedule = require('./resources/deployments/jobs/schedules/updatejobschedule');
var deleteJobSchedule = require('./resources/deployments/jobs/schedules/deletejobschedule');
var getJobSchedule = require('./resources/deployments/jobs/schedules/getjobschedule');
var getAllJobSchedules = require('./resources/deployments/jobs/schedules/getjobschedules');
/* Sensor Edge  */
var offBoardConfirm = require('./resources/devices/offBoardConfirm');
/* Software Modules */
var createsoftwaremodules = require('./resources/softwareModules/create');
var getsoftwaremodule = require('./resources/softwareModules/getmodule');
var deletesoftwaremodule = require('./resources/softwareModules/deletemodule');
var createsoftwaremoduleartifact = require('./resources/softwareModules/artifacts/create');
var getsoftwaremoduleartifact = require('./resources/softwareModules/artifacts/getartifact');
/* App store */
var getorders = require('./resources/softwareModules/appStore/getorders');
var getorder = require('./resources/softwareModules/appStore/getorder');
/* Metrics */
var createquery = require('./resources/metrics/createquery');
var executequery = require('./resources/metrics/executequery');
var executesavedquery = require('./resources/metrics/executesavedquery');
var updatequery = require('./resources/metrics/updatequery');
var getquery = require('./resources/metrics/getquery');
var getqueries = require('./resources/metrics/getqueries');
var deletequery = require('./resources/metrics/deletequery');
var getrequest = require('./resources/metrics/getrequest');
var getfields = require('./resources/metrics/getfields');
/* Bug Reports */
var sendbugreport = require('./resources/bugReports/sendbugreports')
/* Roles Management */
var getavailablepresetroles = require('./resources/rolesManagement/getavailablepresetroles');
/* Announcements */
var getannouncements = require('./resources/announcements/getannouncements');
var markannouncement = require('./resources/announcements/markannouncement');
/* API */
var getApiInformation = require('./resources/api/getApiInformation');
/* Documentation */
var getarticles = require('./resources/documentation/getarticles');
var getarticle = require('./resources/documentation/getarticle');
var getarticleversion = require('./resources/documentation/getversion');
/* Resources */
var getresources = require('./resources/resources/getresources');
/* Sessions */
var destroysession = require('./resources/sessions/destroysession');
var destroysessions = require('./resources/sessions/destroysessions');
var getsession = require('./resources/sessions/getsession');
var getsessions = require('./resources/sessions/getallsessions');
var getSessionConnectionInfo = require('./resources/sessions/getsessionconnectioninfo');
var getSessionConnectionDevices = require('./resources/sessions/getsessionconnectiondevices');
/* Blocklists */
var createblocklist = require('./resources/blocklists/createblocklist');
var deleteblocklist = require('./resources/blocklists/deleteblocklist');
var updateblocklist = require('./resources/blocklists/updateblocklist');
var getblocklist = require('./resources/blocklists/getblocklistbyid');
var getblocklists = require('./resources/blocklists/getallblocklists');
/* Two-factor */
var enableTwoFactor = require('./resources/twoFactor/enable');
var disableTwoFactor = require('./resources/twoFactor/disable');
var verifyTwoFactorCode = require('./resources/twoFactor/verify');
var sendTwoFactorCode = require('./resources/twoFactor/send');
var addTwoFactorMethod = require('./resources/twoFactor/methods/add');
var deleteTwoFactorMethod = require('./resources/twoFactor/methods/delete');
var slectTwoFactorMethod = require('./resources/twoFactor/methods/select');
var verifyTwoFactorMethod = require('./resources/twoFactor/methods/verify');
var getTwoFactorMethods = require('./resources/twoFactor/methods/getAll');
var getEnabledTwoFactorMethods = require('./resources/twoFactor/methods/getEnabled');
/* Dynamic pages */
var getpages = require('./resources/dynamicPages/getpages');
var gettemplate = require('./resources/dynamicPages/gettemplate');

module.exports = function () {
    return {
        setConfiguration: api.setConfiguration,
        getConfiguration: api.getConfiguration,
        generateUserToken: api.generateUserToken, //POST /auth
        generateWorkspaceUserToken: api.generateWorkspaceUserToken, //POST /auth
        generateWorkspaceTokenWithAccessToken: api.generateWorkspaceTokenWithAccessToken, // POST /auth/workspaces
        generateWorkspaceTokenWithPassword: api.generateWorkspaceTokenWithPassword, // POST /auth/workspaces
        verifyUserToken: api.verifyUserToken, //GET /auth/verify
        revokeUserToken: api.revokeUserToken, //POST /auth/revoke
        setUserToken: api.setUserToken,
        setKeyToken: api.setKeyToken,
        setUserRefreshToken: api.setUserRefreshToken,
        isAuthenticated: api.isAuthenticated,
        refreshToken: api.refreshToken,
        auth: {
            resetPassword: passwordreset,
            setPassword: reset,
            sso: authsso,
            twoFactor: {
                enable: enableTwoFactor,
                disable: disableTwoFactor,
                verify: verifyTwoFactorCode,
                send: sendTwoFactorCode,
                methods: {
                    add: addTwoFactorMethod,
                    delete: deleteTwoFactorMethod,
                    getAll: getTwoFactorMethods,
                    getEnabled: getEnabledTwoFactorMethods,
                    select: slectTwoFactorMethod,
                    verify: verifyTwoFactorMethod,
                },
            },
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
                update: updateprofile, //PUT /users/profile
                notificationEmails: {
                    add: addNotificationEmail, // POST /users/profile/notification-emails
                    getAll: getNotificationEmails, // GET /users/profile/notification-emails
                    delete: deleteNotificationEmail // DELETE /users/profile/notification-emails/{notificationEmailId}
                }
            },
            roles: {
                add: addRoleToUser, //PUT /users/{userId}/roles/{roleName}
                delete: deleteRoleFromUser, //DELETE /users/{userId}/roles/{roleName}
                getAll: getallrolesbyuser //GET /users/{userId}/roles
            },
            sensoredge: {
                create: createsensoredgeuser, //POST /users/sensoredge/register
                completeRegistration: completesensoredgeregistration, //PUT /users/sensoredge/register/complete
                verify: verifysensoredgeuser, //PUT /users/sensoredge/verify
                getverify: getVerifySensorEdgeUser, //GET /users/sensoredge/verify/resend
            },
            invite: {
                create: inviteUser, // POST /users/invite
                update: changeInvitationEmailStatus, // PUT /users/invite
                getAll: getUsersInvitations, // GET /users/invite
                revoke: revokeUserInvitation, // PUT /users/invite/{invitationId}
                delete: deleteUserInvitation, // DELETE /users/invite/{invitationId}
            },
            workspaces: {
                getAll: getWorkspaceUsers, // GET /users/workspaces
                delete: deleteWorkspaceUser, // DELETE /users/workspaces
            },
            preferences: {
                get: getUserPreferences, // GET /users/preferences
                delete: deleteUserPreferences, // DELETE /users/preferences
                update: updateUserPreferences, // PUT /users/preferences
            },
        },
        organisation: {
            get: getorganisation, //GET /organisations/{organisationId}
            getAll: getorganisations, //GET /organisations
            update: updateorganisation, //PUT /organisations/{organisationId}
            create: createorganisation, //POST /organisations/{organisationId}
            delete: deleteorganisation, //DELETE /organisations/{organisationId
            createUpgradeRequest: createupgraderequest, // POST /organisations/{organisationId}/upgrade-requests
            manifest: {
                create: createmanifest, //POST /organisations/{organisationId}/deployment-manifests
                update: updatemanifest, //PUT /organisations/{organisationId}/deployment-manifests/{manifestId}
                delete: deletemanifest, //DELETE /organisations/{organisationId}/deployment-manifests/{manifestId}
                getAll: getmanifests, //GET /organisations/{organisationId}/deployment-manifests
                get: getsinglemanifest, //GET /organisations/{organisationId}/deployment-manifests/{manifestId}
                copyManifest: copymanifest, // PUT /organisations/{organisationId}/deployment-manifests/copy
                applyManifest: applymanifesttoonboardeddevice, // PUT /organisations/{organisationId}/deployment-manifests/{manifestId}/apply{deviceId}
                containers: {
                    add: createmanifestcontainer, //POST /organisations/{organisationId}/deployment-manifests/{manifestId}/containers/{containerId}
                    update: updatemanifestcontainer, //PUT /organisations/{organisationId}/deployment-manifests/{manifestId}/containers/{containerId}
                    delete: deletemanifestcontainer, //DELETE /organisations/{organisationId}/deployment-manifests/{manifestId}/containers/{containerId}
                    get: getmanifestcontainer, //GET /organisations/{organisationId}/deployment-manifests/{manifestId}/containers/{containerId},
                    getAll: getmanifestcontainers, //GET /organisations/{organisationId}/deployment-manifests/{manifestId}/containers
                },
                routes: {
                    add: createmanifestroute, //POST /organisations/{organisationId}/deployment-manifests/{manifestId}/routes
                    update: updatemanifestroute, //PUT /organisations/{organisationId}/deployment-manifests/{manifestId}/rotes/{routeId}
                    delete: deletemanifestroute, //DELETE /organisations/{organisationId}/deployment-manifests/{manifestId}//rotes/{routeId}
                    get: getmanifestroute, //GET /organisations/{organisationId}/deployment-manifests/{manifestId}/rotes/{routeId},
                    getAll: getmanifestroutes, //GET /organisations/{organisationId}/deployment-manifests/{manifestId}/routes
                },
            },
        },
        roles: {
            create: createrole, //POST /roles
            get: getrole, //GET /roles/{roleName}
            update: updaterole, //PUT /roles
            getAll: getroles, //GET /roles
            delete: deleterole, //DELETE /roles/{roleName}
            management: {
                getAllAvailable: getavailablepresetroles, // GET roles/management/available
            }
        },
        search: {
            devices: searchdevices, // GET /search/devices
            containers: searchcontainers, // GET /search/containers
            organisations: searchorganisations, // GET /search/organisations
            users: searchusers, // GET /search/users
            deploymentFilters: searchdeploymentFilters, //GET /search/deployment-filters
            deploymentJobs: searchdeploymentJobs, //GET /search/deployment-jobs
            deploymentRollouts: searchdeploymentRollouts, //GET /search/deployment-rollouts
            tenants: searchtenants, // GET /search/tenants
            keys: searchkeys, // GET /search/keys
            groups: searchgroups // GET /search/groups
        },
        devices: {
            create: createdevice, //POST /devices
            get: getdevice, //GET /devices/{deviceId}
            getWithKey: getdevicewithkey, // GET /devices/{deviceId}
            getChildren: getdevicechildren, //GET /devices/{deviceId}/children
            getAll: getdevices, //GET /devices
            getWithGeolocation: getdeviceswithgeolocation, //GET /devices/geolocation
            getStatusList: getstatuslist, //GET /devices/status
            methods: methods, // POST /devices/{deviceId}/methods
            update: updatedevice, //PUT /devices/{deviceId
            delete: deletedevice, //DELETE /devices/{deviceId}
            onBoard: onBoard, //POST /devices/sas/onboard
            onBoardWithKey: onBoardWithKey, //POST /devices/sas/onboard
            onboardSensorEdge: onBoardSensorEdge, //POST /devices/onboard
            offBoard: offBoard, //PUT /devices/offboard
            enableDisable: enableDisableDevice, //PUT /devices/{deviceId}/state
            offBoardConfirm: offBoardConfirm, // PUT /devices/offboard/confirm
            filter: filterdevices, // POST /devices/filter
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
                getSystemInstalled: getinstalledsystemcontainers, //GET /devices/{deviceId}/system-containers
                get: getdevicecontainer, // GET /devices/{deviceId}/containers/{containerId}
                getSystem: getdevicesystemcontainer, // GET /devices/{deviceId}/containers/{containerName}
                getDeployable: getdeployablecontainers, //GET /devices/{deviceId}/containers/deployable
                delete: deletedevicecontainer, //DELETE /devices/{deviceId}/containers/{containerId}
                create: createdevicecontainer, //POST /devices/{deviceId}/containers/{containerId}
                update: updatedevicecontainer, //PUT /devices/{deviceId}/containers/{containerId}
                properties: getcontainerproperties, //GET /devices/{deviceId}/containers/{containerId}/properties
                deleteAll: deletealldevicecontainers, //DELETE /devices/{deviceId}/containers/
                getdeployableversions: getdeployablecontainerversions, //GET /devices/{deviceId}/containers/{containerId}/deployable
                createList: createdevicecontainerlist, //POST /devices/{deviceId}/containers
                updateList: updatedevicecontainerlist, //PUT /devices/{deviceId}/containers
                deleteDeviceContainers: bulkdeletedevicecontainers, //DELETE /devices/{deviceId}/containers/bulk-delete
                getDevicesPlatforms: getdevicesplatforms, //GET /devices/containers/devices-platforms
                getSystemEnvs: getdevicesystemcontainersenv, //GET /devices/system-containers/allowed-env
                routes: {
                    getAll: getcontainerroutes, //GET /devices/{deviceId}/containers/routes
                    get: getsinglecontainerroute, //GET /devices/{deviceId}/containers/routes/{routeId}
                    create: createcontainerroute, //POST /devices/{deviceId}/containers/routes
                    update: updatecontainerroute, //PUT /devices/{deviceId}/containers/routes/{routeId}
                    delete: deletecontainerroute, //DELETE /devices/{deviceId}/containers/routes/{routeId}
                }
            },
            remote: {
                create: createremotedevice, //POST /devices/{deviceId}/remote
                status: getremotedevicestatus, //GET /devices/{deviceId}/remote
                credentials: getremotedevicecredentials //GET /devices/{deviceId}/remote/credentials
            },
            deploymentManifests: {
                check: checkdevicedeploymentmanifest, //GET /devices/{deviceId}/deploymentManifests/check
                deploy: deploydevicedeploymentmanifest, //PUT /devices/{deviceId}/deploymentManifests/deploy
            },
            messages: {
                getAll: getdevicemessages, //GET /devices/{deviceId}/messages
            },
            topics: {
                getAll: getdevicetopics, //GET /devices/{deviceId}/topics
            }
        },
        containers: {
            getAll: getcontainers, //GET /containers
            create: createcontainer, //POST /containers
            delete: deletecontainer, //DELETE /containers/{containerId}
            get: getcontainer, //GET /containers/{containerId}
            update: updatecontainer, //PUT /containers/{containerId}
            disable: disablecontainer, // POST /containers/{containerId}/disable
            versions: {
                createversion: createcontainerversion, //POST /containers/{containerId}/versions
                deleteversion: deletecontainerversion, //DELETE /containers/{containerId}/versions/{versionId}
                getversion: getcontainerversion, //GET /containers/{containerId}/versions/{versionId}
                getallversions: getallcontainerversion, //GET /containers/{containerId}/versions
                updateversion: updatecontainerversion, //PUT /containers/{containerId}/versions/{versionId}
                sharings: {
                    unshare: unshareversion, //DELETE /containers/versions/share/{sharingId}
                }
            },
            sharings: {
                share: sharecontainer, //PUT /containers/share
                unshare: unsharecontainer, //DELETE /containers/share/{sharingId}
                get: getsharing, //GET /containers/share{sharingId}
                getAll: getsharings, //GET /containers/{containerId}/sharings
                update: updatesharing, //PUT /containers/share/{sharingId}
            },
            envVariables: {
                getAll: getEnvVariables, //GET /containers/{containerId}/env-variables
            }
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
            createSensorEdgeKey: createsensoredgekey, //POST /keys/sensoredge
            getConnectionInfo: getKeyConnectionInfo, // GET /keys/dataservice/info
            getConnectionDevices: getKeyConnectionDevices, // POST /keys/dataservice/devices
        },
        edgeos: {
            get: getSingleEdgeos, //GET /edgeos/{edgeosId}
            getAll: getEdgeos, //GET /edgeos
            getPlatforms: getEdgeosPlatforms, //GET /edgeos/platforms
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
            test: testwebhook, //POST /webhooks/test
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
            getGroupItems: getgroupitemsforgroup, // GET /groups/{groupId}/items
            addDevice: adddevicetogroup, // PUT /groups/{groupId}/devices/{deviceId}
            removeDevice: removedevicefromgroup, // DELETE /groups/{groupId}/devices/{deviceId}
            addContainer: addcontainertogroup, // PUT /groups/{groupId}/containers/{containerId}
            removeContainer: removecontainerfromgroup, // DELETE /groups/{groupId}/containers/{containerId}
            getAll: getallgroups // GET /groups
        },
        dashboards: {
            create: createdashboard, // POST /dashboards
            update: updatedashboard, // PUT /dashboards/{dashboardId}
            get: getdashboard, // GET /dashboards
            getAll: getdashboards, // GET /dashboards/{dashboardId}
            delete: deletedashboard, // DELETE /dashboards/{dashboardId}
            panels: {
                create: createdashboardpanel, // POST /dashboards/{dashboardId}/panels
                update: updatedashboardpanel, // PUT /dashboards/{dashboardId}/panels/{panelId}
                get: getdashboardpanel, // GET /dashboards/{dashboardId}/panels/{panelId}
                getAll: getdashboardpanels, // GET /dashboards/{dashboardId}/panels
                delete: deletedashboardpanel, // DELETE /dashboards/{dashboardId}/panels/{panelId}
            },
            series: {
                create: createdashboardseries, // POST /dashboards/{dashboardId}/panels/{panelId}/series
                update: updatedashboardseries, // PUT /dashboards/{dashboardId}/panels/{panelId}/series/{seriesId}
                get: getpanelseries, // GET /dashboards/{dashboardId}/panels/{panelId}/series/{seriesId}
                getAll: getallpanelseries, // GET /dashboards/{dashboardId}/panels/{panelId}/series
                delete: deletedashboardseries // DELETE /dashboards/{dashboardId}/panels/{panelId}/series/{seriesId}
            }
        },
        deployments: {
            filters: {
                create: createFilter, //POST /deployments/filters
                getAll: getAllFilters, //GET /deployments/filters
                update: updateFilters, //PUT /deployments/filters/{filterId}
                delete: deleteFilter, //DELETE /deployments/filters/{filterId}
                get: getFilterById, //GET /deployments/filters/{filterId}
                execute: execute, //POST /deployments/filters/devices
            },
            jobs: {
                create: createJob, //POST /deployments/jobs
                update: updateJob, //PUT /deployments/jobs/{jobId}
                delete: deleteJob, //DELETE /deployments/jobs/{jobId}
                get: getJobById, //GET /deployments/jobs/{jobId}
                getAll: getAllJobs, //GET /deployments/jobs
                execute: executeJob, //POST /deployments/jobs/{jobId}/execute/{filterId}
                executeByGroup: executeJobByGroup, //POST /deployments/jobs/{jobId}/execute/groups/{groupId}
                executeCustomSelect: executeJobCustomSelect, //POST /deployments/jobs/{jobId}/execute/custom
                containers: {
                    add: addContainer, //POST /deployments/jobs/{jobId}/containers/{containerId}
                    update: updateContainer, //PUT /deployments/jobs/{jobId}/containers/{containerId}
                    delete: deleteContainer, //DELETE /deployments/jobs/{jobId}/containers/{containerId}
                    getAll: getAllContainers, //GET /deployments/jobs/{jobId}/containers
                    get: getContainerById, //GET /deployments/jobs/{jobId}/containers/{containerId}
                    methods: {
                        add: addMethod, //POST /deployments/jobs/{jobId}/containers/{containerId}/methods
                        update: updateMethod, //PUT /deployments/jobs/{jobId}/containers/{containerId}/methods/{methodId}
                        delete: deleteMethod, //DELETE /deployments/jobs/{jobId}/containers/{containerId}/methods/{methodId}
                        getAll: getAllMethods, //GET /deployments/jobs/{jobId}/containers/{containerId}/methods
                        get: getMethodById, //GET /deployments/jobs/{jobId}/containers/{containerId}/methods/{methodId}
                    },
                },
                routes: {
                    add: addRoute, //POST /deployments/jobs/{jobId}/routes
                    update: updateRoute, //PUT /deployments/jobs/{jobId}/routes/{routeId}
                    delete: deleteRoute, //DELETE /deployments/jobs/{jobId}/routes/{routerId}
                    getAll: getAllRoutes, //GET /deployments/jobs/{jobId}/routes
                    get: getRouteById, //GET /deployments/jobs/{jobId}/routes/{routeId}
                },
                os: {
                    add: addOs, //POST /deployments/jobs/{jobId}/edgeos
                    delete: deleteOs, //DELETE /deployments/jobs/{jobId}/edgeos/{platform}
                    getAll: getAllOs, //GET /deployments/jobs/{jobId}/edgeos
                    get: getOsByPlatform, //GET /deployments/jobs/{jobId}/edgeos/{platform}
                },
                schedules: {
                    create: createJobSchedule, // POST /deployments/jobs/schedules
                    update: updateJobSchedule, // PUT /deployments/jobs/schedules/{scheduleId}
                    delete: deleteJobSchedule, // DELETE /deployments/jobs/schedules/{scheduleId}
                    get: getJobSchedule, // GET /deployments/jobs/schedules/{scheduleId}
                    getAll: getAllJobSchedules, // GET /deployments/jobs/schedules
                }
            },
            rollouts: {
                getAll: getAllRolloutsByOrganisationId, //GET /deployments/rollouts?jobId={jobId}
                get: getRolloutById, //GET /deployments/rollouts/{rolloutId}
                pause: pauseJob, //PUT /deployments/rollouts/{rolloutId}/pause
                start: startJob, //PUT /deployments/rollouts/{rolloutId}/start
                getRollbacks: getRollbacks, //PUT /deployments/rollouts/{rolloutId}/rollbacks/{rollbackId}
                rollback: rollbackJob, //PUT /deployments/rollouts/{rolloutId}/rollback
                delete: deleteRollout, //DELETE /deployments/rollouts/{rolloutId}
            },
        },
        softwaremodules: {
            modules: {
                create: createsoftwaremodules, // POST /rest/v1/softwaremodules
                get: getsoftwaremodule, // GET /rest/v1/softwaremodules/{softwareModuleId}
                delete: deletesoftwaremodule, // DELETE /rest/v1/softwaremodules/{softwareModuleId}
            },
            artifacts: {
                create: createsoftwaremoduleartifact, // POST /rest/v1/softwaremodules/{softwareModuleId}/artifacts
                get: getsoftwaremoduleartifact, //GET /rest/v1/softwaremodules/{softwareModuleId}/artifacts/{artifactId}
            },
            orders: {
                getAll: getorders, // GET /v1/app-store/containers/orders
                get: getorder // GET /v1/app-store/containers/orders/{orderId}
            }
        },
        metrics: {
            query: {
                get: getquery, // GET /metrics/queries/{queryId}
                getAll: getqueries, // GET /metrics/queries
                create: createquery, // POST /metrics
                update: updatequery, // PUT /metrics/queries/{queryId}
                delete: deletequery, // DELETE /metrics/queries/{queryId}
                execute: executequery, // POST /metrics/execute
                executeSaved: executesavedquery, // GET /metrics/execute/{queryId}
            },
            requestdata: {
                get: getrequest, // GET /metrics/request-data/{requestId}
            },
            fields: {
                get: getfields, // GET /metrics/fields
            },
        },
        bugreports: {
            send: sendbugreport // POST /bug-reports
        },
        announcements: {
            getAll: getannouncements, // GET /announcements
            markAsRead: markannouncement, // PUT /announcements/{announcementId}
        },
        api: {
            getInformation: getApiInformation, // GET /info
        },
        documentation: {
            getAll: getarticles, // GET /documentations
            get: getarticle, // GET /documentations/{articleId}
            versions: {
                get: getarticleversion, // GET /documentations/{articleId}/versions{versionId}
            }
        },
        resources: {
            get: getresources, // GET /resources
        },
        sessions: {
            update: destroysession, // PUT /sessions/{sessionId}
            updateAll: destroysessions, // PUT /sessions/closeAll
            get: getsession, // GET /sessions/{sessionId}
            getAll: getsessions, // GET /sessions
            getConnectionInfo: getSessionConnectionInfo, // GET /sessions/dataservice/info
            getConnectionDevices: getSessionConnectionDevices, // POST /sessions/dataservice/devices
        },
        blocklists: {
            create: createblocklist, // POST /blocklists
            delete: deleteblocklist, // DELETE /blocklists/{blocklistId}
            update: updateblocklist, // PUT /blocklists/{blocklistId}
            get: getblocklist, // GET /blocklists/{blocklistId}
            getAll: getblocklists, // GET /blocklists
        },
        pages: {
            get: getpages, // GET /pages
            templates: {
                get: gettemplate, // GET /pages/{path}/templates/{templateId}
            },
        },
    };
};
