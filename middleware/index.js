 const axios = require('axios');

let lastCustomerId = 0;

 setInterval(async () => {
    console.log("🕐 Checking for new customers...");

    try {
         const crmResponse = await axios.get('http://localhost:3001/customers');
        const customers = crmResponse.data;

        console.log("📋 Total customers found:", customers.length);

         const newCustomers = customers.filter(c => c.id > lastCustomerId);

        if (newCustomers.length === 0) {
            console.log("🚫 No new customers found.");
        }

        for (let customer of newCustomers) {
             await axios.post('http://localhost:3002/packages', {
                customerId: customer.id,
                customerName: customer.name
            });

            console.log(`🔄 Sent customer "${customer.name}" to Inventory`);
            lastCustomerId = customer.id;
        }
    } catch (error) {
        console.error('❌ Error in integration:', error.message);
    }
}, 5000);
 