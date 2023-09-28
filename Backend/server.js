const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
const port = 3301;

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "tpes123",
  database: "fasttrade",
});

db.connect((err) => {
  if (err) {
    console.error("MySQL connection error:", err);
  } else {
    console.log("Connected to MySQL database");
  }
});

// DB query to register users
app.post("/register", (req, res) => {
  const sql = "INSERT INTO users (`name`, `email`, `password`) VALUES (?, ?, ?)";

  const values = [req.body.name, req.body.email, req.body.password];

  db.query(sql, values, (err, data) => {
    if (err) {
      console.error("Error registering user:", err);
      return res.status(500).json({ error: "Internal Server Error" });
    }

    console.log("User registered successfully");
    return res.status(200).json({ message: "User registered successfully" });
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
