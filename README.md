 # 🧩 Mini Integration Platform – Duco Pre-Interview Project

This project demonstrates a lightweight integration between two mock systems — a **CRM (Customer Relationship Management)** system and an **Inventory** system — using REST APIs and a simple middleware polling service.

---

## 🚀 Objective

When a new customer is added to the CRM, a corresponding "welcome package" request is automatically created in the Inventory system.

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- Axios (for making API requests)
- Thunder Client / Postman (for testing)
- JavaScript (CommonJS)

---

## 📁 Project Structure
```
Duco-Project/
├── crm/ → REST API to manage customers
├── inventory/ → REST API to manage package requests
├── middleware/ → Integration logic between CRM and Inventory
└── README.md → Project documentation
```

---

## 🔗 API Endpoints

### CRM API (`http://localhost:3001`)

| Method | Endpoint    | Description         |
|--------|-------------|---------------------|
| GET    | /customers  | List all customers  |
| POST   | /customers  | Add a new customer  |

## 📦 CRM API (`http://localhost:3001`)

### Example Request Body:
```json
{
  "name": "Sitambhra",
  "email": "sitambhra@example.com"
}
```

---

## 📦 Inventory API (`http://localhost:3002`)

| Method | Endpoint  | Description               |
|--------|-----------|---------------------------|
| GET    | /packages | List all package requests |
| POST   | /packages | Create a welcome package  |

### Example Request Body (used by middleware):
```json
{
  "customerId": 1,
  "customerName": "Sitambhra"
}
```

---

## 🔁 Integration Flow

- User adds a new customer using the CRM API.
- Middleware polls the CRM API every 5 seconds for new customers.
- If a new customer is found, the middleware sends their data to the Inventory API.
- Inventory API creates a new welcome package for the customer.
- Console logs confirm each action step.

---

## 🔄 Retry Logic

The middleware includes simple retry logic:

- If a request to the Inventory API fails, the middleware retries once after a 1-second delay.
- This helps handle temporary network or API issues without stopping the process.

---

## ☁️ Cloud Awareness (Theory)

This middleware logic can be deployed as a serverless function using **AWS Lambda**:

- AWS Lambda allows backend code to run without provisioning servers.
- The CRM can trigger a Lambda function (via webhook) when a new customer is created.
- Lambda can then send the customer info to the Inventory API.
- This makes the setup scalable and cost-effective.

---

## 📌 How to Run the Project

### Step 1 – Start CRM API
```bash
cd crm
node index.js
```

### Step 2 – Start Inventory API
```bash
cd inventory
node index.js
```

### Step 3 – Start Middleware
```bash
cd middleware
node index.js
```

---

## ✅ Test the Flow

Use **Thunder Client** or **Postman**:

### Send a `POST` request to:
```
http://localhost:3001/customers
```

**Body:**
```json
{
  "name": "Alice",
  "email": "alice@example.com"
}
```

Wait 5–10 seconds.

### Send a `GET` request to:
```
http://localhost:3002/packages
```

You should see a package created for Alice.

---

## 🧱 Architecture Diagram (ASCII)

```
[ Thunder Client / Postman ]
            ↓
         [ CRM API ]
            ↓
     [ Middleware Polling ]
            ↓
     [ Inventory API ]
```

## 👩‍💻 Author

**Sitambhra**  
 




