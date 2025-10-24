# 🍔 Food Website Backend

This is the **backend server for a Food Website**. It provides APIs for **user authentication, food items management, orders, cart, reviews, and payments**. Built using **Node.js, Express, and MongoDB** with JWT-based authentication.

---

## **Features**

- User registration and login (JWT authentication)
- Roles: `customer`, `chef`, `admin`
- CRUD operations for **food items** and **categories**
- Manage **orders** and **cart**
- Food **reviews and ratings**
- Payment processing (stub / can integrate Stripe/PayPal)
- Secure password hashing with bcrypt
- RESTful API design

---

## **Tech Stack**

- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose ODM)
- **Authentication:** JWT
- **Password Security:** bcrypt.js
- **Testing:** Postman / Insomnia

---

## **Installation**

1. Clone the repository:

```bash
git clone git+https://github.com/ShivamMathtech/foody_hub.git
cd food-website-backend
```

2. Install dependencies:

```bash
npm install
```

3. Setup environment variables in `.env`:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

4. Run the server:

```bash
npm run dev
```

Server will start at: `http://localhost:5000`

---

## **API Routes**

### **Authentication & Users**

- POST `/auth/register` – Register a new user
- POST `/auth/login` – Login user
- POST `/auth/logout` – Logout user
- GET `/users/:id` – Get user profile
- PUT `/users/:id` – Update user profile

### **Food Items**

- GET `/foods` – Get all foods
- GET `/foods/:id` – Get food by ID
- POST `/foods` – Add food (admin/chef)
- PUT `/foods/:id` – Update food
- DELETE `/foods/:id` – Delete food

### **Orders & Cart**

- POST `/orders` – Create an order
- GET `/orders/user/:userId` – Get user orders
- GET `/cart` – Get user cart
- POST `/cart` – Add item to cart
- PUT `/cart/:itemId` – Update cart item
- DELETE `/cart/:itemId` – Remove item from cart

### **Reviews**

- GET `/foods/:id/reviews` – Get food reviews
- POST `/foods/:id/reviews` – Add review

---

## **Models / Schemas**

### User

- `name` – String, required
- `email` – String, unique, required
- `password` – String, hashed
- `role` – Enum: `customer`, `chef`, `admin`

### Food

- `name`, `description`, `price`, `category`, `imageURL`

### Order

- `userId`, `items`, `totalAmount`, `status`, `createdAt`

### Cart

- `userId`, `items`

---

## **Usage**

- Use **Postman** or any API client to test endpoints
- Register a new user via `/auth/register`
- Login to get JWT token
- Pass token in `Authorization: Bearer <token>` header for protected routes

---

## **Folder Structure**

```
food-website-backend/
│
├─ controllers/       # Route controllers
├─ models/            # Mongoose schemas
├─ routes/            # API routes
├─ middleware/        # Auth and error handling
├─ utils/             # Helper functions
├─ server.js          # App entry point
├─ package.json
└─ README.md
```

---

## **Environment Variables**

| Variable     | Description                       |
| ------------ | --------------------------------- |
| `PORT`       | Server port                       |
| `MONGO_URI`  | MongoDB connection string         |
| `JWT_SECRET` | Secret key for JWT authentication |

---

## **License**

This project is **MIT Licensed**.
