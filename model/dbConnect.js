var mysql = require('mysql');

/*Connect to database:*/
//Database connection string
var db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "0102yash",
  database: "machineTest"
});

//Connection to database
db.connect(function(err) {
  if (err) throw err;
  console.log("Connected to Database!");
});

module.exports = db;

