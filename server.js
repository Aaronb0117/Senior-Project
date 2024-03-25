const express = require('express');
const mysql = require('mysql2');
const path = require('path');
const session = require('express-session');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(session({
    secret: 'secret-key', // Change this to a random secret key
    resave: false,
    saveUninitialized: true
}));

// Create a connection to the MySQL database
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'new_password',
    port: 3306,
    database: 'database_1'
});

// Connect to the database
db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL database');
});

// Endpoint to create the database
app.get("/createdb", (req, res) => {
    let sql = "CREATE DATABASE IF NOT EXISTS database_1";
    db.query(sql, (err) => {
        if (err) {
            throw err;
        }
        res.send("Database created successfully");
    });
});

// Endpoint to create the student table with necessary columns for module unlocking
app.get("/createstudent", (req, res) => {
    let sql = `CREATE TABLE IF NOT EXISTS students(
        id int AUTO_INCREMENT,
        username VARCHAR(255), password VARCHAR(255),
        firstname VARCHAR(255), lastname VARCHAR(255),
        quiz1 INT DEFAULT 0, quiz2 INT DEFAULT 0, quiz3 INT DEFAULT 0, quiz4 INT DEFAULT 0,
        quiz5 INT DEFAULT 0, quiz6 INT DEFAULT 0, quiz7 INT DEFAULT 0, quiz8 INT DEFAULT 0,
        quiz9 INT DEFAULT 0, quiz10 INT DEFAULT 0, quiz11 INT DEFAULT 0, PRIMARY KEY(id)
    )`;
    db.query(sql, err => {
        if (err) {
            throw err;
        }
        res.send("Student table has been created successfully");
    });
});

// Endpoint to register a new user
app.post('/register', (req, res) => {
    const { username, password, firstName, lastName } = req.body;

    // Check if the username already exists
    db.query('SELECT * FROM students WHERE username = ?', [username], (err, result) => {
        if (err) {
            console.error('Error registering user:', err);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }

        // If username already exists, return error
        if (result.length > 0) {
            res.status(409).json({ error: 'Username already exists' });
            return;
        }

        // Insert new user into the database
        db.query('INSERT INTO students (username, password, firstname, lastname) VALUES (?, ?, ?, ?)', [username, password, firstName, lastName], (err, result) => {
            if (err) {
                console.error('Error registering user:', err);
                res.status(500).json({ error: 'Internal Server Error' });
                return;
            }
            console.log('User registered successfully');
            res.status(201).json({ message: 'User registered successfully' });
        });
    });
});
app.post('/saveQuiz', (req, res) => {
    const { quizNumber, quizScore } = req.body;
    const { username, password } = req.session.user;

    // Check if the user is logged in
    if (!username || !password) {
        res.status(401).json({ error: 'Unauthorized. Please log in' });
        return;
    }

    // Check if the username and password match in the database
    db.query('SELECT * FROM students WHERE username = ? AND password = ?', [username, password], (err, result) => {
        if (err) {
            console.error('Error saving quiz score:', err);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }

        // If user found, update the quiz score
        if (result.length > 0) {
            const studentId = result[0].id;
            const quizColumnName = `quiz${quizNumber}`;
            const sqlUpdate = `UPDATE students SET ${quizColumnName} = ? WHERE id = ?`;
            db.query(sqlUpdate, [quizScore, studentId], (updateErr, updateResult) => {
                if (updateErr) {
                    console.error('Error updating quiz score:', updateErr);
                    res.status(500).json({ error: 'Internal Server Error' });
                    return;
                }
                console.log('Quiz score updated successfully');
            });
        } else {
            res.status(401).json({ error: 'Invalid username or password' });
        }
    });
});

// Endpoint to handle login
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Check if username and password match in the database
    db.query('SELECT * FROM students WHERE username = ? AND password = ?', [username, password], (err, result) => {
        if (err) {
            console.error('Error logging in:', err);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }

        // If user found, store user information in session
        if (result.length > 0) {
            req.session.user = { username, password };
            res.status(200).json({ message: 'Login successful' });
        } else {
            res.status(401).json({ error: 'Invalid username or password' });
        }
    });
});

// Endpoint to fetch quiz scores for a logged-in user
app.get('/quizScores', (req, res) => {
    // Assuming the user is authenticated and their username is stored in the session
    const { username } = req.session.user;

    // Query the database to fetch quiz scores for the logged-in user
    db.query('SELECT quiz1, quiz2, quiz3, quiz4, quiz5, quiz6, quiz7, quiz8, quiz9, quiz10 FROM students WHERE username = ?', [username], (err, result) => {
        if (err) {
            console.error('Error fetching quiz scores:', err);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }

        if (result.length === 0) {
            // If no quiz scores found for the user, send an empty object
            res.json({});
            return;
        }

        // Extract quiz scores from the database result
        const quizScores = {
            quiz1: result[0].quiz1,
            quiz2: result[0].quiz2,
            quiz3: result[0].quiz3,
            quiz4: result[0].quiz4,
            quiz5: result[0].quiz5,
            quiz6: result[0].quiz6,
            quiz7: result[0].quiz7,
            quiz8: result[0].quiz8,
            quiz9: result[0].quiz9,
            quiz10: result[0].quiz10
        };

        // Send the quiz scores as JSON data
        res.json(quizScores);
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
