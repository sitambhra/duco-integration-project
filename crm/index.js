const express = require('express');
const app = express();
const port = 3001;

app.use(express.json());

let customers = [];

app.post('/customers', (req, res) => {
    const { name, email } = req.body;
    if (!name || !email) {
        return res.status(400).json({ message: 'Name and email are required' });
    }
    const newCustomer = {
        id: customers.length + 1,
        name,
        email,
        createdAt: new Date()
    };
    customers.push(newCustomer);
    console.log('✅ New customer added:', newCustomer);
    res.status(201).json(newCustomer);
});

app.get('/customers', (req, res) => {
    res.json(customers);
});

app.listen(port, () => {
    console.log(`📦 CRM API running on http://localhost:${port}`);
});
