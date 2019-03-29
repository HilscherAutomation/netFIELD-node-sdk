/**********************************************************************
 * Copyright (c) 2019 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/

const edgeSDK = require('../');
const _get = require('lodash').get;
jest.mock('../lib/client.js');

const suggestInvalid = {
    organisationId: 1,
    search: "valid",
    invalidAttribute: "invalid"
};

const suggestInvalidTwo = {
    organisationId: 1,
    search: 1,
    invalidAttribute: "invalid"
};

const calls = [
    ["devices.snapshots.delete", [1, 1]],
    ["devices.snapshots.get", [1, 1]],
    ["devices.customFields.delete", [1, 1]],
    ["devices.notifications.delete", [1, 1]],
    ["devices.deleteTopologyLayout", [1, 1]],
    ["devices.customFields.get", [1, 1]],
    ["devices.topologyLayout", [1, 1]],
    ["devices.create", ["wrong"]],
    ["devices.onBoard", ["wrong"]],
    ["devices.notifications.deleteAll", [1]],
    ["devices.delete", [1]],
    ["devices.get", [1]],
    ["devices.network", [1]],
    ["devices.offBoard", [1]],
    ["devices.create", ["w"]],
    ["devices.getAll", [{}, {}, {}, {}, {}]],
    ["devices.getStatusList", [[1, 1]]],
    ["devices.methods", [1, 1]],
    ["devices.update", [1, 1]],
    ["devices.onBoard", [1]],
    ["devices.customFields.create", [1, 1]],
    ["devices.customFields.update", [1, 1, 1]],
    ["devices.snapshots.getAll", ["w", 1, "w", "w", "w"]],
    ["devices.snapshots.upload", [1, 1]],
    ["devices.telemetry.get", [{}, {}]],
    ["devices.topology", [{}, {}]],
    ["devices.topology", ["v", "v"]],
    ["devices.createTopologyLayout", [1, 1]],
    ["devices.topologyLayouts", ["w", 1, "w", "w", "w"]],
    ["devices.updateTopologyLayout", [1, 1, 1]],
    ["devices.notifications.create", [1, 1]],
    ["devices.notifications.getAll", ["w", 1, "w", "w", "w"]],
    ["devices.customFields.getAll", ["w", 1, "w", "w", "w"]],
    ["devices.getOpcUa", [{}, {}, {}, {}]],

    ["modules.deleteDeviceModule", [1, 1]],
    ["modules.routes.delete", [1, 1]],
    ["modules.properties", [1, 1]],
    ["modules.create", ["wrong"]],
    ["modules.delete", [1]],
    ["modules.deviceModules", [1]],
    ["modules.get", [1]],
    ["modules.routes.get", [1]],
    ["modules.createDeviceModule", [1, 1, 1]],
    ["modules.update", [1, 1, 1]],
    ["modules.update", [1, undefined, 1]],
    ["modules.routes.create", [1, 1]],
    ["modules.routes.update", [1, 1, 1]],

    ["users.createself", ["wrong"]],
    ["users.create", ["wrong"]],
    ["users.profile.update", ["wrong"]],
    ["users.verifyusers", ["wrong"]],
    ["users.getAll", [{}, {}, {}, {}, {}]],
    ["users.get", ["wrong"]],
    ["users.getverify", [1]],
    ["users.getverify", [undefined]],
    ["users.update", ["wrong", "wrong"]],
    ["users.delete", ["wrong"]],
    ["users.roles.add", [{}, {}]],
    ["users.roles.delete", [{}, {}]],
    ["users.roles.getAll", [{}, {}, {}, {}, {}]],
    ["users.suggest", [suggestInvalid]],
    ["users.suggest", [suggestInvalidTwo]],

    ["keys.create", ["wrong"]],
    ["keys.delete", [1]],
    ["keys.get", [1]],
    ["keys.update", [1, 1]],
    ["keys.getAll", [{}, {}, {}, {}, {}]],

    ["auth.resetPassword", [1]],
    ["auth.setPassword", [1]],

    ["organisation.get", ["w", "w"]],
    ["organisation.get", ["w"]],
    ["organisation.update", ["w", "w"]],
    ["organisation.create", ["w", "w"]],
    ["organisation.delete", ["w"]],

    ["roles.create", ["w", "w"]],
    ["roles.get", [{}, {}]],
    ["roles.update", ["w", {}, 1]],
    ["roles.getAll", [{}, {}, {}, {}, {}]],
    ["roles.delete", [{}, {}]],

    ["permissions.devices", [[1, 1, 1]]],
    ["permissions.modules", [[1, 1, 1]]],
    ["permissions.organisations", [["v", "v"]]],
    ["permissions.users", [["v", "v"]]],
    ["permissions.roles", [1]],
    ["permissions.tenants", [["v", "v"]]],
    ["permissions.keys", [[1, 1, 1]]],
    ["permissions.edgeos", [[1, 1, 1]]],

    ["permissions.devices", [1]],
    ["permissions.modules", [1]],
    ["permissions.organisations", [1]],
    ["permissions.users", [1]],
    ["permissions.tenants", [1]],
    ["permissions.keys", [1]],
    ["permissions.edgeos", [1]],

    ["edgeos.getAll", [{}, {}, {}, {}, {}]],
    ["edgeos.create", [1]],
    ["edgeos.update", [1, 1]],
    ["edgeos.get", [1]],
    ["edgeos.delete", [1]],

    ["tenants.create", ["wrong"]],
    ["tenants.update", ["w", "w"]],
    ["tenants.get", ["w"]],
    ["tenants.getAll", [{}, {}, {}, {}]],
    ["tenants.delete", ["w"]],
];

describe("Incorrect Input Suite", function () {
    test.each(calls)(
        'sdk.%s with input: %s rejects promise on wrong input',
        async (functionPath, invalidSignature) => {
            expect.assertions(1)
            const sdkFunction = _get(edgeSDK, functionPath);
            return expect(sdkFunction(...invalidSignature)).rejects.toThrow();
        },
    );

    test.each(calls)(
        'sdk.%s with input: %s returns an error in the callback on wrong input',
        async (functionPath, invalidSignature) => {
            const callback = jest.fn()
            const sdkFunction = _get(edgeSDK, functionPath);
            sdkFunction(...invalidSignature, callback);
            expect(callback).toBeCalled();
            expect(typeof callback.mock.calls[0][0]).toBe('object');
            expect(callback.mock.calls[0][1]).toBe(null);
        },
    );
});