var express = require('express');
var router = express.Router();
var User=  require('../../models/User');
router.post('/', function(req,res,next){
    console.log(req.body);
    User.addUser(req.body,function(err){
        //if(err) throw err
        if(err){
            throw err
            res.json(err);
        }else{
            res.json(req.body);
        }
    });
});

module.exports=router;