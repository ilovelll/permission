/**
 * Created by THINK on 2015/6/18.
 */
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/list', function(req, res, next) {
    res.send('respond with a resource');
});

module.exports = router;