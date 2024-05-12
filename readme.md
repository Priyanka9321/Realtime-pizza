# Realtime Pizza Order Tracker App

This project is a realtime online pizza ordering application built with Node.js, Express.js, MongoDB, EJS, Tailwind CSS, and Socket.IO. The app allows users to order pizzas and receive realtime notifications about their order status.

## Features

- **Login System**
  - Utilizes cookies and sessions
  - Database used as session store

- **Registration**
  - User registration functionality

- **User Roles**
  - Implementing different roles for users (e.g., customer, admin)

- **Shopping Cart**
  - Ability to add pizzas to a shopping cart

- **Realtime Pizza Status Tracker**
  - Realtime updates on pizza order status using Socket.IO for web socket communication

- **Express Project Unique Architecture**
  - Well-structured Express application architecture

## Technologies Used

- **Node.js**: Backend server environment
- **Express.js**: Web framework for Node.js
- **MongoDB**: Database for storing application data
- **EJS**: Template engine for generating HTML markup
- **Tailwind CSS**: Frontend CSS framework for styling
- **Socket.IO**: Library for realtime web socket communication
- **Passport**: Authentication middleware for Node.js
- **Git**: Version control system for collaborative development
- **ES6**: Modern JavaScript features for development
- **SCSS**: CSS preprocessor for enhanced styling capabilities

## Folder Structure

├── config/
│   ├── passport.js         # Passport authentication configuration
│   └── ...
├── controllers/
│   ├── authController.js   # Controller for authentication routes
│   ├── cartController.js   # Controller for shopping cart functionality
│   └── ...
├── models/
│   ├── User.js             # User model definition
│   ├── Pizza.js            # Pizza model definition
│   └── ...
├── public/
│   ├── css/                # Compiled CSS files (Tailwind CSS + SCSS)
│   ├── js/                 # Frontend JavaScript files
│   └── ...
├── routes/
│   ├── authRoutes.js       # Routes for authentication
│   ├── cartRoutes.js       # Routes for shopping cart
│   └── ...
├── services/
│   ├── authService.js      # Authentication service functions
│   ├── cartService.js      # Shopping cart service functions
│   └── ...
├── views/
│   ├── auth/
│   │   ├── login.ejs       # Login page template
│   │   └── register.ejs    # Register page template
│   ├── cart.ejs            # Shopping cart page template
│   ├── home.ejs            # Home page template
│   └── ...
├── .env                    # Environment variables configuration
├── app.js                  # Express application setup
├── server.js               # Server entry point
└── README.md               # Project documentation


## Getting Started

1. **Setup**

   - Clone the repository:
     ```bash
     git clone https://github.com/Priyanka9321/Realtime-pizza.git
     cd Realtime-pizza
     ```

   - Install dependencies:
     ```bash
     npm install
     ```

2. **Configuration**

   - Create a `.env` file based on `.env.example` and configure MongoDB connection and session secret.

3. **Run the Application**

   - Start the server:
     ```bash
     npm start
     ```

4. **Usage**

   - Access the application in your browser at `http://localhost:3000`
   - Register as a new user or login if you already have an account
   - Browse pizzas, add them to your cart, and place orders
   - Receive realtime updates on your order status

## Contributors

- Priyanka yadav <priyanyadav52004@gmail.com>

## License

This project is licensed under the [MIT License].
