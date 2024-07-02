# Learnly Store: Cat Hoodies

Welcome to Learnly Store, where we bring you the coolest cat hoodies! This project combines a frontend built with Vue.js and a backend powered by Node.js and MongoDB. Whether you're a cat lover or just love comfy hoodies, you're in the right place.

## Frontend

### Technologies Used

- **Vue.js**: A progressive JavaScript framework for building user interfaces.
- **Vue Router**: Provides navigation for Vue.js applications.
- **Vuex**: State management pattern and library for Vue.js applications.
- **Tailwind CSS**: A utility-first CSS framework for quickly building custom designs.
- **Vite**: A fast frontend build tool that scales from small projects to large-scale applications.

### Getting Started

1. **Installation**

   ```bash
   npm install
   ```

2. **Development**

   ```bash
   npm run dev
   ```

   This command starts the development server.

3. **Build**

   ```bash
   npm run build
   ```

   Build for production.

4. **Preview**

   ```bash
   npm run preview
   ```

   Preview the production build locally.

### Features

- Browse and shop for cat hoodies.
- User authentication and authorization.
- Add products to cart and checkout.

## Backend

### Technologies Used

- **Node.js**: A JavaScript runtime built on Chrome's V8 JavaScript engine.
- **Express**: Fast, unopinionated, minimalist web framework for Node.js.
- **MongoDB**: A NoSQL database for storing application data.
- **Mongoose**: An ODM (Object Data Modeling) library for MongoDB and Node.js.

### Getting Started

1. **Installation**

   ```bash
   npm install
   ```

2. **Start Server**

   ```bash
   npm start
   ```

   This command starts the backend server.

### API Routes

- **POST `/api/register`**: Register a new user.
- **POST `/api/login`**: User login and authentication.
- **POST `/api/products`**: Add a new product.
- **GET `/api/products`**: Retrieve all products.
- **GET `/api/products/:id`**: Retrieve a product by ID.
- **PUT `/api/products/:id`**: Update a product by ID.
- **DELETE `/api/products/:id`**: Delete a product by ID.

### Features

- Secure user authentication using JWT.
- CRUD operations for managing products.
- CORS enabled for cross-origin requests.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request.

## License

This project is licensed under the ISC License.
