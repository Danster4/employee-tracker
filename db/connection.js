// Connect to the database
const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  // Your MySQL username,
  user: 'root',
  // Your MySQL password
  password: 'Password',
  database: 'employee_tracker'
});

module.exports = db;