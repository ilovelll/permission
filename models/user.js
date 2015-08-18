/**
 * Created by THINK on 2015/6/17.
 */
var db = require('../config/db.json').redis;
var redis = require('redis');
var client = redis.createClient(db.port, db.host, db.options);
var jwt = require('jsonwebtoken');
module.exports = {
    getUser: function (id) {
        id = parseInt(id).toString(2);
        console.log(id);
        return id;
    },
    verify: function (params, callback) {
        var id = parseInt(params.id);
        client.hgetall(id, function (err, result) {
            if(!result) return callback("userNE");
            if(result.pass===params.pass) {
                console.log(result)
                var token = jwt.sign(result, 'secret_key', {
                    'expiresInMinutes': 1440*10 // 设置过期时间:10天
                });
                callback(null, {success:true, token:token})
            } else {
                callback("passIC")
            }
        })
    }

};
