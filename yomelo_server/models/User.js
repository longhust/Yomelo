var db = require('../databaseConfig/dbConnection');

var User = {
    addUser: function (user, callback) {
        //db.connect();
        const sql="Insert into users (name, username,email,password,phone,avatar, type, token) values(?,?,?,?,?,?,?,?)";
        const data=[user.name, user.username, user.email, user.password, user.phone, user.avatar,user.type,user.token];
        console.log(user.name, user.username, user.email, user.password, user.phone, user.avatar,user.type,user.token)
        return db.query(sql,data,callback);
    },
    getAllUsers: function (callback) {
        return db.query("SELECT * FROM users", callback);
    },
    getUserByID: function (id, callback) {
        return db.query("SELECT * FROM users WHERE id=?", [id], callback);
    },
    editUserByID: function (callback) {

    }
}

module.exports = User;

//User.addUser({name:'long', username:'longhust',email:'longhust9x@gmail.com', password:'anhjundat',phone:'0975074684',avatar:'avatar.png'})