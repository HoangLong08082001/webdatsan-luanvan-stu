const mysql = require("mysql");

const pool = mysql.createConnection({
  port: 3306,
  host: "bfm2x4zmkkdelajdhs5z-mysql.services.clever-cloud.com",
  user: "ujqnc79iludj8tpa",
  password: "2KkXx6kCEEhWSADEm9E4",
  database: "bfm2x4zmkkdelajdhs5z",
  connectionLimit: 10,
});

pool.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
    return;
  }
  console.log("Connected to MySQL!");
});
module.exports = pool;
