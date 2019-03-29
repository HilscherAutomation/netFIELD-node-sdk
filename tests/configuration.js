/**********************************************************************
 * Copyright (c) 2019 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
"use strict";

let api = require('../lib/api');

describe('Configuration Test Suite: SDK...', function () {
    it('throws an error when configured with incorrect parameter types', function (done) {
        function fn() { api.setConfiguration("We usally need an object here"); }
        expect
        expect(fn).toThrow();
        done();
    });

    it('throws an error when configured with missing parameters', function (done) {
        function fn() { api.setConfiguration(); }
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
        api.setConfiguration(options);

        var configured = api.getConfiguration();
        expect(configured.clientId).toEqual(id);
        expect(configured.clientPassword).toEqual(password);
        expect(configured.custom).toEqual(customParameter);
        done();
    });

    it('returns configuration object', function (done) {
        api.setConfiguration({ clientId: 'test', clientPassword: 'test' });

        var config = api.getConfiguration();
        expect(typeof config).toBe('object');
        expect(config).toHaveProperty('clientId');
        expect(config).toHaveProperty('clientPassword');
        expect(config).toHaveProperty('schema');
        expect(config).toHaveProperty('host');
        done();
    });

    it('does not throw an "unconfigured" error after adding attributes after initial configuration', function(done) {
        var customValue = "custom attribute";
        function fn() { api.setConfiguration({ my: customValue }); }
        expect(fn).not.toThrow();

        var newConfig = api.getConfiguration();
        expect(newConfig.my).not.toBe('undefined');
        expect(newConfig.my).toEqual(customValue)
        done();
    });
});
