var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
 // res.render('index', { title: 'Azure' });
 var model = {
title: 'Azure',
message : process.env.message || " This is development environment"
 };
});

module.exports = router;
