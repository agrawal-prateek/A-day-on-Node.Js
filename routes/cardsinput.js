/**
 * Created by prateek on 11/30/17.
 */
var express = require('express');
var router = express.Router();

/* GET cards input page. */
router.get('/', function(req, res, next) {
    res.render('cardsinput', {});
});

module.exports = router;

