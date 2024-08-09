const express = require('express');
const router = express.Router();

// Mock database
const incomes = [];

// Add income details
router.post('/', (req, res) => {
    const { userId, income } = req.body;
    incomes.push({ userId, income });
    res.status(201).send('Income details added');
});

// Calculate tax
router.post('/calculate-tax', (req, res) => {
    const { userId } = req.body;
    const userIncome = incomes.find(i => i.userId === userId);
    if (userIncome) {
        const tax = userIncome.income * 0.2; // Example tax calculation
        res.status(200).json({ tax });
    } else {
        res.status(404).send('Income details not found');
    }
});

module.exports = router;
