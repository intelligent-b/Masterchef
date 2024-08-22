
const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');
// const connection = require('./db');

const app = express();
// const port = 8800;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Faizal@123',
  database: 'restaurant_db'
});

db.connect((err) => {
  if (err) {
    console.error("Error in Connecting to Database :",err.message);
    return;
  }
  console.log('MySQL Connected');
});


const createUserTable = `CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    phonenumber VARCHAR(10) NOT NULL
  )`;
  
  db.query(createUserTable, (err, result) => {
    if (err) {
      throw err;
    }
    console.log('User table created or already exists');
  });

// Routes
app.post('/signin', (req, res) => {
  const { name, email, password, confirmpassword, phonenumber } = req.body;

  if (password !== confirmpassword) {
    return res.status(400).json({ error: 'Passwords do not match' });
  }

  const sql = 'INSERT INTO users (name, email, password, phonenumber) VALUES (?, ?, ?, ?)';
  db.query(sql, [name, email, password, phonenumber], (err, result) => {
    if (err) {
      return res.status(500).json({ error: 'Error signing up' });
    }
    res.status(201).json({ message: 'Signup successful' });
  });
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  const query = 'SELECT * FROM users WHERE email = ?';
  db.query(query, [email], (err, results) => {
    if (err) {
      console.error('Error querying MySQL:', err);
      return res.status(500).json({ message: 'Internal server error' });
    }

    if (results.length === 0) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const user = results[0];
    const isPasswordValid = (password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    return res.status(200).json({ message: 'Login successful', user: { id: user.id, name: user.name, email: user.email } });
  });
});

const PORT = process.env.PORT || 8800;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${8800}`);
});