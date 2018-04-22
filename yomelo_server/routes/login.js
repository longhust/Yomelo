
var express = require('express');
var router = express.Router();
var User = require('../models/User')
var connection = require('../databaseConfig/dbConnection')
/* GET home page. */
router.post('/', function (req, res, next) {
    var user = {
        "email": req.body.email,
        "password": req.body.password,
        "username": req.body.username,
    }

    User.getUser(user, function (error, results, fields) {
        if (error) {
            console.log("error ocurred", error);
            res.send({
                "code": 400,
                "failed": "error ocurred"
            })
        } else {
            //console.log('The solution is: ', results);
            if (results.length > 0) {
                if (results[0].password == user.password) {
                    res.send({
                        "code": 200,
                        "success": "login sucessfull",
                        "user":results[0],
                    });
                } else {
                    res.send({
                        "code": 202,
                        "success": "Email and password does not match"
                    });
                }
            }
            else {
                res.send({
                    "code": 204,
                    "success": "Email or Username does not exits"
                });
            }
        };
    })
})
module.exports = router;
