var db = require('../databaseConfig/dbConnection');

var User = {

    //register

    checkEmailExist:function(email,callback){
        const sql='SELECT email FROM users WHERE email=?';
        return db.query(sql,[email], callback)

    },
    checkUserNameExist:function(username,callback){
        const sql='SELECT username FROM users WHERE username=?';
        return db.query(sql,[username],callback);
    },
    addUser: function (user, callback) {
        const sql='INSERT INTO users SET ?'
        return db.query(sql,user,callback);
    },

    // verify
    verifyAccount:function(user, callback){
        const sql='SELECT token, is_actived FROM users WHERE email=? and password=?'
        return db.query(sql,[user.email,user.password], callback);
    },
    updateActiveAccount:function(email,callback){
        const sql='UPDATE users SET is_actived=1 WHERE email=?'
        return db.query(sql,[email], callback)
    },
    

}

module.exports = User;

//User.addUser({name:'long', username:'longhust',email:'longhust9x@gmail.com', password:'anhjundat',phone:'0975074684',avatar:'avatar.png'})