const mysql = require("mysql");
const dbConfig = require("../config/db.config.js");

// Create a connection to the database_ingrees
const connection = mysql.createConnection({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB
});

// open the MySQL connection_the database_ingrees
connection.connect(error => {
  if (error) throw error;
  console.log("Successfully connected to the database ingreesdb.");
});

// Create a connection to the database_payroll-app
const connection_payroll = mysql.createConnection({
    host: dbConfig.HOST_payroll_app,
    user: dbConfig.USER_payroll_app,
    password: dbConfig.PASSWORD_payroll_app,
    database: dbConfig.DB_payroll_app
  });
  
  // open the MySQL connection_the database_payroll-app
  connection_payroll.connect(error => {
    if (error) throw error;
    console.log("Successfully connected to the database payroll-app.");
  });

module.exports = connection;