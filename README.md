# Inventory Frontend

Live Demo: [https://inventory-frontend-mezbaur.vercel.app/](https://inventory-frontend-mezbaur.vercel.app/)

**Try it:** register an account on the live app. Each account sees only its own data.

> ⚠️ Note: Backend is hosted on Render, so the initial load may take around 15 seconds.

This is the frontend for the **Inventory Management System**, built with **React.js** and **Redux**. It connects with the backend API to manage products, suppliers, and orders efficiently, providing a smooth user experience and administrative control.

## ✨ Features

- Built with **React.js** and **Redux** for state management
- Seamless integration with backend APIs for inventory, suppliers, and orders
- Admin Dashboard to manage products, suppliers, and orders
- Brand dropdown with search box for easier product addition
- Form validation and controlled inputs for reliable data entry
- Live updates and consistent data flow with backend

## ⚙️ Environment Variables

Create a `.env` file in the project root:

```
VITE_API_BASE_URL=http://localhost:8080/api
```

Replace with your backend URL if different.

## 🚀 Getting Started

1. Clone the repository:

```
git clone https://github.com/mezbaur2004/inventoryFrontend.git
cd inventoryFrontend
```

2. Install dependencies:

```
npm install
```

3. Start the development server:

```
npm run dev
```

The app will open at `http://localhost:5173`. You can log in with the admin credentials above, browse and manage products, suppliers, and orders, or test the full inventory flow.

## 📁 Project Structure

```
inventoryFrontend/
├─ public/             # Static files (index.html, favicon, etc.)
├─ src/
│  ├─ APIRequest/      # API request helper functions
│  ├─ assets/          # Images, icons, and static assets
│  ├─ components/      # Reusable UI components
│  ├─ helper/          # Utility functions
│  ├─ pages/           # Screens: Home, Admin Dashboard, Products, Suppliers, Orders
│  ├─ redux/           # State management (actions, reducers, store)
│  ├─ App.jsx          # Main app component
│  └─ main.jsx         # Entry point for React/Vite
├─ .env                # Environment variables
├─ .gitignore
├─ index.html
├─ package.json
├─ package-lock.json
├─ README.md
└─ vite.config.js
```

## 🔍 Quick Test Flow

- Open the live demo or run locally
- Log in with the admin credentials above
- Browse and manage products, suppliers, and orders
- Ensure the frontend communicates correctly with the backend API

## 🧑‍💻 Author

**Mezbaur Are Rafi** – [GitHub](https://github.com/mezbaur2004)
