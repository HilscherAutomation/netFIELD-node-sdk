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
