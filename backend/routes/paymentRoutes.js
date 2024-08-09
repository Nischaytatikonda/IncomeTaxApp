const express = require('express');
const router = express.Router();

// Mock database
const payments = [];

// Process tax payment
router.post('/', (req, res) => {
    const { userId, amount } = req.body;
    payments.push({ userId, amount });
    res.status(201).send('Tax payment processed');
});

// Get tax payment history
router.get('/history/:userId', (req, res) => {
    const { userId } = req.params;
    const userPayments = payments.filter(p => p.userId === userId);
    res.status(200).json(userPayments);
});

// Generate tax report
router.get('/report/:userId', (req, res) => {
    const { userId } = req.params;
    const userIncome = incomes.find(i => i.userId === userId);
    const userPayments = payments.filter(p => p.userId === userId);
    res.status(200).json({ income: userIncome, payments: userPayments });
});

module.exports = router;
