/**
 * Created by THINK on 2015/6/17.
 */
var error_message = require('../config/error_message');
var debug = require('debug')('permission');

// 格式化错误输出
exports.format_error = function(error) {
    debug(error);
    return getMsg(error.toString()) || '程序异常';
};

function getMsg(source) {
    for(var i in error_message.error_index) {
        if (source.indexOf(error_message.error_index[i]) != -1) {
            return error_message[error_message.error_index[i]];
        }
    }
}