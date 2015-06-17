var express = require('express');
var router = express.Router();
var User = require('../models/User');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/auth', function (req, res, next) {
    console.log(req.connection.remoteAddress);
    User.verify(req.query, function (err, result) {
        if (err) return next(err);
        res.json(result);
    });
});
module.exports = router;
