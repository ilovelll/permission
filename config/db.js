/**
 * Created by THINK on 2015/6/17.
 */
var redis = require('redis');
var options = {
    auth_pass: 'foobared'
};
var client = redis.createClient(6379, '127.0.0.1', options);
exports.client = client;