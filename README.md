# FarmKart

FarmKart is a comprehensive platform designed for seamless interaction between **Customers** and **Farmers**. It simplifies the process of buying and selling farm products through a user-friendly interface, robust features, and a mobile-first design.

---

## **Features**

### **Landing Page**
- Common entry point for all users.
- Provides an overview of FarmKart's functionality.
- Highlights key features and benefits for both customers and farmers.

### **Role-Based Access**
- Role-based authorization ensures tailored access:
  - **Customers**: Access to product browsing, cart, and orders.
  - **Farmers**: Access to product management and order views.

### **For Customers**
- **User Registration & Login**: Easy signup and secure login.
- **Browse Products**: View a wide range of farm products.
- **Search & Filter**: Find specific products by category or name.
- **Add to Cart**: Seamlessly add products to the cart with a single click.
- **Checkout & Payment**: Complete orders and make payments directly through the cart.
- **Order Management**: View past and ongoing orders in the "My Orders" section.

### **For Farmers**
- **Product Listing**: Add and manage farm products with ease.
- **Order Management**: View and handle orders related to listed products.

---

## **Tech Stack**

### **Backend**
- **Framework**: NestJS (TypeScript)
- **Database**: MongoDB
- **Features**:
  - Role-based authorization.
  - APIs for customers and farmers.

### **Frontend**
- **Web Application**: Built with Next.js, styled using Tailwind CSS and ShadCN.
- **Features**:
  - Responsive design.
  - Intuitive UI for seamless user experience.

### **Mobile Application**
- **Framework**: Ionic (React)
- **Features**:
  - Mobile-friendly interface.
  - Easy navigation for both customers and farmers.

### **Version Control**
- **GitHub**: Used for source code management, collaboration, and version control.

---

## **Setup Instructions**

### **Backend**
1. Clone the repository.
2. Navigate to the backend directory:
   ```bash
   cd farmkart-backend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create a `.env` file and configure:
   - MongoDB connection URI.
   - Authentication secrets.
5. Run the server:
   ```bash
   npm run start:dev
   ```

### **Frontend (Web)**
1. Navigate to the frontend directory:
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
1. Navigate to the Ionic project directory:
   ```bash
   cd farmkart-ionic
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the application on a device or emulator:
   ```bash
   ionic serve
   ```
---

## **License**
This project is licensed under the [MIT License](LICENSE).

---

## **Contact**
For any inquiries or support, feel free to reach out:
- Email: support@farmkart.com
- GitHub Issues: [FarmKart Issues](https://github.com/your-repo/issues)

---
