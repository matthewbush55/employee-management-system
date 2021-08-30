// import required libraries
const mysql = require("mysql2");
const env = require("dotenv");

// set variable for mysql connection
const dbConnection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  dialect: process.env.DB_DIALECT,
  port: process.env.DB_PORT,
});

module.exports = dbConnection;
