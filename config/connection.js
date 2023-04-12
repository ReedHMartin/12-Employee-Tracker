// Import MySQL2 package
const mysql = require("mysql2");

// Set up MySQL connection
const connectionConfig = {
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "employee_tracker_db",
  };

// Create MySQL connection using the config object
const connection = mysql.createConnection(connectionConfig);

// Connect to MySQL server and SQL database
connection.connect((err) => {
    if (err) throw err;
    console.log("Connected to the database.");
  });
  
  // Export connection object
  module.exports = connection;