// Import MySQL2 package
const mysql = require("mysql2");

// Load environment variables from .env file
require('dotenv').config();

// Set up MySQL connection pool
const connectionPool = mysql.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

// Export connection pool object
module.exports = connectionPool;
