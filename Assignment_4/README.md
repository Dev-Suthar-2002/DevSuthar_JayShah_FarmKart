# FarmKart Documentation

FarmKart is a versatile platform developed to facilitate interactions between **Customers** and **Farmers**, offering a streamlined process for buying and selling farm products. The application consists of three main components: **Backend (NestJS)**, **Web Frontend (Next.js)**, and **Mobile Application (Ionic Framework)**.

---

## **Features Overview**

### **Landing Page**
- Serves as the common entry point for all users.
- Provides an overview of the platform and its functionalities.

### **Authentication**
- Role-based access control using **JWT Tokens**.
- Secure login and registration for both customers and farmers.

### **Customer Features**
- Browse products with category filters and search functionality.
- Add products to a shopping cart and proceed to checkout.
- Make secure payments and view order history.

### **Farmer Features**
- Manage product listings, including adding, editing, and deleting products.
- View and manage orders related to their listed products.

---

## **Tech Stack**

### **Backend**
- **Framework**: NestJS
- **Language**: TypeScript
- **Database**: MongoDB
- **Authentication**: JWT Token-based authentication.
- **Features**:
  - RESTful API design.
  - Modular architecture for scalability.
  - Integrated security features for role-based access.

### **Web Frontend**
- **Framework**: Next.js
- **Language**: TypeScript
- **Styling**: Tailwind CSS, ShadCN for component design.
- **Features**:
  - Responsive and user-friendly design.
  - Dynamic product listing and search.
  - Integration with backend APIs using Axios.

### **Mobile Application**
- **Framework**: Ionic Framework (React).
- **Language**: TypeScript.
- **Features**:
  - Cross-platform compatibility for Android and iOS.
  - Optimized for mobile usage.
  - API integration for seamless user experience.

### **Additional Tools**
- **Version Control**: GitHub for source code management.
- **Environment Management**: `.env` files for configuration.

---

## **Setup Instructions**

### **Backend**
1. Navigate to the backend folder:
   ```bash
   cd farmkart-backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure environment variables in `.env`:
   - MongoDB connection string.
   - JWT secret key.
4. Start the server:
   ```bash
   npm run start:dev
   ```

### **Web Frontend**
1. Navigate to the frontend folder:
   ```bash
   cd farmkart-frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

### **Mobile Application**
1. Navigate to the Ionic project folder:
   ```bash
   cd farmkart-ionic
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the Ionic app:
   ```bash
   ionic serve
   ```

---

## **Folder Structure**
```
FarmKart/
├── farmkart-backend/          # Backend logic (NestJS)
├── farmkart-frontend/         # Web application (Next.js)
├── farmkart-ionic/           # Mobile application (Ionic Framework)
├── README.md         # Project documentation
└── .env.example      # Example environment configuration
```

---

## **Environment Variables**

### **Backend**
Create a `.env` file in the `backend` directory with the following:
```
MONGO_URI=<Your MongoDB Connection URI>
JWT_SECRET=<Your JWT Secret Key>
PORT=<Server Port>
```

### **Frontend**
Configure API endpoints in the `.env.local` file:
```
NEXT_PUBLIC_API_URL=<Backend API URL>

---

## **License**
FarmKart is licensed under the [MIT License](LICENSE).

---
