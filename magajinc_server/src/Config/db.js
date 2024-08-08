// Import Mysql2 Promise
const mysql = require("mysql2/promise");

const connectDB = async () => {
  try {
    // Connect to MySQL server without specifying a database
    const connection = await mysql.createConnection({
      host: process.env.HOST,
      user: process.env.USER,
      password: process.env.PASSWORD,
    });

    // Create the database if it doesn't exist
    await connection.query("CREATE DATABASE IF NOT EXISTS magajinc");

    // Connect to the 'magajinc' database
    const db = await mysql.createConnection({
      host: process.env.HOST,
      user: process.env.USER,
      password: process.env.PASSWORD,
      database: process.env.DATABASE,
    });

    console.log("MySQL Database Connected...");
    return db;
  } catch (err) {
    console.log(`Error while connecting to the database\n${err}`);
    throw err;
  }
};

module.exports = connectDB;
