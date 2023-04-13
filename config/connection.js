// Import MySQL2 package
const mysql = require("mysql2");

// Load environment variables from .env file
require('dotenv').config();

// Set up MySQL connection
const connectionConfig = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
};

// Create MySQL connection using the config object
const connection = mysql.createPool(connectionConfig);

// Connect to MySQL server and SQL database
connection.getConnection((err) => {
  if (err) throw err;
  console.log('Connected to the database.');
});
  
  // Export connection object
  module.exports = connection;