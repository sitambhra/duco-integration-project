const express = require('express');
const app = express();
const port = 3002;

app.use(express.json());

 let packages = [];

 app.post('/packages', (req, res) => {
    const { customerId, customerName } = req.body;

    if (!customerId || !customerName) {
        return res.status(400).json({ message: 'customerId and customerName are required' });
    }

    const newPackage = {
        id: packages.length + 1,
        customerId,
        customerName,
        status: "Pending",
        createdAt: new Date()
    };

    packages.push(newPackage);
    console.log('📦 New package request created:', newPackage);
    res.status(201).json(newPackage);
});

 app.get('/packages', (req, res) => {
    res.json(packages);
});

app.listen(port, () => {
    console.log(`📦 Inventory API running on http://localhost:${port}`);
});
