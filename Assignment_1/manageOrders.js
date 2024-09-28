/** Redirects to the Manage Product Page if the Role is Farmer */
document.getElementById('farmer-icon').addEventListener('click', function () {
    window.location.href = './manageProducts.html';
});

document.addEventListener("DOMContentLoaded", function () {
    const loginButton = document.querySelector('.btn.custom-btn');
    const profileBtn = document.getElementById("profile-btn");
    const logoutBtn = document.getElementById("logout-btn");
    const ordersBtn = document.getElementById("orders");
    const farmerIcon = document.getElementById('farmer-icon');

    /** Function to show logged-in state */
    function showLoggedInState() {
        loginButton.style.display = "none";
    }

    /** Function to show logged-out state */
    function showLoggedOutState() {
        loginButton.style.display = "block";
    }

    const isLoggedIn = localStorage.getItem("isLoggedIn");
    const farmerId = localStorage.getItem("farmerId");
    const userRole = localStorage.getItem("userRole");

    if ((isLoggedIn && farmerId) || isLoggedIn) {
        showLoggedInState();
    } else {
        showLoggedOutState();
    }

    // Update the orders button based on the user's role
    if (userRole === 'farmer') {
        ordersBtn.textContent = 'Manage Orders';
        ordersBtn.href = './manageOrders.html';
    } else if (userRole === 'user') {
        ordersBtn.textContent = 'Order History';
        ordersBtn.href = './orderHistory.html';
    }

    // Show or hide the farmer icon based on the user's role
    if (userRole === 'farmer') {
        farmerIcon.style.display = 'block';
    } else {
        farmerIcon.style.display = 'none';
    }

    /** Handle the Login Button click */
    loginButton.addEventListener("click", function () {
        localStorage.setItem("isLoggedIn", "true");
        showLoggedInState();
        window.location.href = './login.html'; // Redirect to login page if needed
    });

    /** Handles the log out button click */
    logoutBtn.addEventListener("click", function () {
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("farmerId");
        localStorage.removeItem("userRole");
        showLoggedOutState();

        // Redirect to the index page
        window.location.href = './index.html';
    });

    /** Handles the profile click */
    profileBtn.addEventListener('click', () => {
        // Check if the user is logged in
        const isLoggedIn = localStorage.getItem('isLoggedIn');

        if (isLoggedIn) {
            // If the user is logged in, redirect to the profile page
            window.location.href = './profile.html';
        } else {
            // If the user is not logged in, set a flag to redirect to the profile page after login
            localStorage.setItem('redirectFromProfile', true);
            // Redirect to the login page
            window.location.href = './login.html';
        }
    });
});

// Get the orders table body element
const ordersTableBody = document.getElementById('orders-table-body');

