/**
 * Created by THINK on 2015/6/17.
 */
var jwt = require('jsonwebtoken');

module.exports = function(req, res, next) {
    //检查post的信息或者url查询参数或者头信息
    var token = req.body.token || req.query.token || req.headers['x-access-token'];
    if (token) {
        jwt.verify(token, 'secret_key', function(err, decoded) {
            if (err) {
                return res.json({ success: false, msg: 'token信息错误.' });
            } else {
                // 如果没问题就把解码后的信息保存到请求中，供后面的路由使用
                req.user = decoded;
                console.dir(req.user);
                next();
            }
        });
    } else {
        return res.status(403).send({
            success: false,
            msg: '没有提供token！'
        });
    }
};