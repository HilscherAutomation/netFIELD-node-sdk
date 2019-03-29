/**********************************************************************
 * Copyright (c) 2019 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/

const edgeSDK = require('..');
const _get = require('lodash').get;
jest.mock('../lib/client.js');

const suggestValid = {
    organisationId: 1,
    search: "valid",
};

const suggestValidTwo = {
    search: "valid",
};

const calls = [
    ["devices.snapshots.delete", ["valid", "valid"]],
    ["devices.snapshots.get", ["valid", "valid"]],
    ["devices.customFields.delete", ["valid", "valid"]],
    ["devices.notifications.delete", ["valid", "valid"]],
    ["devices.deleteTopologyLayout", ["valid", "valid"]],
    ["devices.customFields.get", ["valid", "valid"]],
    ["devices.topologyLayout", ["valid", "valid"]],
    ["devices.create", [{}]],
    ["devices.onBoard", [{}]],
    ["devices.notifications.deleteAll", ["valid"]],
    ["devices.delete", ["valid"]],
    ["devices.get", ["valid"]],
    ["devices.network", ["valid"]],
    ["devices.offBoard", ["valid"]],
    ["devices.create", [{}]],
    ["devices.getAll", [1]],
    ["devices.getAll", [1, 1]],
    ["devices.getAll", [1, 1, 1]],
    ["devices.getAll", [1, 1, 1, "name"]],
    ["devices.getAll", [1, 1, 1, "name", "asc"]],
    ["devices.getStatusList", [["w", "w"]]],
    ["devices.methods", ["w", {}]],
    ["devices.update", ["w", {}]],
    ["devices.onBoard", [{}]],
    ["devices.customFields.create", ["w", {}]],
    ["devices.customFields.update", ["v", "v", {}]],
    ["devices.snapshots.getAll", ["w"]],
    ["devices.snapshots.getAll", ["w", 1]],
    ["devices.snapshots.getAll", ["w", 1, 1]],
    ["devices.snapshots.getAll", ["w", 1, 1, "w"]],
    ["devices.snapshots.getAll", ["w", 1, 1, "w", "w"]],
    ["devices.snapshots.upload", ["v", {}]],
    ["devices.telemetry.get", ["v", 1]],
    ["devices.telemetry.get", ["v", undefined]],
    ["devices.topology", ["v", 1]],
    ["devices.topology", ["v", undefined]],
    ["devices.createTopologyLayout", ["w", {}]],
    ["devices.topologyLayouts", ["w"]],
    ["devices.topologyLayouts", ["w", 1]],
    ["devices.topologyLayouts", ["w", 1, 1]],
    ["devices.topologyLayouts", ["w", 1, 1, "w"]],
    ["devices.topologyLayouts", ["w", 1, 1, "w", "w"]],
    ["devices.updateTopologyLayout", ["v", "v", {}]],
    ["devices.notifications.create", ["v", {}]],
    ["devices.notifications.getAll", ["w"]],
    ["devices.notifications.getAll", ["w", 1,]],
    ["devices.notifications.getAll", ["w", 1, 1,]],
    ["devices.notifications.getAll", ["w", 1, 1, "w",]],
    ["devices.notifications.getAll", ["w", 1, 1, "w", "w"]],
    ["devices.customFields.getAll", ["w"]],
    ["devices.customFields.getAll", ["w", 1]],
    ["devices.customFields.getAll", ["w", 1, 1]],
    ["devices.customFields.getAll", ["w", 1, 1, "w"]],
    ["devices.customFields.getAll", ["w", 1, 1, "w", "w"]],
    ["devices.getOpcUa", ["v"]],
    ["devices.getOpcUa", ["v", "v"]],
    ["devices.getOpcUa", ["v", "v", 1]],
    ["devices.getOpcUa", ["v", "v", 1, 1]],

    ["modules.deleteDeviceModule", ["valid", "valid"]],
    ["modules.routes.delete", ["valid", "valid"]],
    ["modules.properties", ["valid", "valid"]],
    ["modules.create", [{}]],
    ["modules.delete", ["valid"]],
    ["modules.deviceModules", ["valid"]],
    ["modules.get", ["valid"]],
    ["modules.routes.get", ["valid"]],
    ["modules.createDeviceModule", ["v", "v", {}]],
    ["modules.update", ["v", "v", {}]],
    ["modules.update", ["v", undefined, {}]],
    ["modules.routes.create", ["v", {}]],
    ["modules.routes.update", ["v", "v", {}]],


    ["users.createself", [{}]],
    ["users.create", [{}]],
    ["users.profile.update", [{}]],
    ["users.verifyusers", [{}]],
    ["users.getAll", [1]],
    ["users.getAll", [1, 1]],
    ["users.getAll", [1, 1, 1]],
    ["users.getAll", [1, 1, 1, "name"]],
    ["users.getAll", [1, 1, 1, "name", "asc"]],
    ["users.get", [1]],
    ["users.getverify", ["valid"]],
    ["users.update", [1, {}]],
    ["users.delete", [1]],
    ["users.roles.add", [1, "valid"]],
    ["users.roles.delete", [1, "valid"]],
    ["users.roles.getAll", [1]],
    ["users.roles.getAll", [1, 1]],
    ["users.roles.getAll", [1, 1, 1]],
    ["users.roles.getAll", [1, 1, 1, "name"]],
    ["users.roles.getAll", [1, 1, 1, "name", "asc"]],
    ["users.suggest", [suggestValid]],
    ["users.suggest", [suggestValidTwo]],

    ["keys.create", [{}]],
    ["keys.delete", ["valid"]],
    ["keys.get", ["valid"]],
    ["keys.update", ["v", {}]],
    ["keys.getAll", [1]],
    ["keys.getAll", [1, 1]],
    ["keys.getAll", [1, 1, 1]],
    ["keys.getAll", [1, 1, 1, "v",]],
    ["keys.getAll", [1, 1, 1, "v", "v"]],

    ["auth.resetPassword", ["valid"]],
    ["auth.setPassword", [{}]],

    ["organisation.get", [1, 1]],
    ["organisation.get", [1]],
    ["organisation.update", [1, {}]],
    ["organisation.create", [1, {}]],
    ["organisation.delete", [1]],

    ["roles.create", [1, {}]],
    ["roles.get", [1, "v"]],
    ["roles.update", [1, "v", {}]],
    ["roles.getAll", [1]],
    ["roles.getAll", [1, 1]],
    ["roles.getAll", [1, 1, 1]],
    ["roles.getAll", [1, 1, 1, "name"]],
    ["roles.getAll", [1, 1, 1, "name", "asc"]],
    ["roles.delete", [1, "v"]],

    ["permissions.devices", [["v", "v"]]],
    ["permissions.modules", [["v", "v"]]],
    ["permissions.organisations", [[1, 1, 1]]],
    ["permissions.users", [[1, 1, 1]]],
    ["permissions.roles", [{}]],
    ["permissions.tenants", [[1, 1, 1]]],
    ["permissions.keys", [["v", "v"]]],
    ["permissions.edgeos", [["v", "v"]]],

    ["edgeos.getAll", [1]],
    ["edgeos.getAll", [1, 1]],
    ["edgeos.getAll", [1, 1, "v"]],
    ["edgeos.getAll", [1, 1, "v", "v"]],
    ["edgeos.getAll", [1, 1, "v", "v", "v"]],
    ["edgeos.getAll", [undefined]],
    ["edgeos.create", [{}]],
    ["edgeos.update", ["v", {}]],
    ["edgeos.get", ["valid"]],
    ["edgeos.delete", ["valid"]],

    ["tenants.create", [{}]],
    ["tenants.update", [1, {}]],
    ["tenants.get", [1]],
    ["tenants.getAll", [1]],
    ["tenants.getAll", [1, 1]],
    ["tenants.getAll", [1, 1, "v"]],
    ["tenants.getAll", [1, 1, "v", "v"]],
    ["tenants.delete", [1]],
];

describe("Correct Input Suite", function () {
    test.each(calls)(
        'sdk.%s with input %s works with promises',
        async (functionPath, validSignature) => {
            expect.assertions(1)
            const sdkFunction = _get(edgeSDK, functionPath);
            const result = await sdkFunction(...validSignature);
            expect(typeof result).toBe('object');
        },
    );

    test.each(calls)(
        'sdk.%s with input %s works with callbacks',
        async (functionPath, validSignature) => {
            const callback = jest.fn()
            const sdkFunction = _get(edgeSDK, functionPath);
            sdkFunction(...validSignature, callback);
            expect(callback).toBeCalled();
        },
    );
});