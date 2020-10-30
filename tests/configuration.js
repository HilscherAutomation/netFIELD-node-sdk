/**********************************************************************
 * Copyright (c) 2019 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
"use strict";

let edgeSDK = require('../src/index');

describe('Configuration Test Suite: SDK...', function () {
    it('throws an error when configured with incorrect parameter types', function (done) {
        function fn() { edgeSDK.setConfiguration("We usually need an object here"); }
        expect
        expect(fn).toThrow();
        done();
    });

    it('throws an error when configured with missing parameters', function (done) {
        function fn() { edgeSDK.setConfiguration(); }
        expect(fn).toThrow();
        done();
    });

    it('merges parameter object with configuration', function (done) {
        var id = 'testClientId';
        var password = 'testClientPassword';
        var customParameter = 'testCustomParameter';
        var options = {
            clientId: id,
            clientPassword: password,
            custom: customParameter,
        }
        edgeSDK.setConfiguration(options);

        var configured = edgeSDK.getConfiguration();
        expect(configured.clientId).toEqual(id);
        expect(configured.clientPassword).toEqual(password);
        expect(configured.custom).toEqual(customParameter);
        done();
    });

    it('returns configuration object', function (done) {
        edgeSDK.setConfiguration({ clientId: 'test', clientPassword: 'test' });

        var config = edgeSDK.getConfiguration();
        expect(typeof config).toBe('object');
        expect(config).toHaveProperty('clientId');
        expect(config).toHaveProperty('clientPassword');
        expect(config).toHaveProperty('schema');
        expect(config).toHaveProperty('host');
        done();
    });

    it('does not throw an "unconfigured" error after adding attributes after initial configuration', function(done) {
        var customValue = "custom attribute";
        function fn() { edgeSDK.setConfiguration({ my: customValue }); }
        expect(fn).not.toThrow();

        var newConfig = edgeSDK.getConfiguration();
        expect(newConfig.my).not.toBe('undefined');
        expect(newConfig.my).toEqual(customValue)
        done();
    });
});
