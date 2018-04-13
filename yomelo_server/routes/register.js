var express = require('express');
var router = express.Router();
var connection = require('../databaseConfig/dbConnection')
var User = require('../models/User')

//api register
router.post('/', function (req, res) {
    // console.log("req",req.body);
    var today = new Date();
    var user = {
        "name": req.body.name,
        "username": req.body.username,
        "email": req.body.email,
        "phone": req.body.phone,
        "password": req.body.password,
        "created_at": today,
        "type": req.body.type,
        "token": '123456',
        "avatar": 'avatar.png',
    }
    User.checkEmailExist(user.email, function (err, results, fields) {
        if (err) {
            //console.log("error ocurred", error);
            res.send({
                "code": 400,
                "failed": "error ocurred"
            })
        } else {
            if (results.length > 0) {
                console.log(results)
                res.send({
                    "code": 301,
                    "failed": "email is existed"
                })
            } else {
                User.checkUserNameExist(user.username, function (err, results, fields) {
                    if (err) {
                        res.send({
                            "code": 400,
                            "failed": "error ocurred"
                        })
                    } else {
                        console.log(results)
                        if (results.length > 0) {
                            res.send({
                                "code": 302,
                                "failed": "Username is existed"
                            })
                        } else {
                            User.addUser(user, function (error, results, fields) {
                                if (error) {
                                    console.log("error ocurred", error);
                                    res.status(400).send({
                                        "code": 400,
                                        "failed": "error ocurred"
                                    })
                                } else {
                                    // console.log('The solution is: ', results);
                                    res.status(200).json({
                                        "code": 200,
                                        "success": "user registered sucessfully"
                                    });
                                }
                            });
                        }
                    }
                })
            }
        }
    })
})

//api verify
router.post('/verify', function (req, res) {
    var user = {
        "email": req.body.email,
        "password": req.body.password,
        "token": req.body.token
    }
    console.log(user)
    User.verifyAccount(user, function (error, results, fields) {
        if (error) {
            console.log("error occured", error)
            res.status(404).send({
                "code": 404,
                "failed": "error occured"
            })
        } else {
            if (results.length > 0) {
                if (results[0].is_actived == 1) {
                    res.status(300).send({
                        "code": 300,
                        "failed": "account is actived"
                    })
                }
                if (results[0].token == user.token) {
                    User.updateActiveAccount(user.email, function (err, results) {
                        if (err) {
                            console.log("error occured")
                            res.status(404).send({
                                "code": 404,
                                "failed": "error occured"
                            })
                        } else {
                            res.send({
                                "code": 200,
                                "success": "verify success"
                            })
                        }
                    })
                } else {
                    res.status(204).send({
                        "code": 204,
                        "success": "token does not match"
                    })
                }
            } else {
                res.status(204).send({
                    "code": 204,
                    "success": "email does not exit"
                })
            }
        }
    })
})

module.exports = router;
