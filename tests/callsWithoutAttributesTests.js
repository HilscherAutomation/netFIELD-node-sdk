/**********************************************************************
 * Copyright (c) 2019 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/

const edgeSDK = require('../');
const _get = require('lodash').get;
jest.mock('../lib/client.js');

const calls = [
    ["users.profile.get"],
    ["modules.getAllModules"],
    ["tenants.getAll"],
];


describe("Empty Call Signature Test suit", function () {
    test.each(calls)(
        'sdk.%s works with promises',
        async functionPath => {
            expect.assertions(1)
            const sdkFunction = _get(edgeSDK, functionPath);
            const result = await sdkFunction();
            expect(typeof result).toBe('object');
        },
    );

    test.each(calls)(
        'sdk.%s works with callbacks',
        async functionPath => {
            const callback = jest.fn()
            const sdkFunction = _get(edgeSDK, functionPath);
            sdkFunction(callback);
            expect(callback).toBeCalled();
        },
    );
});