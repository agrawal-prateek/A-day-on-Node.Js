/**
 * Created by prateek on 11/29/17.
 */

var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {

    var title = req.query.title;
    var url = req.query.url;
    var description = req.query.description;
    var totalCards = title.length;

    res.render('cards', {
        'title': title,
        'url': url,
        'description': description,
        'totalCards': totalCards
    });
});

module.exports = router;
