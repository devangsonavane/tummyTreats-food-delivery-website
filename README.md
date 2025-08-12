# 🍱 TummyTreats - Full Stack Food Delivery Web App

TummyTreats is a complete food ordering and delivery platform that allows users to browse items, add to cart, place orders, and track them. It also includes a dedicated admin panel for managing menu items, users, and orders. Built using the MERN stack with a modular folder structure, it ensures a smooth developer experience and a seamless user interface.

---

## 📌 Features

### 👤 User Side (Frontend)
- Browse food items
- Add to cart & place order
- View previous orders
- Login/Logout functionality

### 🛠️ Admin Panel
- Add new food items
- View list of all users & orders
- Manage and update inventory

### 🌐 Backend
- RESTful APIs for users, food, cart, and orders
- MongoDB database
- JWT-based authentication (if implemented)
- Environment-based configuration for secure deployment

---

## 🛠️ Tech Stack

| Layer        | Technology         |
|--------------|--------------------|
| Frontend     | React.js (Vite), Context API |
| Backend      | Node.js, Express.js |
| Database     | MongoDB + Mongoose |
| Admin Panel  | React.js |
| Styling      | Plain CSS |
| Auth         | JWT, bcrypt.js |

---

## 📁 Project Structure

TummyTreats/
├── admin/       # Admin dashboard (React-based)
├── backend/     # Express API, Models, Controllers
├── frontend/    # User-facing interface (React with Vite)

---

## ⚙️ Setup Instructions (For Local Use)

### 1. Clone the Repository

git clone https://github.com/devangsonavane/TumyTreats-Food-Delivery-Website.git
cd TummyTreats

---

### 2. Setup Backend

cd backend
npm install

Create a `.env` file inside `/backend`:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_here

Then run:

npm start

Your backend server will run on `http://localhost:5000`

---

### 3. Setup Frontend (Customer Interface)

cd ../frontend
npm install
npm run dev

Frontend will start on `http://localhost:5173`

---

### 4. Setup Admin Panel (Optional)

cd ../admin
npm install
npm run dev

Admin panel will also start on `http://localhost:5173` (ensure port doesn't conflict)

---

## 🔄 API Endpoints Overview

> Base URL: `http://localhost:5000/api`

### 🧑 Users
- `POST /api/users/register`
- `POST /api/users/login`
- `GET /api/users/:id`

### 🛒 Food Items
- `GET /api/foods/`
- `POST /api/foods/add`
- `DELETE /api/foods/:id`

### 🧾 Orders
- `POST /api/orders/place`
- `GET /api/orders/user/:userId`

### 🛍️ Cart
- `POST /api/cart/add`
- `GET /api/cart/:userId`
- `DELETE /api/cart/:itemId`

---

## 📦 Folder Breakdown

### `frontend/src/`
- `components/` - Reusable UI components like Navbar, Header, Footer, etc.
- `pages/` - Views like Cart, Home, MyOrders, PlaceOrder
- `Context/StoreContext.jsx` - React Context for cart and global state
- `main.jsx` - App entry point

### `backend/`
- `controllers/` - Business logic for food, user, cart, and orders
- `models/` - MongoDB schemas
- `routes/` - Express routes
- `middleware/auth.js` - JWT validation
- `config/db.js` - MongoDB connection

### `admin/`
- `pages/` - Add/List/Orders pages
- `components/` - Navbar, Sidebar

---

## ✅ To-Do & Improvements
-  Add payment gateway integration (e.g., Razorpay/Stripe)
-  Add search & filter for food items
-  Add mobile responsiveness
-  Add order delivery status updates

---

## 🧑‍💻 Contributing

1. Fork the repository
2. Create your branch: `git checkout -b feature/yourFeatureName`
3. Commit your changes: `git commit -m "Added your feature"`
4. Push to the branch: `git push origin feature/yourFeatureName`
5. Open a pull request

---

## 📄 License

This project is licensed under the MIT License.

---

## 🙋‍♂️ Contact

For any queries or feedback:

**Devang Sonavane**  
📧 [devangsonavane9018@gmail.com]  
📱 [LinkedIn](https://www.linkedin.com/in/devang-sonavane-293563261)
