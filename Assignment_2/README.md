# FarmKart API
FarmKart API provides endpoints to manage farmers, customers, products, orders, and carts. This API is built with NEST.js and MongoDB and is designed to support the FarmKart application, where farmers can register products, and customers can view products, place orders, and manage their carts.

# Prerequisites
- Node.js (v14+)
- MongoDB (local or MongoDB Atlas)
- npm (Node package manager)

# Installation
- Clone the repository.
- cd farmkart-api
- npm install
- npm run start

# Environment Variables
- MONGO_URI	: MongoDB connection URI
- PORT	: Server port (default: 3000)

# Endpoints
## Farmer
- GET /api/farmer/:id - Get farmer details by ID
- POST /api/farmer - Create a new farmer
- PATCH /api/farmer/:id - Update farmer details by ID
- DELETE /api/farmer/:id - Delete a farmer by ID
## Customer
- GET /api/customer/:id - Get customer details by ID
- POST /api/customer - Create a new customer
- PATCH /api/customer/:id - Update customer details by ID
- DELETE /api/customer/:id - Delete a customer by ID
## Product
- GET /api/product - Get all products
- GET /api/product/:id - Get a single product by ID
- POST /api/product - Add a new product
- PATCH /api/product/:id - Update a product by ID
- DELETE /api/product/:id - Delete a product by ID
## Order
- GET /api/order/:id - Get order details by ID
- POST /api/order - Place a new order
- PATCH /api/order/:id - Update order details by ID
- DELETE /api/order/:id - Delete an order by ID
## Cart
- GET /api/cart/:customerId - Get customer’s cart by customer ID
- POST /api/cart - Add items to cart
- PATCH /api/cart/:customerId - Update customer’s cart items
- DELETE /api/cart/:customerId - Clear customer’s cart by customer ID
