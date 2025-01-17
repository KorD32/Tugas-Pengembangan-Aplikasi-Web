const mysql = require("mysql2/promise");

const connection = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "db_formulate",
});

connection.getConnection()
  .then(() => console.log("Connected to the database"))
  .catch((err) => console.error("Database connection failed:", err));

module.exports = connection;