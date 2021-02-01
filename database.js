var mysql = require('mysql');

//database connection
var db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'matcha'
});

module.exports = db;
