var mysql = require('mysql');
var connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'yomelo'
});


// connection.getConnection(function (err, connection) {
//     connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
//         if (error) throw error;
//         console.log('The solution is: ', results[0].solution);
//         //connection.release();
//     });
    
// })

module.exports = connection;  