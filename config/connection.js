var mysql = require("mysql");

 
module.exports = connection = mysql.createConnection({
    hostname: 'localhost',
    port: 3306,

    user: 'root',
    password: 'sheppman89',
    database: 'burgers_db'
});