var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {

    var firstName = req.query.first_name;
    var lastName = req.query.last_name;
    var email = req.query.email;
    var course = req.query.course;
    var branch = req.query.branch;
    var dob = req.query.dob;
    var mobile = req.query.mobile;
    var gender = req.query.gender;

    console.log(firstName, lastName, email, course, branch, dob, mobile, gender);
    res.render('profile', {
        firstName: firstName,
        lastName: lastName,
        email: email,
        course: course,
        branch: branch,
        dob: dob,
        mobile: mobile,
        gender: gender
    });
});

module.exports = router;
