/**********************************************************************
 * Copyright (c) 2022 Hilscher Gesellschaft fuer Systemautomation mbH
 * See LICENSE file
**********************************************************************/
var get = exports.get = function get(authStrategy, path, callback) {
    if (callback) {
        return callback(null, {});
    }
    return new Promise((resolve, reject) => {
        process.nextTick(() => {
            resolve({});
        });
    })
};

var post = exports.post = function post(authStrategy, path, params, callback) {
    if (callback) {
        return callback(null, {});
    }
    return new Promise((resolve, reject) => {
        process.nextTick(() => {
            resolve({});
        });
    })
};

var sendForm = exports.sendForm = function sendForm(authStrategy, path, params, method, callback) {
    if (callback) {
        return callback(null, {});
    }
    return new Promise((resolve, reject) => {
        process.nextTick(() => {
            resolve({});
        });
    })
};

var put = exports.put = function put(authStrategy, path, params, callback) {
    if (callback) {
        return callback(null, {});
    }
    return new Promise((resolve, reject) => {
        process.nextTick(() => {
            resolve({});
        });
    })
};

var del = exports.delete = function del(authStrategy, path, params, callback) {
    if (callback) {
        return callback(null, {});
    }
    return new Promise((resolve, reject) => {
        process.nextTick(() => {
            resolve({});
        });
    })
};