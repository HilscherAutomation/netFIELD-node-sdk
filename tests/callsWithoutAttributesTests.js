/**********************************************************************
 * Copyright (c) 2021 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/

const edgeSDK = require('../src/index');
const _get = require('lodash').get;
jest.mock('../src/client.js');

const calls = [
    ["users.profile.get"],
    ["containers.getAll"],
    ["organisation.getAll"],
    ["tenants.getAll"],
    ["keys.getpermissions"],
];

describe("Empty Call Signature Test suit", function () {
    test.each(calls)(
        'sdk.%s works with promises',
        async functionPath => {
            expect.assertions(1);
            const sdkFunction = _get(edgeSDK, functionPath);
            const result = await sdkFunction();
            expect(typeof result).toBe('object');
        },
    );

    test.each(calls)(
        'sdk.%s works with callbacks',
        async functionPath => {
            const callback = jest.fn();
            const sdkFunction = _get(edgeSDK, functionPath);
            sdkFunction(callback);
            expect(callback).toBeCalled();
        },
    );
});