// Function to render orders table
function renderOrdersTable(orders) {
    ordersTableBody.innerHTML = '';
    orders.forEach(order => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${order.orderId}</td>
            <td>${order.customerName}</td>
            <td>${order.productId}</td>
            <td>${order.productName}</td>
            <td>${order.productQuantity}</td>
            <td>${order.totalAmount}</td>
            <td>${order.paymentStatus}</td>
            <td>${order.productStatus}</td>
            <td>${order.estimationDeliveryDate}</td>
            <td>${order.customerAddress}</td>
            <td>${order.customerEmail}</td>
            <td>
                <button class="btn btn-primary" onclick="updateOrderStatus(${order.orderId})">Update Status</button>
            </td>
        `;
        ordersTableBody.appendChild(row);
    });
}

/**  Function to update order status */
function updateOrderStatus(orderId) {
    // Get the order from local storage
    const orders = JSON.parse(localStorage.getItem('orders'));
    const order = orders.find(order => order.orderId === orderId);

    // Update the order status
    if (order.productStatus === 'Pending') {
        order.productStatus = 'Shipped';
    } else if (order.productStatus === 'Shipped') {
        order.productStatus = 'Delivered';
    } else if (order.productStatus === 'Delivered') {
        order.productStatus = 'Pending';
    }

    // Save the updated order back to local storage
    localStorage.setItem('orders', JSON.stringify(orders));

    // Render the updated orders table
    renderOrdersTable(orders);
}

// Function to add order
function addOrder() {
    // Get the order details from the form
    const orderId = document.getElementById('orderId').value;
    const customerName = document.getElementById('customerName').value;
    const productId = document.getElementById('productId').value;
    const productName = document.getElementById('productName').value;
    const productQuantity = document.getElementById('productQuantity').value;
    const totalAmount = document.getElementById('totalAmount').value;
    const paymentStatus = document.getElementById('paymentStatus').value;
    const productStatus = document.getElementById('productStatus').value;
    const estimationDeliveryDate = document.getElementById('estimationDeliveryDate').value;
    const customerAddress = document.getElementById('customerAddress').value;
    const customerEmail = document.getElementById('customerEmail').value;

    // Create a new order object
    const order = {
        orderId: orderId,
        customerName: customerName,
        productId: productId,
        productName: productName,
        productQuantity: productQuantity,
        totalAmount: totalAmount,
        paymentStatus: paymentStatus,
        productStatus: productStatus,
        estimationDeliveryDate: estimationDeliveryDate,
        customerAddress: customerAddress,
        customerEmail: customerEmail
    };

    const farmerId = localStorage.getItem('farmerId');

    // Get the orders from local storage
    const orders = JSON.parse(localStorage.getItem('orders')) || [];

    const farmerOrders = orders.filter(order => order.farmerId === farmerId);

    // Add the new order to the orders array
    orders.push(order);

    // Save the updated orders back to local storage
    localStorage.setItem('orders', JSON.stringify(orders));

    // Render the updated orders table
    renderOrdersTable(orders);
}

// Get the orders from local storage
const orders = JSON.parse(localStorage.getItem('orders'));

// Render the orders table
renderOrdersTable(orders);

// Add event listener to the add order button
document.getElementById('addOrderBtn').addEventListener('click', addOrder);

// Add event listener to the logout button
document.getElementById('logout-btn').addEventListener('click', function() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('farmerId');
    localStorage.removeItem('userRole');
    window.location.href = './index.html';
});

// Add event listener to the profile button
document.getElementById('profile-btn').addEventListener('click', function() {
    window.location.href = './profile.html';
});

// Add event listener to the orders button
document.getElementById('orders').addEventListener('click', function() {
    window.location.href = './manageOrders.html';
});

/** Redirects to the login Page */
document.querySelector('.btn.custom-btn').addEventListener('click', function () {
    window.location.href = './login.html';
});

/** Redirects to the Manage Product Page if the Role is Farmer */
document.getElementById('farmer-icon').addEventListener('click', function () {
    window.location.href = './manageProducts.html';
});

document.addEventListener("DOMContentLoaded", function () {
    const loginButton = document.querySelector('.btn.custom-btn');
    const profileBtn = document.getElementById("profile-btn");
    const logoutBtn = document.getElementById("logout-btn");

    // Function to show logged-in state
    function showLoggedInState() {
        loginButton.style.display = "none";
    }

    // Function to show logged-out state
    function showLoggedOutState() {
        loginButton.style.display = "block";
    }

    // Initialize state based on login status
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    const farmerId = localStorage.getItem("farmerId");

    if ((isLoggedIn && farmerId) || isLoggedIn) {
        showLoggedInState();
    } else {
        showLoggedOutState();
    }

    /** Handle the Login Button click */
    loginButton.addEventListener("click", function () {
        // Simulate login action
        localStorage.setItem("isLoggedIn", "true");
        showLoggedInState();
        window.location.href = './login.html'; // Redirect to login page if needed
    });

    /** Handles the log out button click */
    logoutBtn.addEventListener("click", function () {
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("farmerId");
        localStorage.removeItem("userRole");
        showLoggedOutState();

        // Redirect to the index page
        window.location.href = './index.html';
    });

    /** Handles the profile click */
    profileBtn.addEventListener('click', () => {
        // Check if the user is logged in
        const isLoggedIn = localStorage.getItem('isLoggedIn');

        if (isLoggedIn) {
            // If the user is logged in, redirect to the profile page
            window.location.href = './profile.html';
        } else {
            // If the user is not logged in, set a flag to redirect to the profile page after login
            localStorage.setItem('redirectFromProfile', true);
            // Redirect to the login page
            window.location.href = './login.html';
        }
    });

    // Get the user's role from local storage
    const userRole = localStorage.getItem('userRole');

    // Get the farmer icon element
    const farmerIcon = document.getElementById('farmer-icon');

    // Check if the user is a farmer
    if (userRole === 'farmer') {
        // Show the farmer icon
        farmerIcon.style.display = 'block';
    } else {
        // Hide the farmer icon
        farmerIcon.style.display = 'none';
    }
});