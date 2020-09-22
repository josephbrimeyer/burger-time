// Set up MySQL connection.
var mysql = require("mysql");

// For Heroku deployment and jawsdb.
var connection;
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "w1h4cr5sb73o944p.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "cil0bxedlqwx61nj",
    password: "ncynqfgp9w75qrjz",
    database: "ei63m9hzhu4znu0z",
  });
}

// Make connection.
connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
