var mysql = require('mysql');
var db_config = require('../config/db.json');
var global_config = require('../config/global_config.json');
var debug = require('debug')("permission");

// 创建mysql数据库链接池
var pool = mysql.createPool(db_config.mysql);

// 数据库链接池每次新增链接时执行
pool.on('connection', function(connection) {
    debug('[MYSQL - 新增数据库链接] 链接ID为：' + connection.threadId);
});

/**
 * <b>描述：</b>自定义SQL执行函数，统一处理异常信息
 *
 * @param option db.query方法接受的第一个参数
 * @param args db.query方法接受的第二个参数
 * @param callback SQL执行成功后执行的回调函数
 * */
pool.execSQL = function(option, args, callback) {
    pool.query(option, args, function(err, rows, fields) {
        debug('[MYSQL - 输出SQL] ' + this.sql);
        callback(err, rows);
    });
};

module.exports = pool;