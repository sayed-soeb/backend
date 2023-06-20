# Backend Project

This is a backend project built with Express.js and MongoDB. It includes user authentication using JSON Web Tokens (JWT) and CRUD operations with pagination functionality.

## Featues
-User authentication with JWT
-CRUD operations
-Get all items with pagination.

## Project Setup

# Clone the repository
git clone <repository-url>

# Install dependencies
npm install

# Configure environment variables
echo "PORT=<server-port>" >> .env
echo "MONGO_URI=<mongodb-connection-string>" >> .env
echo "JWT_SECRET=<jwt-secret-key>" >> .env

# Start the server
npm start

Replace <repository-url> with the URL of your Git repository. Replace <server-port> with the desired port number for the server, <mongodb-connection-string> with the connection string for your MongoDB database, and <jwt-secret-key> with a secret key for JWT token generation.

##API Endpoints
#Authentication
To access the protected routes, you need to include the JWT token in the 'Authorization' header of your requests. Set the 'Authorization' header value as 'Bearer <token>'. Replace <token> with the JWT token obtained from the authentication endpoint.

# API Endpoints

## Authentication

To access the protected routes, you need to include the JWT token in the 'Authorization' header of your requests. Set the 'Authorization' header value as 'Bearer <token>'. Replace `<token>` with the JWT token obtained from the authentication endpoint.

## Retrieve all items

**GET** `/api/items`

This endpoint retrieves all items from the database.

## Retrieve a specific item by ID

**GET** `/api/items/:id`

This endpoint retrieves a specific item by its ID.

## Create a new item (protected route)

**POST** `/api/items`

This endpoint creates a new item. It requires authentication using JWT.

## Update an existing item (protected route)

**PUT** `/api/items/:id`

This endpoint updates an existing item. It requires authentication using JWT.

## Delete an item (protected route)

**DELETE** `/api/items/:id`

This endpoint deletes an item. It requires authentication using JWT.
