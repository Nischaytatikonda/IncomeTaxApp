const express = require('express');
const router = express.Router();

// Mock database
const users = [];

// Register a new user
router.post('/register', (req, res) => {
    const { username, password } = req.body;
    users.push({ username, password });
    res.status(201).send('User registered');
});

// Authenticate a user
router.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        res.status(200).send('User authenticated');
    } else {
        res.status(401).send('Invalid credentials');
    }
});

module.exports = router;
